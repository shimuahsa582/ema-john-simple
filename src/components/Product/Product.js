import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const App = (props) => {
	// console.log(props);
	const { img, name, seller, price, stock } = props.product;
	return (
		<div className="product">
			<div>
				<img src={img} alt="" />
			</div>
			<div>
				<h3 className="product-name">{name}</h3>
				<p>
					<small>By:{seller}</small>
				</p>
				<p>${price}</p>
				<p>
					<small>Only{stock} left in stock-order soon</small>
				</p>
				<button className="cart-button" onClick={() => props.handleAddProduct(props.product)}>
					<FontAwesomeIcon icon={faShoppingCart} />add to cart
				</button>
			</div>
		</div>
	);
};

export default App;
