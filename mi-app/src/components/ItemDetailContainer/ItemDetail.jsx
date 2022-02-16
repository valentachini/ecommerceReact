import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cartContext'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({ product }) => {

    const [show, setShow] = useState(true)

    const { name, price, stock, img} = product

    const {addToCart} = useCartContext()

    const onAdd = (contador) => {
        addToCart (product, contador)
        setShow(false)
    }

    return (       
            <div className="itemCard">
                        <div className="itemImg">
                            <img src={img} alt={name}/>
                        </div>

                        <div className="itemInfo">
                            <h2>{name}</h2>
                            <h3>Precio: {price}</h3>
                            <h3>Stock: {stock}</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim elit nisi, ut rhoncus purus hendrerit vel. Cras ac ultricies lacus, eu vulputate ligula. Donec sagittis enim at sagittis molestie.</p>               
                            {show ? <ItemCount stock={stock} onAdd={onAdd} initial={1}/> :
                            <div className="itemBtn">
                                <Link to='/cart'><button>Terminar la Compra</button></Link>
                                <Link to='/'><button>Seguir Comprando</button></Link>
                            </div>}
                        </div>
            </div>
            )
}

export default ItemDetail;