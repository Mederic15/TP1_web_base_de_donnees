import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ListeEtudiants from "../../etudiants/components/ListeEtudiants";
import NouvelEtudiant from "../components/NouvelEtudiant";

function CourSelectionne({ cours, setCours }) {
  const { idCours } = useParams().idCours;
  const coursSelectionne = cours.find((c) => c.idCours === idCours);

  function ajouterEtudiant(nouvelEtudiant) {
    const updatedCours = cours.map((c) => {
      if (c.idCours === idCours) {
        return { ...c, etudiants: [...c.etudiants, nouvelEtudiant] };
      }
      return c;
    });

    setCours(updatedCours);
  }
  console.log({coursSelectionne})
  return (
    <React.Fragment>
      <ListeEtudiants etudiants={coursSelectionne.etudiants} />
      <NouvelEtudiant ajouterEtudiant={ajouterEtudiant} />
    </React.Fragment>
  );
}

export default CourSelectionne;
