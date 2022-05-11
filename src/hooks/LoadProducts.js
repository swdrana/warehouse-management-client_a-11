import { useEffect, useState } from "react";

const LoadProducts = () => {
    const [Products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8080/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    return [Products]
}
export default LoadProducts;