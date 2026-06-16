import { useState, useEffect, useRef } from 'react'
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from '../../services/api'
import styles from './Backoffice.module.css'
import empStyles from './BackofficeEmployees.module.css'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3042'

const EMPTY_FORM = { name: '', position: '' }

export default function BackofficeEmployees() {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)
  const [formOpen, setFormOpen] = useState(false)
  const [editTarget, setEditTarget] = useState(null) // null = create, obj = edit
  const [form, setForm] = useState(EMPTY_FORM)
  const [imageFile, setImageFile] = useState(null)
  const [saving, setSaving] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState(null) // id to confirm delete
  const [error, setError] = useState(null)
  const fileRef = useRef(null)

  function load() {
    setLoading(true)
    getEmployees()
      .then(setEmployees)
      .catch(() => setError('Kunne ikke hente medarbejdere.'))
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

  function openEdit(emp) {
    setEditTarget(emp)
    setForm({ name: emp.name, position: emp.position })
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
    if (!form.name.trim() || !form.position.trim()) {
      setError('Navn og stilling er påkrævet.')
      return
    }
    setSaving(true)
    setError(null)
    try {
      const fd = new FormData()
      fd.append('name', form.name.trim())
      fd.append('position', form.position.trim())
      if (imageFile) fd.append('file', imageFile)

      if (editTarget) {
        fd.append('id', editTarget._id)
        await updateEmployee(fd)
      } else {
        await createEmployee(fd)
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
      await deleteEmployee(id)
      setDeleteConfirm(null)
      load()
    } catch {
      setError('Kunne ikke slette medarbejderen.')
      setDeleteConfirm(null)
    }
  }

  if (loading) return <p className={styles.status}>Henter medarbejdere…</p>

  return (
    <section>
      <div className={empStyles.header}>
        <h2 className={styles.pageTitle}>Medarbejdere</h2>
        <button className={empStyles.addBtn} onClick={openCreate}>+ Tilføj medarbejder</button>
      </div>

      {error && !formOpen && <p className={empStyles.errorMsg}>{error}</p>}

      {/* Create / Edit form */}
      {formOpen && (
        <div className={empStyles.formCard}>
          <h3 className={empStyles.formTitle}>
            {editTarget ? `Rediger: ${editTarget.name}` : 'Ny medarbejder'}
          </h3>
          <form onSubmit={handleSave} className={empStyles.form}>
            <label className={empStyles.label}>
              Navn
              <input
                name="name"
                type="text"
                className={empStyles.input}
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
            <label className={empStyles.label}>
              Stilling
              <input
                name="position"
                type="text"
                className={empStyles.input}
                value={form.position}
                onChange={handleChange}
                required
              />
            </label>
            <label className={empStyles.label}>
              Billede (valgfrit)
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className={empStyles.fileInput}
                onChange={(e) => setImageFile(e.target.files[0] || null)}
              />
            </label>
            {error && <p className={empStyles.errorMsg}>{error}</p>}
            <div className={empStyles.formActions}>
              <button type="submit" className={empStyles.saveBtn} disabled={saving}>
                {saving ? 'Gemmer…' : 'Gem'}
              </button>
              <button type="button" className={empStyles.cancelBtn} onClick={closeForm}>
                Annuller
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Delete confirmation */}
      {deleteConfirm && (
        <div className={empStyles.confirmBox}>
          <p>Er du sikker på at du vil slette denne medarbejder?</p>
          <div className={empStyles.confirmActions}>
            <button className={empStyles.deleteConfirmBtn} onClick={() => handleDelete(deleteConfirm)}>
              Ja, slet
            </button>
            <button className={empStyles.cancelBtn} onClick={() => setDeleteConfirm(null)}>
              Annuller
            </button>
          </div>
        </div>
      )}

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Foto</th>
              <th>Navn</th>
              <th>Stilling</th>
              <th>Handlinger</th>
            </tr>
          </thead>
          <tbody>
            {employees.length === 0 && (
              <tr><td colSpan={4} className={styles.noData}>Ingen medarbejdere endnu</td></tr>
            )}
            {employees.map((emp) => {
              const imgSrc = emp.image ? `${BASE_URL}/${emp.image}` : null
              return (
                <tr key={emp._id}>
                  <td>
                    {imgSrc
                      ? <img src={imgSrc} alt={emp.name} className={styles.thumb} />
                      : <span className={styles.thumbFallback}>👤</span>
                    }
                  </td>
                  <td>{emp.name}</td>
                  <td>{emp.position || '—'}</td>
                  <td>
                    <div className={empStyles.rowActions}>
                      <button className={empStyles.editBtn} onClick={() => openEdit(emp)}>Rediger</button>
                      <button className={empStyles.deleteBtn} onClick={() => setDeleteConfirm(emp._id)}>Slet</button>
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
