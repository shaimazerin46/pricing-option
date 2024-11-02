

import './App.css'
import LineChart from './components/LineChart/LineChart'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PriceOption from './components/PriceOption/PriceOption'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <PriceOption></PriceOption>
      <br />
      <LineChart></LineChart>
     
    </>
  )
}

export default App
