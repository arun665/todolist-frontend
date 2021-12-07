//import { set } from "mongoose";
import { useState } from "react";
import {Link , useHistory} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay';

 function Edit(){
  var history=useHistory();
    let { id } = useParams();
	let {task} = useParams();
	let { time } = useParams();
	const [loader,setLoader]=useState(false);
    const [tim, setTime] = useState(time);
	const [tas, setTask] = useState(task);
	  


//---------------------------------------------------------function to add task in list starts here --------------------------------------------

	async function loginUser(event) {
		setLoader(true);
		event.preventDefault()

		const response = await fetch('https://todloistserver.herokuapp.com/edit_task/'+id, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({

				"username":tim,
				"quote":tas
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

//---------------------------------------------------------function to add task in list ends here --------------------------------------------

	return (
			 
<LoadingOverlay
  active={loader}
  spinner
  text='updating  task...'
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



{/*----------------------------------------------------form code to update the task starts here---------------------------------------*/}

<div className="container">
	<h1 style={{"color":"white"}}> Update Task:</h1 >
			<form onSubmit={loginUser} style={{"borderWidth":"2px","padding":"5%","color":"white"}}>
  <div class="form-group">
    <label for="email">Task:</label>
    <input type="text" class="form-control"  id="email"   		value={tas}
					onChange={(e) => setTask(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="pwd">Time:</label>
    <input type="time" class="form-control"  id="pwd"  	value={tim}
					onChange={(e) => setTime(e.target.value)}/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>

{/*----------------------------------------------------form code to update the task ends here---------------------------------------*/}

		</div>
</LoadingOverlay>
	)
    
}


export default Edit;