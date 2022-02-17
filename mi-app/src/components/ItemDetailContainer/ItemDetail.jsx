import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cartContext'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({ product }) => {

    const [show, setShow] = useState(true)

    const { name, price, stock, img} = product

    const {addToCart} = useCartContext()

    const onAdd = (contador) => {
        addToCart ({...product, cantidad:contador})
        setShow(false)
    }

    return (
           
            <div className="itemCard">
                        <div className="itemImg">
                            <img src={img} alt={name}/>
                        </div>

                        <div className="itemInfoDetail">
                            <h2>{name}</h2>
                            <p>Precio: ${price}</p>
                            <p>Stock: {stock}</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim elit nisi, ut rhoncus purus hendrerit vel. Cras ac ultricies lacus, eu vulputate ligula.</p>               
                            {show ? <ItemCount stock={stock} onAdd={onAdd} initial={1}/> :
                            <div>
                                <Link to='/cart'><button className="itemBtnDetailCart">Terminar la Compra</button></Link>
                                <Link to='/'><button className="itemBtnDetailCart">Seguir Comprando</button></Link>
                            </div>}
                        </div>
            </div>
            )
}

export default ItemDetail;