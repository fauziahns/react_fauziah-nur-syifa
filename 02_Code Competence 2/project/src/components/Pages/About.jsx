import Footer from "../Footer/Footer"
import Hero from "../Hero/Hero"
import Navbar from "../Navbar/Navbar"

const About = () => {
    return(
        <>
        <Navbar/>
        <div className="container-fluid bg-body-secondary p-5">
            <div className="wrapper w-75">
            <h2>About Me</h2>
            <img src="src\assets\about.jpg" alt="about" width="400" height="350" className="rounded pt-3"/>
            <p className="pt-5 lh-lg"> I'm from Indonesia and i have been learn and explore about FrontEnd for more than 1 years. I’m an ungraduated student at Universitas Komputer Indonesia majoring Sistem Informasi. I am currently following program Kampus Merdeka,
            which is Studi Independen with Alterra Academy. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum in recusandae architecto officia, similique temporibus voluptatum deleniti veritatis explicabo ex quia rerum aut ipsum esse consequuntur! Architecto temporibus maiores excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam cumque odit laudantium, aspernatur sapiente porro culpa autem sit perspiciatis? Veniam modi earum laudantium impedit harum ratione unde minus aspernatur officia!</p>
            </div>
        </div>
        <Footer className={'footer'}/>
        </>
    )
}

export default About