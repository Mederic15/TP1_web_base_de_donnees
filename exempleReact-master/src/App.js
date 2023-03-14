import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import NouvellePlace from "./places/pages/NouvellePlace";
import MainNavigation from "./shared/Navigation/MainNavigation";
import PlacesUtilisateur from "./places/pages/PlacesUtilisateur";
import Accueil from "./Accueil/Accueil";
import PageAccueil from "./Accueil/pageAccueil/page_accueil";
import Professeurs from "./professeurs/pages/Professeurs";
import Cours from "./cours/pages/Cours";
import CourSelectionne from "./cours/pages/CourSelectionne";

function App() {
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
            <Cours />
          </Route>
          <Route path="/Cours/:idCours" exact>
            <CourSelectionne />
          </Route>
          <Redirect to="/Accueil" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
