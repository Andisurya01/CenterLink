import React from "react"
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa6";
import Project from "./components/Project";
import DigitalProduct from "./components/DigitalProduct";
function App() {
  return (
    <div className="relative">
      <header className="absolute top-0 left-0 w-full p-2 flex items-center justify-center">
        <h1>Centerlink</h1>
      </header>
      <main >
        <section id="profile" className="flex flex-col gap-5 w-full items-center py-20 ">

          <img className="w-46 rounded-full" src="./profilepicture.jpeg" alt="profile"></img>
          <h2 className="font-bold">@AndiTechTalks</h2>
          <p className="text-sm">Junior Fullstack Web Developer</p>
          <div className="flex gap-5">
            <a href="https://www.instagram.com/andiiiii.sp/"
              className="hover:scale-120 transition-transform duration-200 ease-in-out"
            >
              <FaInstagram size={24} />
            </a>
            <a href="http://linkedin.com/in/andisurya1/"
              className="hover:scale-120 transition-transform duration-200 ease-in-out"
            >
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/Andisurya01"
              className="hover:scale-120 transition-transform duration-200 ease-in-out"
            >
              <FaGithub size={24} />
            </a>
            <a href="https://www.tiktok.com/@anditechtalks"
              className="hover:scale-120 transition-transform duration-200 ease-in-out"
            >
              <FaTiktok size={24} />
            </a>
          </div>
        </section>
        <section>
          <Project />
        </section>
        <section>
          <DigitalProduct />
        </section>
      </main>
      <footer className="text-center p-2">
        made by Andi Surya Priyadi
      </footer>
    </div>
  )
}

export default App
