import React from 'react'; 

function Goal(props){
console.log(props);
    function hanldeClick(){
        props.showGoal(props.titleobj)
    }
   return(
       <article>
           <p>Goal: {props.titleobj.title}</p>
        
            <button onClick ={hanldeClick}>More info</button> 
       </article>
   )

}

export default Goal; 