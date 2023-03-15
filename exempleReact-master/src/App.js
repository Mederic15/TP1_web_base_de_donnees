import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import MainNavigation from "./shared/Navigation/MainNavigation";
import PageAccueil from "./Accueil/pageAccueil/page_accueil";
import Professeurs from "./professeurs/pages/Professeurs";
import Cours from "./cours/pages/Cours";
import CourSelectionne from "./cours/pages/CourSelectionne";

function App() {

  const [cours, setCours] = useState([
    {
      idCours: "c1",
      titre: "Web et bases de données",
      discipline: "Informatique",
      nbMaxEtudiants: "30",
      dateDebut: "2023-01-23",
      dateFin: "2023-05-19",
      professeur: "Sylvain Labranche",
      etudiants: [{
        prenom: "Médéric",
        nom: "Bélec",
        numAdmission: "1"
      }],
    },
    {
      idCours: "c2",
      titre: "Objets connectés",
      discipline: "Informatique",
      nbMaxEtudiants: "20",
      dateDebut: "2023-01-23",
      dateFin: "2023-05-19",
      professeur: "Simon Deschêne",
      etudiants: [{
        prenom: "Médéric",
        nom: "Bélec",
        numAdmission: "1"
      }],
    },
  ]);
  

  
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/Accueil" exact>
            <PageAccueil />
          </Route>
          <Route path="/Professeurs" exact>
            <Professeurs />
          </Route>
          <Route path="/Cours" exact>
            <Cours cours={cours} setCours={setCours}/>
          </Route>
          <Route path="/cours/:idCours" exact>
            <CourSelectionne  cours={cours} setCours={setCours}/>
          </Route>
          <Redirect to="/Accueil" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
