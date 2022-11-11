import Navigationbar from "./Navigationbar";
<<<<<<< HEAD
import './home.css'
import './homeresponsive.css'
=======
import "./home.css";
>>>>>>> 04d58691a4ae62325a8d25ac72839fce86df05be
import Hero from "./Hero";
import Services from "./Services";
import Vision from "./Vision";
import Member from "./Member";
import Footer from "./Footer";

const Home = () => {
<<<<<<< HEAD
    return (  
        <div className="home1">
            <Navigationbar services="service-id" hero="hero-id" vision="vision-id" member="member-id" footer="footer-id" />
            <Hero id="hero-id" />
            <Services id="service-id" />
            <Vision id="vision-id"/>
            <Member id="member-id"/>
            <Footer id="footer-id" services="service-id" hero="hero-id" vision="vision-id" member="member-id" footer="footer-id"/>
        </div>
    );
}
=======
  return (
    <div className="home">
      <Navigationbar
        services="service-id"
        hero="hero-id"
        vision="vision-id"
        member="member-id"
        footer="footer-id"
      />
      <Hero id="hero-id" />
      <Services id="service-id" />
      <Vision id="vision-id" />
      <Member id="member-id" />
      <Footer
        id="footer-id"
        services="service-id"
        hero="hero-id"
        vision="vision-id"
        member="member-id"
        footer="footer-id"
      />
    </div>
  );
};
>>>>>>> 04d58691a4ae62325a8d25ac72839fce86df05be

export default Home;
