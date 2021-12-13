
import React, { useContext , useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../bootstrap/bootstrap.css'
import userContext from '../Context/UserContext'
import './HomeStudent.css'

function HomeTeacher() {

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
        <div className='hometeacher container' >

            <div className="jumbotron teacher">
                <h1 className="display-4">Hello, {userName}!!</h1>
                <p className="lead"> “It’s the teacher that makes the difference, not the classroom.”</p>
                <hr className="my-4"/>
                <p className="lead">
                    <Link to = '/Faq' ><button className="btn btn-lg btn-course add-btn">Feedback and queries</button></Link>
                  
                </p>
                <p className="lead">
                    <Link to = '/AddCourse' ><button className="btn btn-lg btn-course add-btn">Add Course</button></Link>
                  
                </p>
            </div>
            
            <div className="card bg-dark text-white enroll-card">
                <img className=" enroll-card-img" src="https://images.unsplash.com/photo-1579547621309-5e57ab324182?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="Card image"/>
                <div className="card-img-overlay">
                    <h1 className=" enroll-card-title card-title">Owned Courses</h1>
                </div>
            </div>
            
            
            
            <div className="All-courses row row-cols-3">
            {data.map(course=>{
                return(                    
                    ( s3 === course.teacher ) && 
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
                   
                    
                )
            })}
            </div>
            <div className="card bg-dark text-white enroll-card">
                <img className=" enroll-card-img" src="https://images.unsplash.com/photo-1579547621309-5e57ab324182?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="Card image"/>
                <div className="card-img-overlay">    
                    <Link to = '/ExploreCourses'>
                        <h1 className=" enroll-card-title card-title">Explore Courses</h1>
                    </Link>
                </div>
            </div>       
        </div>
    )
}

export default HomeTeacher
