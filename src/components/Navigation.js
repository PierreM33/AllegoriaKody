import React from 'react';
import { NavLink} from "react-router-dom";

const Navigation = () => {
    return (

//Barre de navigation à importer dans la page Home
<div className="navigation">
    <div className="menu">
    <ul className="navigationUL">
        <NavLink to="/">
            <li className="navigationLI"><a>Home</a></li>
        </NavLink>
        <NavLink to="/book">
            <li className="navigationLI"><a>Catalogue</a></li>
        </NavLink>
        <NavLink to="/news">
            <li className="navigationLI"><a>Actualités</a></li>
        </NavLink>
        <NavLink to="/contact">
        <li className="navigationLI"><a>Ma messagerie</a></li>
        </NavLink>
    </ul>
    </div>
</div>


    );
};

export default Navigation;