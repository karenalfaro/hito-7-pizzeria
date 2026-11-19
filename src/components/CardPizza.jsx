import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { formatPrice } from '../utils/formatPrice'

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const { agregarPizza } = useContext(CartContext)

  return (
    <div className="card h-100">
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body">
        <h5 className="card-title text-capitalize">Pizza {name}</h5>
        <hr />

        <p className="text-center text-muted mb-1">Ingredientes:</p>
        <ul>
          {ingredients.map((ingrediente) => (
            <li key={ingrediente}>🍕 {ingrediente}</li>
          ))}
        </ul>
        <hr />

        <h4 className="text-center">Precio: ${formatPrice(price)}</h4>

        <div className="d-flex justify-content-around mt-3">
          <Link to={`/pizza/${id}`} className="btn btn-outline-dark btn-sm">
            Ver Más 👀
          </Link>
          <button
            className="btn btn-dark btn-sm"
            onClick={() => agregarPizza({ id, name, price, img })}
          >
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza