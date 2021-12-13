import React, { useState } from 'react'
import './AddCourse.css';
import '../Auth/Register.css'
import image1 from '../images/add-course.png'


function AddCourses() {
    const [name,getName] = useState("");
    const [id,getID] = useState("");
    const [description,getDescription] = useState("");
    const [link,getLink] = useState("");
    const [image,getImage] = useState("");


   

    const history = useHistory();

    async function addCoreCourse(e){
        e.preventDefault();

        try {
            const CoreCourse = {
                name,
                id,
                description,
                link,
                image
            }
            
            const y = await axios.post("http://localhost:5000/course/AddCourse", CoreCourse);
            if(y)
            {
                history.push('/HomeTeacher');
            }

        } catch (err) {
            console.error(err);
        }
    }


    return (
        
        <div className="container">
            <div className="regi ">
                <div className="profile">
                    <img className = "prof-head" src={image1} alt=""/>
                </div>
            </div>
            <div className="row both-reg">
                <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className = " regi-btns ">
                    <form className = "create" onSubmit = {addCoreCourse}>
                        <div className="prop">
                            <label >Course Name </label>
                            <input 
                                className = "textarea"
                                type='string' 
                                placeholder = 'Enter Course Name' 
                                onChange = {(e) => getName(e.target.value)}
                                value= {name}
                            />
                        </div>

                        <div className="prop">
                            <label >Course ID</label>
                            <input 
                                className = "textarea"
                                type='string' 
                                placeholder = 'Enter Course ID' 
                                onChange = {(e) => getID(e.target.value)}
                                value= {id}
                            />
                        </div>

                        <div className="prop">
                            <label >Course Description</label>
                            <textarea 
                                className = "textarea"
                                rows="5"
                                maxlength ="60"
                                type='string' 
                                placeholder = 'Write a short description of the course' 
                                onChange = {(e) => getDescription(e.target.value)}
                                value= {description}
                            />
                        </div>

                        <div className="prop">
                            <label >Class Link</label>
                            <input 
                                className = "textarea"
                                type='string' 
                                placeholder = 'google meet / webex meet link' 
                                onChange = {(e) => getLink(e.target.value)}
                                value= {link}
                            />
                        </div>

                        <div className="prop">
                            <label >Image Link</label>
                            <input 
                                className = "textarea"
                                type='string' 
                                placeholder = 'image url' 
                                onChange = {(e) => getImage(e.target.value)}
                                value= {image}
                            />
                        </div>

                        <button  type = 'submit'>Add Course</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCourses
