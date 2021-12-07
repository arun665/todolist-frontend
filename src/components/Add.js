//import { set } from "mongoose";
import { useState } from "react";
import {Link , useHistory} from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay';

 function Add(){

	var history=useHistory();
    const [time, setTime] = useState('') // for task
	const [task, setTask] = useState('') // for time 
	const [loader,setLoader]=useState(false);
	async function loginUser(event) {
		setLoader(true);
		event.preventDefault()


		// fetching api to add data to the database
		const response = await fetch('https://todloistserver.herokuapp.com/add', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				"username":time,
				"quote":task
			}),
		})

		const data = await response.json()

		if (data.status) {
			localStorage.setItem('token', data.user)
			alert('Task added  successfully');
		setTime('');
			setTask('');
			setLoader(false);
history.push("/");
		
		} else {
			alert('Please check your username and password');
			setLoader(false);
			
		}
	}

	return (
		 
<LoadingOverlay
  active={loader}
  spinner
  text='adding  task...'
  >
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

        <a class="nav-link" >Add  Task  </a>
      </li>
      </Link>
      


    </ul>
  </div>  
</nav>
<br></br>




{/*----------------------------------------------------form code to add the task starts here---------------------------------------*/}

<div className="container">
	<h1 style={{"color":"white"}}> Add Task:</h1 >
			<form onSubmit={loginUser} style={{"borderWidth":"2px","padding":"5%","color":"white"}}>
  <div class="form-group">
    <label for="email">Task:</label>
    <input type="text" class="form-control"  id="email"   		value={task}
					onChange={(e) => setTask(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="pwd">Time:</label>
    <input type="time" class="form-control"  id="pwd"  	value={time}
					onChange={(e) => setTime(e.target.value)}/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>


{/*----------------------------------------------------form code to add the task ends here---------------------------------------*/}

		</div></LoadingOverlay>
	)
    
}


export default Add;