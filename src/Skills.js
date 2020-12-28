import React, { Component } from 'react';
import infor from './Skill.json';
import style from './style.css';


class Skills extends Component {
    render(){
        const Skills = ({Skill,Value}) => {
            return (
                <div>
                    <div className='row at-top'>
                        <div>
                            <div>{Skill}</div>
                            <progress value={Value} max="100"/>
                        </div>
                    </div>
                </div>
            );
    }
        return(
            <div>
                <div className='card'>
                    <div className='card-content'>
                        <h5><strong>RELEVANT SKILLS</strong></h5>
                        {infor.map((data) => {
                            return (
                                <div>
                                    <Skills
                                    Skill={data.Skill}
                                    Value={data.Value}
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
export default Skills;

