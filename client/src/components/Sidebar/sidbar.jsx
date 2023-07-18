import React, {useState} from "react";
import {faBars} from "react-icons/fa";

const Sidebar = {{children}} => {
    const[isOpen, setIsOpen] = useState(false);
    const Toggle = () => setIsOpen (!isOpen);
    const bookMarkItem =[
        {
           path: '/cars/{car.id}',
           name: '{car.id}', 
        }

    ]

    return (
        <div className="container">
        <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
            <h1 style={{display: isOpen ? "block" : 'none'}} className="Favorites">Favorites</h1>
            <div style={{marginLeft: isOpen ? '50px' : '0px'}} className="bars">
                <faBars onClick={Toggle}/>
            </div>
        </div>
        {
            bookMarkItem.map(car, _id) => (
                <Link to={car.path} key={_id} className='link' activeclassName='active'>
                    <div style={{display: isOpen ? 'block' : 'none'}} className="link_text">{car.make}{car.model}{car.image}</div>
                </Link>
            )
        }
    
        <main>{children}</main>
        </div>
    );
};

export default Sidebar;