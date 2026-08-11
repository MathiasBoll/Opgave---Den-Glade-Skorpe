// Genbrugelig bekræftelsesmodal — bruges til slet-handlinger i backoffice.
// Erstatter tidligere inline advarselsboks med en rigtig modal (overlay + fokus på handlingen).
import styles from './ConfirmModal.module.css'

export default function ConfirmModal({
  title = 'Er du sikker?',
  message,
  confirmLabel = 'Ja, slet',
  cancelLabel = 'Annuller',
  onConfirm,
  onCancel,
}) {
  return (
    <div className={styles.overlay} onClick={onCancel}>
      <div className={styles.modal} role="alertdialog" aria-modal="true" aria-label={title} onClick={(e) => e.stopPropagation()}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.message}>{message}</p>
        <div className={styles.actions}>
          <button className={styles.confirmBtn} onClick={onConfirm}>{confirmLabel}</button>
          <button className={styles.cancelBtn} onClick={onCancel}>{cancelLabel}</button>
        </div>
      </div>
    </div>
  )
}
