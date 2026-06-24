import { useState, useEffect, useRef } from 'react'
import { getDishes, getCategories, createDish, updateDish, deleteDish } from '../../services/api'
import styles from './Backoffice.module.css'
import empStyles from './BackofficeEmployees.module.css'
import dishStyles from './BackofficeDishes.module.css'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3042'

const EMPTY_FORM = { title: '', priceNormal: '', priceFamily: '', ingredients: '', category: '' }

export default function BackofficeDishes() {
  const [dishes, setDishes] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [addForm, setAddForm] = useState(EMPTY_FORM)
  const [addImage, setAddImage] = useState(null)
  const [addSaving, setAddSaving] = useState(false)
  const [editTarget, setEditTarget] = useState(null)
  const [editForm, setEditForm] = useState(EMPTY_FORM)
  const [editImage, setEditImage] = useState(null)
  const [editSaving, setEditSaving] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState(null)
  const [error, setError] = useState(null)
  const addFileRef = useRef(null)
  const editFileRef = useRef(null)

  function load() {
    setLoading(true)
    Promise.all([getDishes(), getCategories()])
      .then(([d, c]) => { setDishes(d); setCategories(c) })
      .catch(() => setError('Kunne ikke hente data.'))
      .finally(() => setLoading(false))
  }

  useEffect(load, [])

  function handleAddChange(e) {
    setAddForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleEditChange(e) {
    setEditForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function openEdit(dish) {
    setEditTarget(dish)
    setEditForm({
      title: dish.title,
      priceNormal: dish.price?.normal ?? '',
      priceFamily: dish.price?.family ?? '',
      ingredients: Array.isArray(dish.ingredients) ? dish.ingredients.join(', ') : (dish.ingredients || ''),
      category: typeof dish.category === 'object' ? dish.category?.name : (dish.category || ''),
    })
    setEditImage(null)
    setError(null)
  }

  async function handleAdd(e) {
    e.preventDefault()
    if (!addForm.title.trim() || !addForm.priceNormal || !addForm.ingredients.trim() || !addForm.category.trim()) {
      setError('Titel, normal pris, ingredienser og kategori er påkrævet.')
      return
    }
    setAddSaving(true)
    setError(null)
    try {
      const price = { normal: Number(addForm.priceNormal) }
      if (addForm.priceFamily) price.family = Number(addForm.priceFamily)
      const fd = new FormData()
      fd.append('title', addForm.title.trim())
      fd.append('price', JSON.stringify(price))
      fd.append('ingredients', addForm.ingredients.trim())
      fd.append('category', addForm.category.trim())
      if (addImage) fd.append('file', addImage)
      await createDish(fd)
      setAddForm(EMPTY_FORM)
      setAddImage(null)
      if (addFileRef.current) addFileRef.current.value = ''
      load()
    } catch {
      setError('Noget gik galt. Prøv igen.')
    } finally {
      setAddSaving(false)
    }
  }

  async function handleEdit(e) {
    e.preventDefault()
    if (!editForm.title.trim() || !editForm.priceNormal || !editForm.ingredients.trim() || !editForm.category.trim()) {
      setError('Titel, normal pris, ingredienser og kategori er påkrævet.')
      return
    }
    setEditSaving(true)
    setError(null)
    try {
      const price = { normal: Number(editForm.priceNormal) }
      if (editForm.priceFamily) price.family = Number(editForm.priceFamily)
      const fd = new FormData()
      fd.append('id', editTarget._id)
      fd.append('title', editForm.title.trim())
      fd.append('price', JSON.stringify(price))
      fd.append('ingredients', editForm.ingredients.trim())
      fd.append('category', editForm.category.trim())
      if (editImage) fd.append('file', editImage)
      await updateDish(fd)
      setEditTarget(null)
      setEditForm(EMPTY_FORM)
      setEditImage(null)
      load()
    } catch {
      setError('Noget gik galt. Prøv igen.')
    } finally {
      setEditSaving(false)
    }
  }

  async function handleDelete(id) {
    try {
      await deleteDish(id)
      setDeleteConfirm(null)
      if (editTarget?._id === id) setEditTarget(null)
      load()
    } catch {
      setError('Kunne ikke slette retten.')
      setDeleteConfirm(null)
    }
  }

  const CategorySelect = ({ name, value, onChange }) =>
    categories.length > 0 ? (
      <select name={name} className={empStyles.input} value={value} onChange={onChange} required>
        <option value="">Vælg kategori</option>
        {categories.map((c) => (
          <option key={c._id} value={c.name}>{c.name}</option>
        ))}
      </select>
    ) : (
      <input name={name} type="text" className={empStyles.input} value={value} onChange={onChange} required />
    )

  if (loading) return <p className={styles.status}>Henter retter…</p>

  return (
    <section>
      <h2 className={styles.pageTitle}>Retter</h2>
      {error && <p className={empStyles.errorMsg}>{error}</p>}

      {deleteConfirm && (
        <div className={empStyles.confirmBox}>
          <p>Er du sikker på at du vil slette denne ret?</p>
          <div className={empStyles.confirmActions}>
            <button className={empStyles.deleteConfirmBtn} onClick={() => handleDelete(deleteConfirm)}>Ja, slet</button>
            <button className={empStyles.cancelBtn} onClick={() => setDeleteConfirm(null)}>Annuller</button>
          </div>
        </div>
      )}

      <div className={dishStyles.formGrid}>
        {/* Add dish */}
        <div className={empStyles.inlineFormSection}>
          <h3 className={empStyles.inlineFormTitle}>Tilføj ret</h3>
          <form onSubmit={handleAdd} className={empStyles.form}>
            <label className={empStyles.label}>Titel<input name="title" type="text" className={empStyles.input} value={addForm.title} onChange={handleAddChange} required /></label>
            <label className={empStyles.label}>Billede (valgfrit)<input ref={addFileRef} type="file" accept="image/*" className={empStyles.fileInput} onChange={(e) => setAddImage(e.target.files[0] || null)} /></label>
            <label className={empStyles.label}>Ingredienser (kommasepareret)<input name="ingredients" type="text" className={empStyles.input} value={addForm.ingredients} onChange={handleAddChange} required placeholder="Tomat, Ost, Kylling" /></label>
            <label className={empStyles.label}>Normal pris (kr.)<input name="priceNormal" type="number" min="1" className={empStyles.input} value={addForm.priceNormal} onChange={handleAddChange} required /></label>
            <label className={empStyles.label}>Familie pris (valgfrit)<input name="priceFamily" type="number" min="1" className={empStyles.input} value={addForm.priceFamily} onChange={handleAddChange} /></label>
            <label className={empStyles.label}>Kategori<CategorySelect name="category" value={addForm.category} onChange={handleAddChange} /></label>
            <div className={empStyles.formActions}>
              <button type="submit" className={empStyles.saveBtn} disabled={addSaving}>{addSaving ? 'Gemmer…' : 'Tilføj ret'}</button>
            </div>
          </form>
        </div>

        {/* Update dish */}
        <div className={empStyles.inlineFormSection}>
          {editTarget ? (
            <>
              <h3 className={empStyles.inlineFormTitle}>Rediger: {editTarget.title}</h3>
              <form onSubmit={handleEdit} className={empStyles.form}>
                <label className={empStyles.label}>Titel<input name="title" type="text" className={empStyles.input} value={editForm.title} onChange={handleEditChange} required /></label>
                <label className={empStyles.label}>Billede (valgfrit)<input ref={editFileRef} type="file" accept="image/*" className={empStyles.fileInput} onChange={(e) => setEditImage(e.target.files[0] || null)} /></label>
                <label className={empStyles.label}>Ingredienser (kommasepareret)<input name="ingredients" type="text" className={empStyles.input} value={editForm.ingredients} onChange={handleEditChange} required /></label>
                <label className={empStyles.label}>Normal pris (kr.)<input name="priceNormal" type="number" min="1" className={empStyles.input} value={editForm.priceNormal} onChange={handleEditChange} required /></label>
                <label className={empStyles.label}>Familie pris (valgfrit)<input name="priceFamily" type="number" min="1" className={empStyles.input} value={editForm.priceFamily} onChange={handleEditChange} /></label>
                <label className={empStyles.label}>Kategori<CategorySelect name="category" value={editForm.category} onChange={handleEditChange} /></label>
                <div className={empStyles.formActions}>
                  <button type="submit" className={empStyles.saveBtn} disabled={editSaving}>{editSaving ? 'Gemmer…' : 'Gem ændringer'}</button>
                  <button type="button" className={empStyles.cancelBtn} onClick={() => setEditTarget(null)}>Annuller</button>
                </div>
              </form>
            </>
          ) : (
            <p style={{ fontFamily: 'var(--font-body)', color: '#888', marginTop: '0.5rem' }}>
              Klik "Rediger" på en ret i tabellen for at opdatere den.
            </p>
          )}
        </div>
      </div>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Billede</th>
              <th>Titel</th>
              <th>Ingredienser</th>
              <th>Pris</th>
              <th>Pris (familie)</th>
              <th>Kategori</th>
              <th>Handlinger</th>
            </tr>
          </thead>
          <tbody>
            {dishes.length === 0 && (
              <tr><td colSpan={7} className={styles.noData}>Ingen retter endnu</td></tr>
            )}
            {dishes.map((dish) => {
              const imgSrc = dish.image ? (dish.image.startsWith('http') ? dish.image : `${BASE_URL}/${dish.image}`) : null
              const ings = Array.isArray(dish.ingredients)
                ? dish.ingredients.map((i) => (typeof i === 'string' ? i : i.name)).join(', ')
                : (dish.ingredients || '—')
              return (
                <tr key={dish._id}>
                  <td>
                    {imgSrc
                      ? <img src={imgSrc} alt={dish.title} className={styles.thumb} />
                      : <span className={styles.thumbFallback}>🍕</span>
                    }
                  </td>
                  <td>{dish.title}</td>
                  <td style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', maxWidth: '180px' }}>{ings}</td>
                  <td>{dish.price?.normal} kr.</td>
                  <td>{dish.price?.family ? `${dish.price.family} kr.` : '—'}</td>
                  <td>{dish.category?.name || dish.category || '—'}</td>
                  <td>
                    <div className={empStyles.rowActions}>
                      <button className={empStyles.editBtn} onClick={() => openEdit(dish)}>Rediger</button>
                      <button className={empStyles.deleteBtn} onClick={() => setDeleteConfirm(dish._id)}>Slet</button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}