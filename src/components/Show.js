import {useState,useEffect} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import {Link} from 'react-router-dom';
function Add(){

    let { id } = useParams();
    
    const [loader,setLoader]=useState(true);

    const [task,setTask]=useState('');
    const [time,setTime]=useState('');
    

    useEffect(() => {
        // Update the document title using the browser API
        populateQuote()
      });


    async function populateQuote() {
		try {
           await axios.get('https://todloistserver.herokuapp.com/edit/'+id,)
              .then((res) => {
                console.log(res);
      setTask(res.data.username);
      setTime(res.data.quote);
       setLoader(false);

              }).catch((err) => {
                console.log(err);
                
              })
          }
          catch (err) {
            console.log(err);
        
          };

        }

        populateQuote();


    return (<>
    
    <div>

        
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <a class="navbar-brand" href="#">TodoList App</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
<Link to="/">
      <li class="nav-item">

        <a class="nav-link" >Home </a>
      </li>
      </Link>

      <Link to="/add">
      <li class="nav-item">

        <a class="nav-link" >Add Task </a>
      </li>
      </Link>
      


    </ul>
  </div>  
</nav>
<br></br>

    
{loader ?<h1> Loading... </h1>:
<div class="container">
  <div class="card">
    <div class="card-header">
<h1>{time} </h1>
</div>
<div class="card-footer">
<p>Time:{task}</p>
</div>
    </div>
    </div>
   
}
</div>
    </>);
    
        
    }
    
    
    export default Add;