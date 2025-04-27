import { FiArrowRight } from "react-icons/fi";
import React from "react"
export default function Project() {
    return (
        <div className="flex flex-col">
            <h2 className="text-4xl pt-10 pb-5">Project</h2>
            <div className={`w-full flex flex-col  p-5 relative rounded-2xl overflow-hidden shadow-lg bg-white`}>
                <div className="flex flex-col  z-10">
                    <h3 className="text-2xl">Portofolio</h3>
                    <div className="flex gap-2 items-center justify-between">
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                        <a href="https://portofolio-andi-surya.vercel.app/" className="text-sm px-3 py-2 text-[#f1f1f1] bg-[#010101] w-fit rounded-full flex items-center">View Project <FiArrowRight className="ml-2" size={20} /></a>
                    </div>
                </div>
                <div>
                    <img src="./ssporto.png" alt="ssporto" className="rounded-lg blur-lg absolute w-full" />
                </div>
            </div>
        </div>
    )
}