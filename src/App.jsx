import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Info from "./components/Info";
import Services from "./components/Services";
import Footer from "./components/Footer";

const App = () => {
  const companyWeb = "www.lagunetadesign.com";
  return (
    <>
      <Nav companyName="Laguneta Design" companyWeb={companyWeb} />

      <main className="main">
        <Header />
        <Info
          name="Fernando"
          lastName="Gómez"
          roleOne="Desarrollador Web"
          roleTwo="Traficker (Google Ads, Facebook Ads)"
          phone="+573153299791"
          waLink="
          https://wa.link/us55op"
          mail="lordraum@gmail.com"
        />
        <Services
          serviceOne="Desarrollo de páginas web"
          serviceTwo="Desarrollo de aplicaciones web, móviles y de escritorio"
          serviceThree="Publicación y optimización de campañas en Facebook y Google Ads"
        />
        <Footer companyWeb={companyWeb} />
      </main>
    </>
  );
};

export default App;
