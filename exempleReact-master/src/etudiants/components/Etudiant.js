import React from "react";

import Card from "../../shared/Card";

function Etudiant({ etudiant }) {
  return (
    
      <Card>
        <h2>Étudiants inscrits aux cours : </h2>
        <li>
          <h3>{etudiant.prenom + " " + etudiant.nom}</h3>
          <h4>numéro d'étudiant : {etudiant.numAdmission}</h4>
        </li>
      </Card>
      
    
  );
}

export default Etudiant;
