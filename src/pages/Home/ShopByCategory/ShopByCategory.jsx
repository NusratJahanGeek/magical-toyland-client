import { useEffect, useState } from 'react';
import Toys from '../Home/Toys/Toys';


const ShopByCategory = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
        .then(res => res.json())
        .then(data => setToys(data));
    },[])

    return (
        <div className='my-20 mx-20 px-20'>
            <h2 className='text-3xl text-center mb-8' style={{color: "#5B5F8E"}}>Shop By Category</h2>
            {
                <Toys toys={toys}></Toys>
            }
        
      </div>
    );
};

export default ShopByCategory;