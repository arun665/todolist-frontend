import {useHistory} from 'react-router-dom';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import LoadingOverlay from 'react-loading-overlay';

function Home(){

    const history = useHistory()
	const [arr, setArr] = useState([])
	const [loader,setLoader]=useState(true);

    useEffect(() => {
        // Update the document title using the browser API
        populateQuote()
      });

	async function populateQuote() {
		try {
           await axios.get('https://todloistserver.herokuapp.com/',)
              .then((res) => {
                console.log(res.data.blogs);
       
       setArr(res.data.blogs);
setLoader(false);
              }).catch((err) => {
                console.log(err);
                
              })
          }
          catch (err) {
            console.log(err);
        
          };

        }



        async function deletetask(id) {
          try {
            setLoader(true);
                 await axios.get('https://todloistserver.herokuapp.com/delete/'+id,)
                    .then((res) => {
                      console.log(res.data.blogs);
             
       if(res.status){
        populateQuote();
         setLoader(false);
       }
       else{
         setLoader(false);
         alert("server error");
       }
                    }).catch((err) => {
                      console.log(err);
                      
                    })
                }
                catch (err) {
                  console.log(err);
              
                };
      
              }
      

   populateQuote();

        console.log("this.is aray");
        console.log(arr);

   






    populateQuote()

    return (
    
    
<LoadingOverlay
  active={loader}
  spinner
  text='Loading your content...'
  >
    <>
           

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
   
     
{loader ?<h1> Loading... </h1>:
    <div >
  <table>

<tr>
  <th>task </th>
  <th>time</th>
  <th>Delete task</th>
  
  <th>view task</th>

  <th> edit task</th> 
</tr>

    {arr.map((reptile) => ( 
        <tr class=" mb-5" key={reptile._id}>

  <td>
        
        <h5>  {reptile.quote}</h5>
        </td>
        <td>
        <h5>    {reptile.username}</h5>
        </td>
        
        <td>

        <button type="button" className="btn btn-outline-danger" key={reptile._id}  onClick={()=>{deletetask(reptile._id)}}> Delete Task </button>

</td>
        <td>
<Link to={"/show/"+reptile._id} >
  
        <button type="button" className="btn btn-outline-primary" key={reptile._id}> view full screen </button></Link>

</td>
<td>
        <Link to={"/edit/"+reptile._id+"/"+reptile.quote+"/"+reptile.username} >
  
        <button type="button" className="btn btn-outline-success" key={reptile._id}> Edit Data </button></Link>
        
</td>
      
        </tr>
       
      ))} 
      
      </table>
      </div>
    }
    </></LoadingOverlay>);
    

    }
    
    
    export default Home;