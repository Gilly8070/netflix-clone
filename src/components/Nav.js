import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router';
import '../styles/Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, []);
    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_contents">
                <img onClick={() => history.push('/')}   
                    className='nav_logo' src="https://www.product-reviews.net/down/wp-content/uploads/2020/03/netflixlogo.png" alt="" />
                <img onClick={() => history.push('/profile')}   
                    src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="" className="nav_avatar" />
            </div>
        </div>
    )
}

export default Nav
