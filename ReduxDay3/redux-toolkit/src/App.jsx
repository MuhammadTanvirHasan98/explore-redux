import './App.css'
import Counter from './Redux/Features/Counter/Counter'

function App() {


  return (
    <>
    <div className='flex flex-col items-center'>
       <h1 className='text-cyan-600 text-2xl font-bold mb-4'>Counter App</h1>
       <Counter/>
    </div>
    </>
  )
}

export default App
