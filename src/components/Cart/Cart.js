import React from 'react';

const Cart = (props) => {
	const cart = props.cart;
	const totalPrice = cart.reduce((total, product) => total + product.price, 0);

	let shipping = 0;
	if (totalPrice > 35) {
		shipping = 0;
	} else if (totalPrice > 15) {
		shipping = 4.99;
	} else if (totalPrice > 0) {
		shipping = 12.99;
	}

	const tax = Math.round(totalPrice / 10);
	const grandTotal = totalPrice + shipping + tax;
	return (
		<div>
			<h4>Order Summary</h4>
			<p>items ordered: {cart.length}</p>
			<p>product price:{totalPrice}</p>
			<p>
				<small>shipping cost:{shipping}</small>
			</p>
			<p>
				<small>tax+vat:{tax}</small>
			</p>
			<p>total price:{grandTotal}</p>
		</div>
	);
};

export default Cart;
