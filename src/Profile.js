import React, { Component } from 'react';
import style from './style.css';
import infor from './Profile.json';
import image from './profile_pic.jpg'

class Profile extends Component {
    render() {
        const Profiles = ({Name,Profession}) => {
            return (
                <div className='card'>
                    <div className='card'>
                        <div className='card-image'>
                            <img className='activator' src={image} alt={infor.map((data)=><p>{data.Name}</p>)}/>  
                        </div>
                    </div>
                    <div className='card-content' style={style}>
                        <h6>{Name}</h6>
                        <h6>{Profession}</h6>
                    </div>
                </div>
            );
        }

        return(
            <div>
                {infor.map((data) => {
                    return (
                        <div>
                            <Profiles
                                Name={data.Name}
                                Profession={data.Profession}
                                />
                        </div>      
                    );
                })}
            </div>
        );
    }
}

export default Profile;
