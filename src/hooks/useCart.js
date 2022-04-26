import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb"

const useCart = ()=>{
    const [cart , setCart] = useState([])
    useEffect(()=>{
       const storedProduct =  getStoredCart()
       const savedProduct = []
       const keys = Object.keys(storedProduct)
       fetch('http://localhost:5000/productByIds',{
           method:'POST',
           headers:{
               "content-type":"application/json"
           },
           body:JSON.stringify(keys)
       })
       .then(res => res.json())
       .then(products => {
              for(const id in storedProduct){
                  const addedProduct = products.find(product => product._id === id)
                  if(addedProduct){
                      const quantity = storedProduct[id]
                      addedProduct.quantity = quantity
                      savedProduct.push(addedProduct)
                  }
              }
              setCart(savedProduct)
            })
    },[])
    return [cart ,setCart]
}
export default useCart