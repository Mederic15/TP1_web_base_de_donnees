import React, { useState } from "react";

function NouveauProf({ onAjouterProf }) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [dateEmbauche, setDateEmbauche] = useState("");
  const [photo, setPhoto] = useState("");
  const [cours, setCours] = useState([]);

  const soumettreFormulaire = (event) => {
    event.preventDefault();
    const nouveauProf = {
      nom: nom,
      prenom: prenom,
      dateEmbauche: dateEmbauche,
      photo: photo,
      cours: cours,
    };
    onAjouterProf(nouveauProf);
  };

  return (
    <form onSubmit={soumettreFormulaire}>
      <div>
        <h1>Ajouter un professeur</h1>
        <label htmlFor="nom">Nom :</label>
        <input
          type="text"
          id="nom"
          value={nom}
          onChange={(event) => setNom(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="prenom">Prenom :</label>
        <input
          type="text"
          id="prenom"
          value={prenom}
          onChange={(event) => setPrenom(event.target.value)}
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
      <div>
        <label htmlFor="photo">Photo :</label>
        <input
          type="file"
          id="photo"
          accept=".png, .jpg"
          value={photo}
          onChange={(event) => setPhoto(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="cours">Cours :</label>
        <select
          id="cours"
          value={cours}
          onChange={(event) => setCours([...cours, event.target.value])}
        >
          <option value="">-- Sélectionner un cours --</option>
          <option value="Web et bases de données">
            Web et bases de données
          </option>
          <option value="Base de données">Base de données</option>
          <option value="Objets connectés">Objets connectés</option>
          <option value="Interface utilisateur">Interface utilisateur</option>
          <option value="Environnement graphique client">
            Environnement graphique client
          </option>
          <option value="Structure de données">Structure de données</option>
          <option value="Interface web">Interface web</option>
          <option value="Français">Français</option>
        </select>
        <button type="button" onClick={() => setCours([...cours, ""])}>
          Ajouter un cours
        </button>
      </div>
      <button type="submit">Ajouter le professeur</button>
    </form>
  );
}

export default NouveauProf;
