import './style.scss';
import { useContext } from 'react';
import { AppContext } from '../Cart';

const Button = ({ title }) => {
    const {addProduct} = useContext(AppContext);
    return <button className='button' onClick={addProduct}> {title}</button>;
}

export default Button;