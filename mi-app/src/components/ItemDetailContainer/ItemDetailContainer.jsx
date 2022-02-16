import { doc, getDoc, getFirestore} from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true); 
    const {detailId} = useParams()
    
    useEffect(() => {
        const db = getFirestore()
        const queryProd = doc(db, 'items', detailId)

        getDoc(queryProd)
        .then(resp => setProduct({id: resp.id, ...resp.data()})
        )
        .catch(err => err)
        .finally(()=>setLoading(false))

    }, [detailId])
    

    return (
        <div className="container">
            <div>
                {loading ? <h3>Loading...</h3> : <ItemDetail product={product}/>}
            </div>         
        </div>
    );
};

export default ItemDetailContainer;
