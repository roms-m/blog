import axios from 'axios';
import { useEffect, useState } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories");
            setCats(res.data)
        }
        getCats();
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About me</span>
                <img 
                    src="http://i236.photobucket.com/albums/ff45/knxdt/articulos/knxdtdsasad.png" 
                    alt=""
                />
                <p>
                    Lorem ipsum es el texto que se usa habitualmente 
                    en diseño gráfico en demostraciones de tipografías. 
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    {
                        cats.map(c => (
                            <Link key={c._id} to={`/?cat=${c.name}`} className="link">
                                <li className="sidebarListItem">
                                    { c.name}
                                </li> 
                            </Link>
                        ))
                    }
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;