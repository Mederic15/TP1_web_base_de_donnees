import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ListeEtudiants from "../../etudiants/components/ListeEtudiants";
import Card from "../../shared/Card";
import NouvelEtudiant from "../components/NouvelEtudiant";

function CourSelectionne({ cours, setCours }) {
  const { idCours } = useParams();
  const coursSelectionne = cours.find((c) => c.idCours === idCours);

  function ajouterEtudiant(nouvelEtudiant) {
    const updatedCours = cours.map((c) => {
      if (c.idCours === idCours) {
        return { ...c, etudiants: [...c.etudiants, nouvelEtudiant] };
      } else {
        return c;
      }
    });

    setCours(updatedCours);
  }

  return (
    <React.Fragment>
      <Card>
        <h2>Professeur : {coursSelectionne.professeur}</h2>
      </Card>
      <ListeEtudiants etudiants={coursSelectionne.etudiants} />
      <NouvelEtudiant ajouterEtudiant={ajouterEtudiant} />
    </React.Fragment>
  );
}

export default CourSelectionne;
