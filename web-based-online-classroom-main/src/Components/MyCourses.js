import React, { useContext , useEffect, useState }  from 'react'
import '../bootstrap/bootstrap.css'
import './Course.css'
import userContext from '../Context/UserContext'
import { Link } from 'react-router-dom';

function MyCourses() {
    const [data,setData] = useState([]);
    useEffect(async() => {
        const response = await fetch("http://localhost:5000/course/GetCourses");
        const da = await response.json();
        setData(da);
    }, []);
    useEffect( () => {
        console.log(data);
    }, [data]);

  
    const {userName} = useContext(userContext);
    const {userLastName} = useContext(userContext);
    var s=userName;
    var s2=userLastName;
    var s3=s+" "+s2;


    return (
        <div>
            
            <div className=' container' >
            {/* <h1>Core courses</h1> */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">
                        <div className="card">
                            <div className="card-horizontal">
                                <div className="img-square-wrapper">
                                    <img className="" src="https://images.unsplash.com/photo-1563729831178-d09061d83b12?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" alt="Card image cap"/>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title explore-title">Courses</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
{data.map(course=>{
    return(
          
                ( s3 === course.teacher ) && 
                    <div className="row">
                    <div className= "col-lg-4 col-md-6 col-sm-12 col-12">
                    <div key = '_id'>
                        
                        <div className='card courses mask '>
                                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <a href="#" >
                                        <img src={course.image} alt="https://www.futureelectronics.com/medias/sys_master/images/images/9601962868766/CMSHEROShapingTheFuture1200x450-D.jpg" className="img-fluid card-img-top"/>
                                    </a>
                                </div>
                                <div class="card-body">
                                       
                                        <h4 className= " card-title">{ course.name}</h4>
                                        {/* <h5 className = "card-subtitle text-muted">Amarnath Yadav</h5> */}
                                        <p className="text-muted">Mentor: { course.teacher}</p>
                                        <p className="text-muted">Description: { course.description}</p>
                                        <Link  to= {`/courseTeacher/${course._id}`} >
                                            <button className="btn btn-primary btn-course">Edit Course</button>
                            
                                        </Link>
                                </div>
                        </div>
                        </div>  
                    </div>
                   </div>
                    
                )
            })}
    </div>
</div>


    )
}

export default MyCourses
