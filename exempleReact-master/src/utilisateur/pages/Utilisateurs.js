import React from "react";
import ListeUtilisateurs from "../components/ListeUtilisateurs";
import NouveauProfesseur from "../components/NouveauProfesseur";

function Utilisateurs() {
  const utilisateurs = [
    {
      id: "u1",
      nom: "Sylvain Labranche",
      image:
        "https://www.chumontreal.qc.ca/sites/default/files/guy-pare_5.jpeg",
      cours: ["Web et bases de données", <br></br>, "Base de données"],
    },
    {
      id: "u2",
      nom: "Simon Deschêne",
      image:
        "https://www.chumontreal.qc.ca/sites/default/files/guy-pare_5.jpeg",
      cours: ["Objets connectés", <br></br>, "Interface utilisateur"],
    },
    {
      id: "u3",
      nom: "Mathieu Bergeron",
      image:
        "https://www.chumontreal.qc.ca/sites/default/files/guy-pare_5.jpeg",
      cours: [
        "Environnement graphique client",
        <br></br>,
        "Structure de données",
      ],
    },
    {
      id: "u4",
      nom: "Nathalie Desmangle",
      image:
        "https://www.chumontreal.qc.ca/sites/default/files/guy-pare_5.jpeg",
      cours: ["Interface web", <br></br>, "Français"],
    },
  ];

  return (
    <div>
      <ListeUtilisateurs utilisateurs={utilisateurs} />
      <NouveauProfesseur />
    </div>
  );
}

export default Utilisateurs;
