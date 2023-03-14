import React from "react";
import ListeProfesseurs from "../components/ListeProfesseurs";
import NouveauProfesseur from "../components/NouveauProfesseur";

function Professeurs() {
  const professeurs = [
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
      <ListeProfesseurs professeurs={professeurs} />
      <NouveauProfesseur />
    </div>
  );
}

export default Professeurs;