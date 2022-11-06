
import Navigationbar from "./Navigationbar";
import './home.css'
import Hero from "./Hero";
import Services from "./Services";
import Vision from "./Vision";
import Member from "./Member";
import Footer from "./Footer";


const Home = () => {
    return (  
        <div className="home">
             <Navigationbar />
            <Hero />
            <Services />
            <Vision/>
            <Member/>
            <Footer/>
        </div>
    );
}

export default Home;