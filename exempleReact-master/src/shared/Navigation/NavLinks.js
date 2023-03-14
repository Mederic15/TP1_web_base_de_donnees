import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

function NavLinks(props) {
  return <ul className="nav-links">
    <li>
      <NavLink to="/Accueil" exact>Accueil</NavLink>
    </li>
    <li>
      <NavLink to="/Professeurs" >Professeur</NavLink>
    </li>
    <li>
      <NavLink to="/PlacesUtilisateur">Cours</NavLink>
    </li>
   
  </ul>
};

export default NavLinks;