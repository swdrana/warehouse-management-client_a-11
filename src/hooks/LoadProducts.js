import { useEffect, useState } from "react";

const LoadProducts = () => {
    const [Products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    return [Products]
}
export default LoadProducts;