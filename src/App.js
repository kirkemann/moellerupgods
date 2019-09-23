import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <main className="App container">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/velkommen" component={Home} />

              <Route path="/jagt" component={Home} />
              <Route path="/hestpension" component={Home} />
              <Route path="/lej_kontor" component={Home} />
              <Route path="/lej_bolig" component={Home} />
              <Route path="/mollerup_bogen" component={Home} />
              <Route path="/hampefro_til_udsaed" component={Home} />

        <Route path="/verdensballetten" component={Home} />

              <Route path="/verdensballetten_erhver" component={Home} />
              <Route path="/samarbejdspartnere" component={Home} />
              <Route path="/glade_gaester" component={Home} />
              <Route path="/gourmetoplevelser" component={Home} />
              <Route path="/praktisk_info" component={Home} />
              <Route path="/bliv_frivillig" component={Home} />

        <Route path="/nyheder" component={Home} />
        <Route path="/events_og_moedefaciliteter" component={Home} />

              <Route path="/ferie" component={Home} />
              <Route path="/fest_paa_moellerup_gods" component={Home} />

                  <Route path="/fest_paa_hubertus_kroen" component={Home} />
                  <Route path="/fest_i_koereladen" component={Home} />

              <Route path="/moeder" component={Home} />
              <Route path="/oplevelser" component={Home} />
              <Route path="/rundvisninger" component={Home} />

        <Route path="/hvad_siger_vores_gaester" component={Home} />
        <Route path="/om_moellerup_gods" component={Home} />

              <Route path="/hele_historien" component={Home} />
              <Route path="/galleri" component={Home} />
              <Route path="/virksomheder_paa_moellerup" component={Home} />

        <Route path="/kontakt_os" component={Home} />
        <Route path="/webshop" component={Home} />
      </main>
    </BrowserRouter>
  );
}

export default App;