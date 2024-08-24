import styles from './Cart.module.css'; 

function Cart({ cartItems }) {
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={styles.cart}>
      <h2>Tu carrito</h2>
      {cartItems.length === 0 ? (
        <p>Aún no tienes productos en tu carrito.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className={styles.cartItem}>
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
      <div className={styles.total}>
        <strong>Total: ${totalAmount.toFixed(2)}</strong>
      </div>
    </div>
  );
}

export default Cart;
