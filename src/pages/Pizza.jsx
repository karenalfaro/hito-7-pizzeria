import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { formatPrice } from '../utils/formatPrice'
import { imagenesPizzas } from '../utils/imagenesPizzas'

const Pizza = () => {
  const { id } = useParams()
  const [pizza, setPizza] = useState(null)

  useEffect(() => {
    consultarApi()
  }, [id])

  const consultarApi = async () => {
    const url = `http://localhost:5000/api/pizzas/${id}`
    const response = await fetch(url)
    const data = await response.json()
    setPizza(data)
  }

  if (pizza === null) {
    return <p className="text-center my-5">Cargando...</p>
  }

  return (
    <div className="container my-5">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-6">
            <img src={imagenesPizzas[pizza.id]} className="w-100 h-100 object-fit-cover rounded-start" alt={pizza.name} />
          </div>

          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title text-capitalize">Pizza {pizza.name}</h2>
              <p className="card-text">{pizza.desc}</p>

              <h5>Ingredientes:</h5>
              <ul>
                {pizza.ingredients.map((ingrediente) => (
                  <li key={ingrediente}>🍕 {ingrediente}</li>
                ))}
              </ul>

              <div className="d-flex justify-content-between align-items-center mt-4">
                <h3>Precio: ${formatPrice(pizza.price)}</h3>
                <button className="btn btn-dark">Añadir 🛒</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pizza