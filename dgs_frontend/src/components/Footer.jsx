import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <img src="/logo.png" alt="Den Glade Skorpe" className={styles.logo} />
        <div className={styles.info}>
          <span>Email: gladskorpe@pizzaglad.dk</span>
          <span>Tlf: 12343678</span>
          <span>Adresse: Skorpevej 42, 1234 Pizzabyen</span>
        </div>
      </div>
    </footer>
  )
}
