import React from "react";
import './Accueil.css';

const Accueil = () => {
  return (
    <div className="container">
      <h1>Application du collège</h1>
      <p>Bienvenue dans l'application de gestion d'inscriptions de notre collège !</p>
      <p>Utilisez le menu de navigation pour accéder aux différentes fonctionnalités de l'application.</p>
      <p>Sur cette application, vous pouvez : </p>
      <ul>
        <li>Voir la liste des professeurs du collège et la liste des cours qu'ils donnent;</li>
        <li>Embaucher un nouveau professeur, à l'aide d'un formulaire;</li>
        <li>Voir la liste des cours données au collège ainsi que les informations du cours;</li>
        <li>Voir les détails de chaque cours, ainsi que les étudiants inscrits;</li>
        <li>Créer un nouveau cours, à l'aide d'un formulaire</li>
      </ul>
      <img 
        src="https://us.123rf.com/450wm/graphicbee/graphicbee1611/graphicbee161100081/66571197-coll%C3%A8ge-universitaire.jpg?ver=6"
        alt="Image du collège">
      </img>
    </div>
  );
};

export default Accueil;