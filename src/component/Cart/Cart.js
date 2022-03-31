
const Cart = (props) => {
    const {cart} = props
    let total = 0
    let shipping = 0;
    for(const product of cart){
        total = total + product.price
        shipping = shipping + product.shipping
    }
    // const tex = Number(total * 0.1.toFixed(2))
    const tex = parseFloat((total * 0.1).toFixed(2))
    const grandTotal = total + shipping + tex
    return (
        <div>
            <h2>Order summary</h2>
            <p>Selected Items:{cart.length}</p>
            <p>Total Price:{total} </p>
            <p>Total Shipping Charge:{shipping} </p>
            <p>Tax:{tex}</p>
            <h4>Grand Total:{grandTotal} </h4>
        </div>
    );
};

export default Cart;