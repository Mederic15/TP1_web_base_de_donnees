import React, { useState } from "react";
import Card from "../../shared/Card";
import "./AjouterCours.css";

function AjouterCours(props) {
  const [titre, setTitre] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [nbMaxEtudiants, setNbMaxEtudiants] = useState("");
  const [dateDebut, setDateDebut] = useState("");
  const [dateFin, setDateFin] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCours = {
      titre: titre,
      discipline: discipline,
      nbMaxEtudiants: nbMaxEtudiants,
      dateDebut: dateDebut,
      dateFin: dateFin,
    };
    props.onAddCours(newCours);
    setTitre("");
    setDiscipline("");
    setNbMaxEtudiants("");
    setDateDebut("");
    setDateFin("");
  };

  const handleTitreChange = (event) => {
    setTitre(event.target.value);
  };

  const handleDisciplineChange = (event) => {
    setDiscipline(event.target.value);
  };

  const handleNbMaxEtudiantsChange = (event) => {
    setNbMaxEtudiants(event.target.value);
  };

  const handleDateDebutChange = (event) => {
    setDateDebut(event.target.value);
  };

  const handleDateFinChange = (event) => {
    setDateFin(event.target.value);
  };

  return (
    <Card className="ajouter-cours">
      <h2>Ajouter un cours</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="titre">Titre</label>
          <input
            type="text"
            id="titre"
            value={titre}
            onChange={handleTitreChange}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="discipline">Discipline</label>
          <input
            type="text"
            id="discipline"
            value={discipline}
            onChange={handleDisciplineChange}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="nbMaxEtudiants">Nombre maximal d'étudiants</label>
          <input
            type="number"
            id="nbMaxEtudiants"
            value={nbMaxEtudiants}
            onChange={handleNbMaxEtudiantsChange}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="dateDebut">Date de début</label>
          <input
            type="date"
            id="dateDebut"
            value={dateDebut}
            onChange={handleDateDebutChange}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="dateFin">Date de fin</label>
          <input
            type="date"
            id="dateFin"
            value={dateFin}
            onChange={handleDateFinChange}
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit">Ajouter</button>
        </div>
      </form>
    </Card>
  );
}

export default AjouterCours;
