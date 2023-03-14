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
          <Route path="/PlacesUtilisateur" exact>
            <PlacesUtilisateur />
          </Route>
          <Redirect to="/Accueil" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
