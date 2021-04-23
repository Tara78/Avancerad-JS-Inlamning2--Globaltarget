import React from 'react'; 

function MoreInfo(props){
console.log(props);
    function hanldeClick(){
        props.close('')
      
    }
    
   return(
       <article>
         <h4>{props.data.description}</h4>
           <p> {props.data.targets[0].title}</p>
          {props.data.targets.map(allGoals => <p key={allGoals.code}> 
               {allGoals.title}
          </p>)}
         
        
            <button onClick ={hanldeClick}>Close</button> 
       </article>
   )

}

export default MoreInfo; 