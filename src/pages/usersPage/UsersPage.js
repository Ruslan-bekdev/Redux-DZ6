import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addProducts} from "../../store/productSlice";

const UsersPage = () => {
  const [product,setProduct] = useState('');
  const {products} = useSelector(state=>state.productReducer);
  const dispatch = useDispatch();
  return(
    <>
      <input type="text" placeholder='product'
             value={product}
             onChange={e=>setProduct(e.target.value)}
      />
      <button onClick={()=>product.trim()?dispatch(addProducts(product.trim())):false}>add</button>
      <ul>
        {
          products.map((user,index)=><li key={index}>{user}</li>)
        }
      </ul>
    </>
  )
}

export default UsersPage;