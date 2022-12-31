import './App.css'
const App = ()=>{
  return(
    <div className='container'>
        <h4>Counter</h4>
        <div className='quantity'>
          <a  className='quantity_minus' title='descrement'><span>-</span></a>
          <input type="text" className='quantity_input' />
          <a  title='increment'><span>+</span></a>
        </div>
    </div>
  )
}
export default App