import React, { useState } from 'react'

export default function Formfield() {
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState(0);
    const [imageFile,setImageFile]=useState("")
    const [products, setProducts] = useState([])

    const onSubmit = (e) => {
        e.preventDefault();
        setProducts([...products,{name: name, brand: brand, price: price,image:imageFile}])
        console.log(products)
    }

  return (
    <div>
         {products && products.map((product,i) => {
            return(
                    <div key={i}>
                        <h1 key={product.id}>{product.name}</h1>
                        <p>{product.brand}</p>
                        <p>{product.price}</p>
                        <img  src={product.image} />
                    </div>
                );
                                                })

         }
        <form onSubmit={onSubmit}>
                    <label>Name:</label>
                    <input type='text' onChange={(e) => setName(e.target.value )} /><br /><br />
                    <label>Brand:</label>
                    <input type='text' onChange={(e) => setBrand( e.target.value)} /><br /><br />
                    <label>Price:</label>
                    <input type='text' onChange={(e) => setPrice( e.target.value)} /><br /><br />
                    <input type="file" onChange={(e)=> setImageFile(URL.createObjectURL(e.target.files[0]))}  />
                    <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
