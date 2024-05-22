import About from "../About/About";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Consultation from "../Consultation/Consultation";
import Contact from "../Contact/Contact";
import Project from "../Projects/Project";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
            <Project/>
            <Testimonial/>
            <Contact/>
            <Blogs/>
            <Consultation/>
        </div>
    );
};

export default Home;