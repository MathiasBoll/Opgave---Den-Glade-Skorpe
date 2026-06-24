import { useState, useEffect, useRef } from 'react'
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from '../../services/api'
import styles from './Backoffice.module.css'
import empStyles from './BackofficeEmployees.module.css'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3042'

const EMPTY_FORM = { name: '', position: '' }

export default function BackofficeEmployees() {
  const [employees, setEmployees] = useState([])
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
    getEmployees()
      .then(setEmployees)
      .catch(() => setError('Kunne ikke hente medarbejdere.'))
      .finally(() => setLoading(false))
  }

  useEffect(load, [])

  function handleAddChange(e) {
    setAddForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleEditChange(e) {
    setEditForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function openEdit(emp) {
    setEditTarget(emp)
    setEditForm({ name: emp.name, position: emp.position })
    setEditImage(null)
    setError(null)
  }

  async function handleAdd(e) {
    e.preventDefault()
    if (!addForm.name.trim() || !addForm.position.trim()) {
      setError('Navn og stilling er påkrævet.')
      return
    }
    setAddSaving(true)
    setError(null)
    try {
      const fd = new FormData()
      fd.append('name', addForm.name.trim())
      fd.append('position', addForm.position.trim())
      if (addImage) fd.append('file', addImage)
      await createEmployee(fd)
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
    if (!editForm.name.trim() || !editForm.position.trim()) {
      setError('Navn og stilling er påkrævet.')
      return
    }
    setEditSaving(true)
    setError(null)
    try {
      const fd = new FormData()
      fd.append('id', editTarget._id)
      fd.append('name', editForm.name.trim())
      fd.append('position', editForm.position.trim())
      if (editImage) fd.append('file', editImage)
      await updateEmployee(fd)
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
      await deleteEmployee(id)
      setDeleteConfirm(null)
      if (editTarget?._id === id) setEditTarget(null)
      load()
    } catch {
      setError('Kunne ikke slette medarbejderen.')
      setDeleteConfirm(null)
    }
  }

  if (loading) return <p className={styles.status}>Henter medarbejdere…</p>

  return (
    <section>
      <h2 className={styles.pageTitle}>Medarbejdere</h2>
      {error && <p className={empStyles.errorMsg}>{error}</p>}

      {deleteConfirm && (
        <div className={empStyles.confirmBox}>
          <p>Er du sikker på at du vil slette denne medarbejder?</p>
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
              <th>Navn</th>
              <th>Billede</th>
              <th>Stilling</th>
              <th>Handlinger</th>
            </tr>
          </thead>
          <tbody>
            {employees.length === 0 && (
              <tr><td colSpan={4} className={styles.noData}>Ingen medarbejdere endnu</td></tr>
            )}
            {employees.map((emp) => {
              const imgSrc = emp.image ? (emp.image.startsWith('http') ? emp.image : `${BASE_URL}/${emp.image}`) : null
              return (
                <tr key={emp._id}>
                  <td>{emp.name}</td>
                  <td>
                    {imgSrc
                      ? <img src={imgSrc} alt={emp.name} className={styles.thumb} />
                      : <span className={styles.thumbFallback}>👤</span>
                    }
                  </td>
                  <td>{emp.position || '—'}</td>
                  <td>
                    <div className={empStyles.rowActions}>
                      <button className={empStyles.deleteBtn} onClick={() => setDeleteConfirm(emp._id)}>Slet</button>
                      <button className={empStyles.editBtn} onClick={() => openEdit(emp)}>Rediger</button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className={empStyles.inlineFormSection} style={{ marginTop: '2rem', maxWidth: '480px' }}>
        <h3 className={empStyles.inlineFormTitle}>
          {editTarget ? `Rediger: ${editTarget.name}` : 'Tilføj medarbejder'}
        </h3>
        {editTarget ? (
          <form onSubmit={handleEdit} className={empStyles.form}>
            <label className={empStyles.label}>Navn<input name="name" type="text" className={empStyles.input} value={editForm.name} onChange={handleEditChange} required /></label>
            <label className={empStyles.label}>Billede (valgfrit)<input ref={editFileRef} type="file" accept="image/*" className={empStyles.fileInput} onChange={(e) => setEditImage(e.target.files[0] || null)} /></label>
            <label className={empStyles.label}>Stilling<input name="position" type="text" className={empStyles.input} value={editForm.position} onChange={handleEditChange} required /></label>
            <div className={empStyles.formActions}>
              <button type="submit" className={empStyles.saveBtn} disabled={editSaving}>{editSaving ? 'Gemmer…' : 'Gem ændringer'}</button>
              <button type="button" className={empStyles.cancelBtn} onClick={() => setEditTarget(null)}>Annuller</button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleAdd} className={empStyles.form}>
            <label className={empStyles.label}>Navn<input name="name" type="text" className={empStyles.input} value={addForm.name} onChange={handleAddChange} required /></label>
            <label className={empStyles.label}>Billede (valgfrit)<input ref={addFileRef} type="file" accept="image/*" className={empStyles.fileInput} onChange={(e) => setAddImage(e.target.files[0] || null)} /></label>
            <label className={empStyles.label}>Stilling<input name="position" type="text" className={empStyles.input} value={addForm.position} onChange={handleAddChange} required /></label>
            <div className={empStyles.formActions}>
              <button type="submit" className={empStyles.saveBtn} disabled={addSaving}>{addSaving ? 'Gemmer…' : 'Tilføj medarbejder'}</button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}