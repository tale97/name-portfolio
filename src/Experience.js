import React, { Component } from 'react';
import infor from './Experience.json';
import style from './style.css';

class Experience extends Component {
    render() {
        const Experiences = ({Exp,Value}) => {
            return (
                <div>
                    <div className='row'>
                        <div className="col l5">
                            <p className='year_exp'>
                                <strong>{Exp}</strong> 
                            </p>
                        </div>
                        <div className='col l7'>
                            <blockquote className='np-pad'>
                                <h6 className='np-pad mt-top'>
                                    <p>{Value}</p>
                                </h6>
                            </blockquote>
                        </div>
                    </div>  
                </div>
            )
        }
        return(
            <div>
                <div className='card'>
                    <div className='card-content'>
                        <h5 style={style}><strong>TECHNICAL EXPERIENCES</strong></h5>
                        {infor.map((data) => {
                            return (
                                <div>
                                    <Experiences
                                    Exp={data.E}
                                    Value={data.V}
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

export default Experience;
