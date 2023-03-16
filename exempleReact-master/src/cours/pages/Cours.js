import React, { useState } from "react";
import ListeCours from "../components/ListeCours";
import AjouterCours from "../components/AjouterCours";


function Cours({ cours, setCours }) {
  

  const ajouterCoursHandler = (nouveauCours) => {
    setCours((ancienCours) => {
      return [nouveauCours, ...ancienCours];
    });
  };

  return (
    <React.Fragment>
      <AjouterCours onAjouterCours={ajouterCoursHandler} />
      <ListeCours cours={cours} />
    </React.Fragment>
  );
}

export default Cours;
