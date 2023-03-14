import React from "react";
import Card from "../../shared/Card";

function Cour(props) {
  return (
    <li>
      <Card>
        <h2>{props.cours.titre}</h2>
        <h3>{props.cours.discipline}</h3>
        <div>Nombre d'étudiants maximum : {props.cours.nbMaxEtudiants}</div>
        <div>Date de début : {props.cours.dateDebut}</div>
        <div>Date de fin : {props.cours.dateFin}</div>
      </Card>
    </li>
  );
}

export default Cour;
