import { Link } from 'react-router-dom'
import { useBasket } from '../context/BasketContext'
import styles from './DishCard.module.css'

const BASE_URL = 'http://localhost:3042'

export default function DishCard({ dish }) {
  const { addItem } = useBasket()

  const imgSrc = dish.image
    ? `${BASE_URL}/${dish.image}`
    : null

  return (
    <article className={styles.card}>
      <Link to={`/dish/${dish._id}`} className={styles.imgWrap}>
        {imgSrc ? (
          <img src={imgSrc} alt={dish.name} className={styles.img} />
        ) : (
          <div className={styles.placeholder}>🍕</div>
        )}
      </Link>
      <div className={styles.body}>
        <Link to={`/dish/${dish._id}`} className={styles.name}>
          {dish.name}
        </Link>
        <p className={styles.desc}>{dish.description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>{dish.price} kr.</span>
          <button
            className={styles.addBtn}
            onClick={() => addItem(dish)}
            aria-label={`Tilføj ${dish.name} til kurv`}
          >
            + Tilføj
          </button>
        </div>
      </div>
    </article>
  )
}
