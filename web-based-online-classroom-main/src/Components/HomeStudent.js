import React, { useState, useEffect, useContext } from 'react'
import '../bootstrap/bootstrap.css'
import userContext from '../Context/UserContext'
import './HomeStudent.css'
import './HomeTeacher.css'
import { Link } from 'react-router-dom';
import axios from 'axios'

function HomeStudent() {

    const [cou, setCourse] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(async() => {
        const x = await axios.get("http://localhost:5000/course/GetStuCourses");
        const da = await x.data;
        setCourse(da);
        setLoading(false);
    },[]);

    const {userCourse} = useContext(userContext);
    const {userName} = useContext(userContext);

    return (
        <>
        {!isLoading &&
                <>
        <div className="hometeacher container">
            <div className="jumbotron student">
                <h1 className="display-4">Hello, {userName} !!</h1>
                <p className="lead"> “Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young.”</p>
                <hr className="my-4"/>
                <p className="lead">
                    <Link to = '/Faq' ><button className="btn btn-lg btn-course add-btn">Feedback and queries</button></Link>

                </p>
                <p className="lead">
                <Link to = '/grades' > <a className="btn btn-primary btn-lg btn-course" href="#" role="button">Grade Sheets</a></Link>
                </p>
             </div>

                   <div className="card bg-dark text-white enroll-card">
                       <img className=" enroll-card-img" src="https://images.unsplash.com/photo-1579547621309-5e57ab324182?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="Card image"/>
                       <div className="card-img-overlay">
                           <h1 className=" enroll-card-title card-title">Enrolled Courses</h1>
                       </div>
                   </div>
                   <div className="All-courses row row-cols-3">
                { cou.arr.map(course => {
                    return(
                            
                                <>
                                    {/* <div className="All-courses row row-cols-3"> */}
                                  <div className= "col-lg-4 col-md-6 col-sm-12 col-12">
                        
                        <div className='card courses mask '>
                                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <a href="#" >
                                        <img src={course.image} alt="https://www.futureelectronics.com/medias/sys_master/images/images/9601962868766/CMSHEROShapingTheFuture1200x450-D.jpg" className="img-fluid card-img-top"/>
                                    </a>
                                </div>
                                <div class="card-body">
                                       
                                        <h4 className= " card-title">{ course.name}</h4>
                                        <p className="text-muted">Credits: { course.credits}</p>
                                        <p className="text-muted">Mentors: { course.teacher}</p>
                                        <p className="text-muted">Description: { course.description}</p>
                                        <Link  to= {`/courseTeacher/${course.id}`} >
                                            <button className="btn btn-primary btn-course">Go to Course</button>
                            
                                        </Link>
                                </div>
                        </div>
                        </div>  
                    </>
                          
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
        </>
        }
    </>
    )
}

export default HomeStudent