import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Info from "./components/Info";
import Services from "./components/Services";
import Footer from "./components/Footer";

import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const App = () => {
  const companyWeb = "www.lagunetadesign.com";

  const companyServices = [
    {
      id: 0,
      name: "Desarrollo de páginas web",
    },
    {
      id: 1,
      name: "Desarrollo de aplicaciones web, móvil l y de escritorio",
    },
    {
      id: 2,
      name: "Publicación y optmización de campañas en Facebook Ads y Google Ads",
    },
  ];

  const socialData = [
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/david-g%C3%B3mez-dev",
    },
    { icon: FaGithub, href: "https://github.com/lordraum" },
    { icon: FaTwitter, href: "https://twitter.com/lordraum1989" },
    { icon: FaInstagram, href: "https://www.instagram.com/davidfgomezc" },
    { icon: FaFacebookF, href: "https://www.facebook.com/DavidfKnetch" },
  ];

  return (
    <>
      <Nav companyName="Laguneta Design" />

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
        <Services companyServices={companyServices} />
        <Footer companyWeb={companyWeb} socialData={socialData} />
      </main>
    </>
  );
};

export default App;
