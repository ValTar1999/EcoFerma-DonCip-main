import React from 'react';
import Header from './component/Header';
import Nav from './component/Nav';
import CardInfo from './component/CardInfo';
import About from './component/About';

import Img_1 from '../src/img/pexels-peter-steele-14248086.jpg';
import Img_2 from '../src/img/ferm-ecologică-vaci.jpg';
import Img_3 from '../src/img/soil-association-pigs.avif';
import Footer from "./component/Footer";
import InfoBlock from "./component/InfoBlock";


function App() {
  return (
    <div className="bg-amber-50">
      <Nav/>
      <Header 
        title="Bine ați venit în locul în care se naște aroma naturală"
        text="EcoFerma DonCip"
      />
      <About
        title="Despre EcoFerna DonCip"
        text="EcoFerma DonCip este o companie dedicată producției și păstrării furajelor, precum și creșterii bovinelor și porcinelor. Fondată cu pasiunea pentru agricultură durabilă, ne angajăm să oferim produse de înaltă calitate și servicii profesioniste."
      />
      <InfoBlock
        title="Obiectivele companiei:"
        content={[
          'Extinderea capacitatii de crestere a bovinelor si porcinelor.',
          'Introducerea sistemelor de muls automatizata.',
          'Modernizarea si optimizarea infrastructurii fremei.',
          'Diversificarea gamelor de produse.'
        ]}
      />
      <CardInfo
        img={Img_1}
        variant="md:flex-row"
        title="Producerea și Păstrarea Furajelor"
        text="La EcoFerma DonCip, ne dedicăm să producem furaje de cea mai înaltă calitate, special concepute pentru a satisface nevoile nutriționale ale animalelor tale și pentru a promova sănătatea acestora. Ne preocupăm de fiecare ingredient folosit în furajele noastre, asigurându-ne că acestea oferă o nutriție echilibrată și sustenabilă pentru animalele tale. Fiecare etapă a procesului de producție este supravegheată cu atenție pentru a garanta că furajele noastre sunt conforme cu cele mai înalte standarde de calitate și siguranță alimentară."
        titleText="🌾 De Ce Furajele Noastre?"
        textList={[
          'Calitate Garantată: Ingrediente de cea mai înaltă calitate pentru nutriție optimă.',
          'Expertiză și Inovație: Căutăm mereu modalități de îmbunătățire și soluții nutritive de ultimă generație.',
          'Susținere Profesională: Echipa dedicată oferă consultanță pentru sănătatea și fericirea animalelor.'
        ]}
      />

      <CardInfo
        img={Img_2}
        variant="md:flex-row-reverse"
        title="Creșterea Bovinelor"
        text="Transformăm modul în care vedeți creșterea animalelor. Oferim soluții moderne și eficiente pentru afacerea agricolă a dumneavoastră. Suntem pasionați de creșterea bovinelor și ne-am angajat să vă oferim cele mai bune servicii și soluții pentru succesul fermelor dumneavoastră. De la selecția geneticii superioare până la programele de nutriție avansată și îngrijirea sănătății, vă sprijinim în fiecare etapă a creșterii și dezvoltării animalelor dumneavoastră."
        titleText="🐂 Ce Ne Definește?"
        textList={[
          'Genetica de Vârf: Linii genetice adaptate nevoilor de producție și cerințelor pieței.',
          'Nutriție Avansată: Soluții nutriționale personalizate pentru fiecare fermă și animal.',
          'Sănătate și Bunăstare: Echipa de experți asigură cele mai bune standarde de îngrijire și protecție.'
        ]}
      />

      <CardInfo
        img={Img_3}
        variant="md:flex-row"
        title="Creșterea Porcinelor"
        text="EcoFerma DonCip - destinația pentru creșterea porcinelor cu performanță ridicată și bunăstare animală! Suntem dedicați să vă oferim soluții inovatoare și de încredere pentru creșterea porcinelor. Cu o combinație de genetica avansată, nutriție personalizată și practici de îngrijire de înaltă calitate, vă ajutăm să atingeți obiectivele dvs. de producție și să asigurați bunăstarea animalelor dumneavoastră."
        titleText="🐖 De Ce EcoFerma DonCip?"
        textList={[
          'Genetica Avansată: Linii superioare de porci pentru maximizarea randamentului și eficienței.',
          'Nutriție Personalizată: Soluții nutriționale adaptate la nevoile nutritive specifice ale porcilor.'
        ]}
      />
      <Footer/>
    </div>
  );
}

export default App;