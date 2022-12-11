import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {plusTotal,minusTotal,multiplyTotal,divideTotal} from "../../store/totalSlice";

const CalculatePage = () => {
  const {total} = useSelector(state=>state.totalReducer);
  const dispatch = useDispatch();
  //Я специально в useState передал строку,а не 0. Так надо
  const [numberOne,setNumberOne] = useState('');
  const [numberTwo,setNumberTwo] = useState('');
  const [showError,setShowError] = useState(false);
  const numbersValid = () => {
    if (numberOne && numberTwo) {
      setShowError(false);
      return true
    }
    setShowError(true);
  }
  return(
    <div>
      <h1>{total}</h1>
      <input type="number" placeholder='number one'
             value={numberOne}
             onChange={e=>setNumberOne(e.target.value)}
      />
      <button
        onClick={()=>numbersValid()
          ?dispatch(plusTotal([+numberOne,+numberTwo]))
          :false
      }>
        +
      </button>
      <button
        onClick={()=>numbersValid()
          ?dispatch(minusTotal([+numberOne,+numberTwo]))
          :false
      }>
        -
      </button>
      <button
        onClick={()=> numbersValid()
            ?dispatch(multiplyTotal([+numberOne, +numberTwo]))
            :false
        }>
        *
      </button>
      <button
        onClick={()=> {
          if (+numberTwo === 0) return alert('На ноль делить нельзя!');
          return numbersValid()
            ?dispatch(divideTotal([+numberOne, +numberTwo]))
            :false;
        }}>
        /
      </button>
      <input type="number" placeholder='number two'
             value={numberTwo}
             onChange={e=>setNumberTwo(e.target.value)}
      />
      {
        showError
          ?<p className='error'>Ошибка! Заполните все поля!</p>
          :null
      }
    </div>
  )
}

export default CalculatePage;