import { useParams } from 'react-router-dom'

export default function DishDetail() {
  const { id } = useParams()
  return <main><h1>Dish {id}</h1></main>
}
