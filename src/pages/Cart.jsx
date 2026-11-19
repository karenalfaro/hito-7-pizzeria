import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext'
import { formatPrice } from '../utils/formatPrice'

const Cart = () => {
  const { cart, aumentar, disminuir, total } = useContext(CartContext)
  const { token } = useContext(UserContext)

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h5 className="mb-4">Detalles del pedido:</h5>

          {cart.length === 0 ? (
            <p className="text-muted">Tu carrito está vacío.</p>
          ) : (
            cart.map((pizza) => (
              <div key={pizza.id} className="d-flex align-items-center justify-content-between mb-3">
                <div className="d-flex align-items-center">
                  <img src={pizza.img} alt={pizza.name} width="60" className="me-3 rounded" />
                  <span className="text-capitalize">{pizza.name}</span>
                </div>

                <div className="d-flex align-items-center">
                  <span className="me-3">${formatPrice(pizza.price)}</span>
                  <button className="btn btn-outline-danger btn-sm" onClick={() => disminuir(pizza.id)}>
                    -
                  </button>
                  <span className="mx-3">{pizza.count}</span>
                  <button className="btn btn-outline-primary btn-sm" onClick={() => aumentar(pizza.id)}>
                    +
                  </button>
                </div>
              </div>
            ))
          )}

          <h3 className="mt-4">Total: ${formatPrice(total)}</h3>
          <button className="btn btn-dark mt-2" disabled={!token}>
            Pagar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart