import './App.css'
import { useDispatch,useSelector } from 'react-redux';
import { incNumber,decNumber } from './actions';
const App = ()=>{

  const myState = useSelector((state)=>state.changeNumber)
  const dispatch = useDispatch()
  return(
    <div className='container'>
        <h4>Counter</h4>
        <div className='quantity'>
          <a  onClick={()=> dispatch(decNumber())} className='quantity_minus' title='descrement'><span>-</span></a>
          <input type="text" className='quantity_input' value={myState} />
          <a  onClick={()=> dispatch(incNumber())} title='increment'><span>+</span></a>
        </div>
    </div>
  )
}
export default App