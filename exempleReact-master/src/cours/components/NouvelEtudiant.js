import React, { useState } from "react";

function NouvelEtudiant({ ajouterEtudiant }) {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [numAdmission, setNumero] = useState("");

  function ajouterEtudiantHandler(event) {
    event.preventDefault();

    if (prenom === "" || nom === "" || numAdmission === "") {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const etudiant = {
      prenom: prenom,
      nom: nom,
      numAdmission: numAdmission,
    };

    ajouterEtudiant(etudiant);
    setPrenom("");
    setNom("");
    setNumero("");
  }

  return (
    <form onSubmit={ajouterEtudiantHandler}>
      <h3>Ajouter un étudiant</h3>
      <input
        type="text"
        value={prenom}
        onChange={(event) => setPrenom(event.target.value)}
        placeholder="Prénom"
      />
      <br />
      <input
        type="text"
        value={nom}
        onChange={(event) => setNom(event.target.value)}
        placeholder="Nom"
      />
      <br />
      <input
        type="text"
        value={numAdmission}
        onChange={(event) => setNumero(event.target.value)}
        placeholder="Numéro"
      />
      <br />
      <button type="submit">Ajouter un étudiant</button>
    </form>
  );
}

export default NouvelEtudiant;