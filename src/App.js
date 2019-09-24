import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Header from './components/Header/Header';
import Jagt from './components/Velkommen/Jagt';
import Hestpension from './components/Velkommen/Hestpension';
import Hampefro_til_udsaed from './components/Velkommen/Hampefrø_Til_Udsæd';
import LejBolig from './components/Velkommen/LejBolig';
import LejKontor from './components/Velkommen/LejKontor';
import Mollerup_Bogen from './components/Velkommen/MøllerupBogen';
import Ferie from './components/Event_Og_Mødefaciliter/Ferie';
import Fest_paa_moellerup_gods from './components/Event_Og_Mødefaciliter/Fest_På_Møllerup_Gods';
import Moeder from './components/Event_Og_Mødefaciliter/Møder';
import Oplevelser from './components/Event_Og_Mødefaciliter/Oplevelser';
import Rundvisninger from './components/Event_Og_Mødefaciliter/Rundvisninger';
import Verdensballetten_erhver from './components/Verdensballetten/Verdensballetten_Erhverv';
import Samarbejdspartnere from './components/Verdensballetten/Samarbejdspartnere';
import Glade_gaester from './components/Verdensballetten/Glade_Gæster';
import Gourmetoplevelser from './components/Verdensballetten/Gourmetoplevelser';
import Praktisk_info from './components/Verdensballetten/Pratisk_Info';
import Bliv_frivillig from './components/Verdensballetten/Bliv_Frivillig';
import Hele_historien from './components/Om_Møllerup_Gods/Hele_Historien';
import Galleri from './components/Om_Møllerup_Gods/Galleri';
import Virksomheder_paa_moellerup from './components/Om_Møllerup_Gods/Virksomheder_På_Møllerup';
import Webshop from './components/Webshop';
import Kontakt_os from './components/KontaktOs';
import Hvad_siger_vores_gaester from './components/HvadSigerVoresGaester';
import Nyheder from './components/News';

function App() {
  return (
    <BrowserRouter>
      <main className="App container">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/velkommen" component={Home} />

              <Route path="/jagt" component={Jagt} />
              <Route path="/hestpension" component={Hestpension} />
              <Route path="/lej_kontor" component={LejKontor} />
              <Route path="/lej_bolig" component={LejBolig} />
              <Route path="/mollerup_bogen" component={Mollerup_Bogen} />
              <Route path="/hampefro_til_udsaed" component={Hampefro_til_udsaed} />

        <Route path="/verdensballetten" component={Home} />

              <Route path="/verdensballetten_erhver" component={Verdensballetten_erhver} />
              <Route path="/samarbejdspartnere" component={Samarbejdspartnere} />
              <Route path="/glade_gaester" component={Glade_gaester} />
              <Route path="/gourmetoplevelser" component={Gourmetoplevelser} />
              <Route path="/praktisk_info" component={Praktisk_info} />
              <Route path="/bliv_frivillig" component={Bliv_frivillig} />

        <Route path="/nyheder" component={Nyheder} />
        <Route path="/events_og_moedefaciliteter" component={Home} />

              <Route path="/ferie" component={Ferie} />
              <Route path="/fest_paa_moellerup_gods" component={Fest_paa_moellerup_gods} />

                  <Route path="/fest_paa_hubertus_kroen" component={Home} />
                  <Route path="/fest_i_koereladen" component={Home} />

              <Route path="/moeder" component={Moeder} />
              <Route path="/oplevelser" component={Oplevelser} />
              <Route path="/rundvisninger" component={Rundvisninger} />

        <Route path="/hvad_siger_vores_gaester" component={Hvad_siger_vores_gaester} />
        <Route path="/om_moellerup_gods" component={Home} />

              <Route path="/hele_historien" component={Hele_historien} />
              <Route path="/galleri" component={Galleri} />
              <Route path="/virksomheder_paa_moellerup" component={Virksomheder_paa_moellerup} />

        <Route path="/kontakt_os" component={Kontakt_os} />
        <Route path="/webshop" component={Webshop} />
      </main>
    </BrowserRouter>
  );
}

export default App;