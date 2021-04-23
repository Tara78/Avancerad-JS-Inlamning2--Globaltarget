import { useEffect, useState } from 'react';
import './App.css';
import Goal from './components/goal';
import MoreInfo from './components/moreinfo';

// importera all FNs info fran API 
// Mappa dem
// Med click man ska fa mer info som sub-mal (target)

function App() {


  const [goalsFromAPI, setGoalsFromAPI]= useState([]); 
  
  const [goalTitle,  setGoalTitle]= useState('');

  useEffect(()=>{
    async function fetchData(){
    const response= await fetch('https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=true');
    const data = await response.json(); 
    setGoalsFromAPI(data)
    console.log(data);
  }
  fetchData();
  }, []);
  
  
  function showGoal (show){
setGoalTitle(show)

  }
  function close(Close){
    setGoalTitle(Close)
  }
 


  return (
    <div className="App">
    
     {goalTitle ? <> <h1>More Info</h1> <div className='info' ><MoreInfo close ={close} data={goalTitle} />
     </div> 
     </>:
     
 <>
  <h1> FN:s Global Target </h1> 
 <div className='goal'>{goalsFromAPI.map(goals => <Goal titleobj={goals} key={goals.code} showGoal={showGoal}/>)} 
 </div>
 </>
 }
     
  </div>
  );
  }

  
export default App;
