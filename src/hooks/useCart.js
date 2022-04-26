import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb"

const useCart = (products)=>{
    const [cart , setCart] = useState([])
    useEffect(()=>{
       const storedProduct =  getStoredCart()
       const savedProduct = []
       for(const id in storedProduct){
           const addedProduct = products.find(product => product._id === id)
           if(addedProduct){
               const quantity = storedProduct[id]
               addedProduct.quantity = quantity
               savedProduct.push(addedProduct)
           }
       }
       setCart(savedProduct)
    },[products])
    return [cart ,setCart]
}
export default useCart