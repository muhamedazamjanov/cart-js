import ButtonDelete from '../ButtonDelete';
import Count from '../Count';
import formatPrice from './../../utils/priceFormatter'
import './style.scss';

const Product = ({ product }) => {
	const { img, title, priceTotal, count, id } = product;

	return (
		<section className='product'>
			<div className='product__img'>
				<img src={`./img/products/${img}`} alt={title} />
			</div>
			<div className='product__title'>{title}</div>
			<div className='product__count'>
				<Count count={count} id={id} />
			</div>
			<div className='product__price'>
				{formatPrice(priceTotal)} руб.
			</div>
			<div className='product__controls'>
				<ButtonDelete  id={id} />
			</div>
		</section>
	);
};

export default Product;
