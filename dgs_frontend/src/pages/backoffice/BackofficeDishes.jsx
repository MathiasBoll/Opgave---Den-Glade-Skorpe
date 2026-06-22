import { useState, useEffect, useRef } from 'react'
import { getDishes, getCategories, createDish, updateDish, deleteDish } from '../../services/api'
import styles from './Backoffice.module.css'
import empStyles from './BackofficeEmployees.module.css'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3042'

const EMPTY_FORM = { title: '', priceNormal: '', priceFamily: '', ingredients: '', category: '' }

export default function BackofficeDishes() {
  const [dishes, setDishes] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [formOpen, setFormOpen] = useState(false)
  const [editTarget, setEditTarget] = useState(null)
  const [form, setForm] = useState(EMPTY_FORM)
  const [imageFile, setImageFile] = useState(null)
  const [saving, setSaving] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState(null)
  const [error, setError] = useState(null)
  const fileRef = useRef(null)

  function load() {
    setLoading(true)
    Promise.all([getDishes(), getCategories()])
      .then(([d, c]) => { setDishes(d); setCategories(c) })
      .catch(() => setError('Kunne ikke hente data.'))
      .finally(() => setLoading(false))
  }

  useEffect(load, [])

  function openCreate() {
    setEditTarget(null)
    setForm(EMPTY_FORM)
    setImageFile(null)
    setError(null)
    setFormOpen(true)
  }

  function openEdit(dish) {
    setEditTarget(dish)
    setForm({
      title: dish.title,
      priceNormal: dish.price?.normal ?? '',
      priceFamily: dish.price?.family ?? '',
      ingredients: Array.isArray(dish.ingredients) ? dish.ingredients.join(', ') : (dish.ingredients || ''),
      category: dish.category || '',
    })
    setImageFile(null)
    setError(null)
    setFormOpen(true)
  }

  function closeForm() {
    setFormOpen(false)
    setEditTarget(null)
    setError(null)
  }

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSave(e) {
    e.preventDefault()
    if (!form.title.trim() || !form.priceNormal || !form.ingredients.trim() || !form.category.trim()) {
      setError('Titel, normal pris, ingredienser og kategori er påkrævet.')
      return
    }
    setSaving(true)
    setError(null)
    try {
      const price = { normal: Number(form.priceNormal) }
      if (form.priceFamily) price.family = Number(form.priceFamily)

      const fd = new FormData()
      fd.append('title', form.title.trim())
      fd.append('price', JSON.stringify(price))
      fd.append('ingredients', form.ingredients.trim())
      fd.append('category', form.category.trim())
      if (imageFile) fd.append('file', imageFile)

      if (editTarget) {
        fd.append('id', editTarget._id)
        await updateDish(fd)
      } else {
        await createDish(fd)
      }
      closeForm()
      load()
    } catch {
      setError('Noget gik galt. Prøv igen.')
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(id) {
    try {
      await deleteDish(id)
      setDeleteConfirm(null)
      load()
    } catch {
      setError('Kunne ikke slette retten.')
      setDeleteConfirm(null)
    }
  }

  if (loading) return <p className={styles.status}>Henter retter…</p>

  return (
    <section>
      <div className={empStyles.header}>
        <h2 className={styles.pageTitle}>Retter</h2>
        <button className={empStyles.addBtn} onClick={openCreate}>+ Tilføj ret</button>
      </div>

      {error && !formOpen && <p className={empStyles.errorMsg}>{error}</p>}

      {/* Create / Edit form */}
      {formOpen && (
        <div className={empStyles.formCard}>
          <h3 className={empStyles.formTitle}>
            {editTarget ? `Rediger: ${editTarget.title}` : 'Ny ret'}
          </h3>
          <form onSubmit={handleSave} className={empStyles.form}>
            <label className={empStyles.label}>
              Titel
              <input name="title" type="text" className={empStyles.input} value={form.title} onChange={handleChange} required />
            </label>
            <label className={empStyles.label}>
              Normal pris (kr.)
              <input name="priceNormal" type="number" min="1" className={empStyles.input} value={form.priceNormal} onChange={handleChange} required />
            </label>
            <label className={empStyles.label}>
              Familie pris (valgfrit)
              <input name="priceFamily" type="number" min="1" className={empStyles.input} value={form.priceFamily} onChange={handleChange} />
            </label>
            <label className={empStyles.label}>
              Ingredienser (kommasepareret)
              <input name="ingredients" type="text" className={empStyles.input} value={form.ingredients} onChange={handleChange} required placeholder="Tomat, Ost, Kylling" />
            </label>
            <label className={empStyles.label}>
              Kategori
              {categories.length > 0 ? (
                <select name="category" className={empStyles.input} value={form.category} onChange={handleChange} required>
                  <option value="">Vælg kategori</option>
                  {categories.map((c) => (
                    <option key={c._id} value={c.name}>{c.name}</option>
                  ))}
                </select>
              ) : (
                <input name="category" type="text" className={empStyles.input} value={form.category} onChange={handleChange} required />
              )}
            </label>
            <label className={empStyles.label}>
              Billede (valgfrit)
              <input ref={fileRef} type="file" accept="image/*" className={empStyles.fileInput} onChange={(e) => setImageFile(e.target.files[0] || null)} />
            </label>
            {error && <p className={empStyles.errorMsg}>{error}</p>}
            <div className={empStyles.formActions}>
              <button type="submit" className={empStyles.saveBtn} disabled={saving}>{saving ? 'Gemmer…' : 'Gem'}</button>
              <button type="button" className={empStyles.cancelBtn} onClick={closeForm}>Annuller</button>
            </div>
          </form>
        </div>
      )}

      {/* Delete confirmation */}
      {deleteConfirm && (
        <div className={empStyles.confirmBox}>
          <p>Er du sikker på at du vil slette denne ret?</p>
          <div className={empStyles.confirmActions}>
            <button className={empStyles.deleteConfirmBtn} onClick={() => handleDelete(deleteConfirm)}>Ja, slet</button>
            <button className={empStyles.cancelBtn} onClick={() => setDeleteConfirm(null)}>Annuller</button>
          </div>
        </div>
      )}

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Billede</th>
              <th>Titel</th>
              <th>Kategori</th>
              <th>Pris</th>
              <th>Handlinger</th>
            </tr>
          </thead>
          <tbody>
            {dishes.length === 0 && (
              <tr><td colSpan={5} className={styles.noData}>Ingen retter endnu</td></tr>
            )}
            {dishes.map((dish) => {
              const imgSrc = dish.image ? (dish.image.startsWith('http') ? dish.image : `${BASE_URL}/${dish.image}`) : null
              return (
                <tr key={dish._id}>
                  <td>
                    {imgSrc
                      ? <img src={imgSrc} alt={dish.title} className={styles.thumb} />
                      : <span className={styles.thumbFallback}>🍕</span>
                    }
                  </td>
                  <td>{dish.title}</td>
                  <td>{dish.category?.name || dish.category || '—'}</td>
                  <td>
                    {dish.price?.normal} kr.
                    {dish.price?.family && <span style={{ color: '#888', marginLeft: '0.4rem' }}>/ {dish.price.family} kr.</span>}
                  </td>
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

