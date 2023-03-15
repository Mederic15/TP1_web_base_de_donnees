import React, { useState, useEffect } from "react";
import ListeProfesseurs from "../components/ListeProfesseurs";
import NouveauProfesseur from "../components/NouveauProfesseur";

function Professeurs( ) {
  const [professeurs, setProfesseurs] = useState([]);

  useEffect(() => {
    const profs = [
      {
        id: "p1",
        nom: "Sylvain Labranche",
        image:
          "https://www.chumontreal.qc.ca/sites/default/files/guy-pare_5.jpeg",
        cours: ["Web et bases de données", <br></br>, "Base de données"],
      },
      {
        id: "p2",
        nom: "Simon Deschêne",
        image:
          "https://www.chumontreal.qc.ca/sites/default/files/guy-pare_5.jpeg",
        cours: ["Objets connectés", <br></br>, "Interface utilisateur"],
      },
      {
        id: "p3",
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
        id: "p4",
        nom: "Nathalie Desmangle",
        image:
          "https://www.chumontreal.qc.ca/sites/default/files/guy-pare_5.jpeg",
        cours: ["Interface web", <br></br>, "Français"],
      },
    ];
    setProfesseurs(profs);
  }, []);
  const ajouterProfesseurHandler = (nouveauProfesseur) => {
    setProfesseurs((anciensProfesseurs) => {
      return [...anciensProfesseurs, {id: Math.random().toString(), ...nouveauProfesseur}];
    });
  };

  return (
    <div>
      <ListeProfesseurs professeurs={professeurs} />
      <NouveauProfesseur NouveauProf={ajouterProfesseurHandler}/>
    </div>
  );
}

export default Professeurs;