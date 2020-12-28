import React, { Component } from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import style from './style.css'

class Navbar extends Component {
    render() {
        return (
            <>
            <nav className='light-blue'>
                <div className='container'>
                    <div className='nav-wrapper'>
                        <Link to='/' className='brand-logo'>
                        </Link>
                        <Link to='/' data-target="side-nav" className='sidenav-trigger'>
                            <i className='material-icons'>Menu</i>
                        </Link>
                        <ul className='right hide-on-med-and-down'>
                            <li>
                                <Link to='/'>
                                    <i className="fas fa-home"></i>Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/About'>
                                    <i className="fas fa-graduation-cap"></i>About me
                                </Link>
                            </li>
                            <li>
                                <Link to='/Skills'>
                                    <i className="fas fa-copy"></i>Skills
                                </Link>
                            </li>
                            <li>
                                <Link to='/Experience'>
                                    <i className="fas fa-id-badge"></i>Experience
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>  
            </>
        );
    }
}

export default Navbar;