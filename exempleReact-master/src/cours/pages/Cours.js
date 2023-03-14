import React, { useState } from "react";
import ListeCours from "../components/ListeCours";
import AjouterCours from "../components/AjouterCours";

function Cours() {
  const [cours, setCours] = useState([
    {
      id: "c1",
      titre: "Web et bases de données",
      discipline: "Informatique",
      nbMaxEtudiants: "30",
      dateDebut: "2023-01-23",
      dateFin: "2023-05-19",
    },
    {
      id: "c2",
      titre: "Objets connectés",
      discipline: "Informatique",
      nbMaxEtudiants: "20",
      dateDebut: "2023-01-23",
      dateFin: "2023-05-19",
    },
  ]);

  const ajouterCoursHandler = (nouveauCours) => {
    setCours((ancienCours) => {
      return [nouveauCours, ...ancienCours];
    });
  };

  return (
    <div>
      <AjouterCours onAjouterCours={ajouterCoursHandler} />
      <ListeCours cours={cours} />
    </div>
  );
}

export default Cours;
