import { Link } from 'react-router-dom'
import { useBasket } from '../context/BasketContext'
import styles from './DishCard.module.css'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3042'

export default function DishCard({ dish }) {
  const { addItem } = useBasket()

  const imgSrc = dish.image
    ? dish.image.startsWith('http') ? dish.image : `${BASE_URL}/${dish.image}`
    : null

  function handleAdd() {
    addItem({
      ...dish,
      selectedSize: 'normal',
      selectedPrice: dish.price?.normal,
      basketKey: `${dish._id}-normal`,
    })
  }

  return (
    <article className={styles.card}>
      <Link to={`/dish/${dish._id}`} className={styles.imgWrap}>
        {imgSrc ? (
          <img src={imgSrc} alt={dish.title} className={styles.img} />
        ) : (
          <div className={styles.placeholder}>🍕</div>
        )}
      </Link>
      <div className={styles.body}>
        <Link to={`/dish/${dish._id}`} className={styles.name}>
          {dish.title}
        </Link>
        <p className={styles.desc}>{dish.description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>{dish.price?.normal} kr.</span>
          <button
            className={styles.addBtn}
            onClick={handleAdd}
            aria-label={`Tilføj ${dish.title} til kurv`}
          >
            + Tilføj
          </button>
        </div>
      </div>
    </article>
  )
}
