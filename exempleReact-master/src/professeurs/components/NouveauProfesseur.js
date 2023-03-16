import React, { useState } from "react";
import './NouveauProfesseur.css';

function NouveauProf({ NouveauProf }) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [dateEmbauche, setDateEmbauche] = useState("");
  const [photo, setPhoto] = useState("");
  const [cours, setCours] = useState([]);

  const soumettreFormulaire = (event) => {
    event.preventDefault();
    const nouveauProf = {
      nom: nom,
      dateEmbauche: dateEmbauche,
      image: "https://www.chumontreal.qc.ca/sites/default/files/guy-pare_5.jpeg",
      cours: cours,
    };
    NouveauProf(nouveauProf);
  };

  return (
    <form onSubmit={soumettreFormulaire}>
      <div>
        <h1>Ajouter un professeur</h1>
        <label htmlFor="nom">Nom complet :</label>
        <input
          type="text"
          id="nom"
          value={nom}
          onChange={(event) => setNom(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="dateEmbauche">Date d'embauche :</label>
        <input
          type="date"
          id="dateEmbauche"
          value={dateEmbauche}
          onChange={(event) => setDateEmbauche(event.target.value)}
        />
      </div>
      <button type="submit">Ajouter le professeur</button>
    </form>
  );
}

export default NouveauProf;
