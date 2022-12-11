import {useDispatch, useSelector} from "react-redux";
import {changeTitle, clearTitle, titleWithParams} from "../../store/titleSlice";

const MainPage = () => {
  const {title} = useSelector(state=>state.titleReducer);
  const dispatch = useDispatch();
  return(
    <div>
      <button onClick={()=>dispatch(changeTitle())}>Change title</button>
      <button onClick={()=>dispatch(clearTitle())}>Clear title</button>
      <button onClick={()=>dispatch(titleWithParams('lol'))}>Change title with params</button>
      <h1>{title}</h1>
    </div>
  )
}

export default MainPage;