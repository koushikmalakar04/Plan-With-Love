import Tours from './components/Tours';
import './App.css';
import { useState } from 'react';
import plans from './Data';
function App() {

  const [tours, setTours] = useState(plans)



  const [buttons, setButtons] = useState([]);
  const addNewButton = () => {
    setButtons(prevButtons => [...prevButtons, <buttons key={prevButtons.length}>New Button</buttons>]);
    setTours(plans);
  };



  function interestedHandler(id){
    const newTour = tours.filter(tour => tour.id===id)
    setTours(newTour)
  }

  function removeHandler(id){
      const newTour = tours.filter(tour => tour.id !== id)
      setTours(newTour)
  }

  function restorePage(){
   setTours(plans)
  }

if(tours.length===0){
  return(
    <div className='refresh'>
          <h1>No Tour is left</h1>
          <div className='btn-white' onClick={restorePage}>
            Refresh
          </div>
    </div>
  )
}

  return (
   <div className="App">
    <Tours tours={tours} removeHandler={removeHandler} interestedHandler={interestedHandler}/>
    <div className='btn-container'>
    <buttons className='btn-blue' onClick={addNewButton}>Refresh</buttons>
    </div>
   </div>
  );
}

export default App;
