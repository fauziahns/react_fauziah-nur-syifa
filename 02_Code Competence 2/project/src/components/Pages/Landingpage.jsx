
import { useState } from "react"
import Footer from "../Footer/Footer"
import Hero from "../Hero/Hero"
import Navbar from "../Navbar/Navbar"


function App() {
  const [clientName, setClientName] = useState("")
  const [email, setEmail] = useState("")
  const [description, setDescription] = useState("")

  //alert submit data
  const handleSubmit = (event) => {
    alert(
      'name : ' + clientName + 
      ' email : ' + email + 
      ' description :' + description)
      event.preventDefault();
  }


  return (
    <div>
    <Navbar/>
    <Hero/>
     <div className="contact container-fluid bg-dark text-light">
      <div className="row">
        <div className="col" />
        <div className="col-10">
          <h4 classname="pt-5">Hire Me!</h4>
          <form action="" id="formData">
            <div className="mb-4 mt-5">
              <label htmlFor="nameClient" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="clientName"
                value={clientName}
                onChange={(e) => {setClientName(e.target.value)}}
                className="form-control w-50"
                id="name"
                placeholder=""
              />
            </div>
            <div className="mb-4">
              <label htmlFor="emailClient" className="form-label">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
                name="email"
                className="form-control w-50"
                id="email"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Descriptions
              </label>
              <textarea
                className="form-control w-50"
                value={description}
                onChange={(e) => {setDescription(e.target.value)}}
                name="description"
                id="description"
                rows={3}
                defaultValue={""}
              />
            </div>
            <button 
              type="submit" 
              className="btn btn-light" 
              id="submit" 
              onClick={handleSubmit}>
              Send
            </button>
          </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
    <div className="container-fluid bg-body-secondary p-5">
            <div className="wrapper w-75">
            <h2>About Me</h2>
            <img src="src\assets\about.jpg" alt="about" width="400" height="350" className="rounded pt-3"/>
            <p className="pt-5 lh-lg"> I'm from Indonesia and i have been learn and explore about FrontEnd for more than 1 years. I’m an ungraduated student at Universitas Komputer Indonesia majoring Sistem Informasi. I am currently following program Kampus Merdeka,
            which is Studi Independen with Alterra Academy. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum in recusandae architecto officia, similique temporibus voluptatum deleniti veritatis explicabo ex quia rerum aut ipsum esse consequuntur! Architecto temporibus maiores excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam cumque odit laudantium, aspernatur sapiente porro culpa autem sit perspiciatis? Veniam modi earum laudantium impedit harum ratione unde minus aspernatur officia!</p>
            </div>
        </div>
    <Footer className={'footer'}/>
    </div>
  )
}

export default App
