import React, { Component } from 'react';
import style from './style.css';
import infor from './Profile.json';


class About extends Component {
    render() {
        const Profile = ({Name,Profession,Birthdate,Gender,Phone,Email}) => {
            return (
                <div>
                    <div className='row'>
                        <div>
                            <h6><strong>Name:</strong> {Name}</h6>
                            <h6><strong>Profession:</strong> {Profession}</h6>
                            <h6><strong>Birthday:</strong> {Birthdate}</h6>
                            <h6><strong>Gender:</strong> {Gender}</h6>
                            <h6><strong>Phone:</strong> {Phone}</h6>
                            <h6><strong>Email:</strong> {Email}</h6>
                        </div>
                    </div>
                </div>
                
            );
        }

        return(
            <div>
                <div className='card'>
                    <div className='card-content'>
                        <h5 style={style}>
                            <strong>SHORT BIO</strong>
                        </h5>
                        <p style={style}>
                            Take advantage of good communication skills in English, as well as vital data science skills to pursue the career of a professional data scientist.
                        </p>
                        <br />
                        <p>
                            Even though for now I am still an undergraduate with humble academic knowledge and a few data science skills, yet I see that as a challenge I must overcome to be able to work in professional environments. I always see myself as the weakest guy in the room, therefore eager to learn more from the best and gain more experience from there.
                        </p>
                        <div className='card-action'>
                        <h5 style={style}>
                            <strong>BASIC INFO</strong>
                        </h5>
                    </div>
                        {infor.map((data) => {
                            return (
                                <div>
                                    <Profile
                                    Name={data.Name}
                                    Profession={data.Profession}
                                    Birthdate={data.Birthdate}
                                    Gender={data.Gender}
                                    Phone={data.Phone}
                                    Email={data.Email}
                                    />
                                </div>      
                            );
                        })}   
                    </div>
                </div>    
            </div> 
        );
    }
}

export default About;



