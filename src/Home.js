import React, { Component } from 'react';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Profile from './Profile';

class Home extends Component {
    render () {
        return (
            <section>
            <div className="container">
                <div className="row">
                    <div className="col s12 m8 l8">
                        <About/>
                        <Experience/>
                        <Skills/>
                    </div>
                    <div className="col s12 m4 l4">
                        <Profile/>
                    </div>
                </div>
            </div>
            </section>
        )
    }
}
export default Home;

