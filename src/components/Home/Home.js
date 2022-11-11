import Navigationbar from "./Navigationbar";
import './home.css'
import './homeresponsive.css'
import Hero from "./Hero";
import Services from "./Services";
import Vision from "./Vision";
import Member from "./Member";
import Footer from "./Footer";

const Home = () => {
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

export default Home;
