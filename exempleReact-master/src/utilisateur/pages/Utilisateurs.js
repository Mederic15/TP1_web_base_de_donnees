import React from "react";
import ListeUtilisateurs from "../components/ListeUtilisateurs";

function Utilisateurs() {
  const utilisateurs = [
    {
      id: "u1",
      nom: "Sylvain Labranche",
      image: "https://www.chumontreal.qc.ca/sites/default/files/guy-pare_5.jpeg",
      places: 3,
    },
  ];
  return <ListeUtilisateurs utilisateurs={utilisateurs} />;
}

export default Utilisateurs;
