import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import ItemList from '../ItemList/ItemList';


const ItemListContainer = ({ saludo }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); 
    const { categoriaId } = useParams()

    useEffect(() => {
        const db = getFirestore()
        if (categoriaId) {
            const queryCollection = query (collection(db, 'items'), where ('categoria', '==', categoriaId))
            getDocs(queryCollection)
            .then (res => setData(res.docs.map(prod=>({id: prod.id, ...prod.data()}))))
            .catch(err => err)
            .finally(()=>setLoading(false))            
        } else {
            const queryCollection = collection (db, 'items')
            getDocs(queryCollection)
            .then(res => setData( res.docs.map(prod => ( { id: prod.id, ...prod.data() } ) ) ))
            .catch(err => err)
            .finally(()=> setLoading(false))
        }    
    }, [categoriaId]);

    return (
        <div>
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                <div>
                    <h2>{saludo}</h2>
                    <ItemList productos={data} />
 
                </div>
            )}
        </div>
    );
};

export default ItemListContainer;
