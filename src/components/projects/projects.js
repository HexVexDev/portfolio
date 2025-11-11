import { useState } from "react";
import celltools1 from "../../sources/cell-tools1.png"
import celltools2 from "../../sources/cell-tools2.png"
import celltools3 from "../../sources/cell-tools3.png"

import caries1 from "../../sources/caries-1.JPG"
import caries2 from "../../sources/caries-2.jpg"
import caries3 from "../../sources/caries-3.jpg"
import caries4 from "../../sources/caries-4.jpg"



import masters1 from "../../sources/masters-work-1.jpg"
import masters2 from "../../sources/masters-work-2.png"
import masters3 from "../../sources/masters-work-3.jpg"
import masters4 from "../../sources/masters-work-4.jpg"


export default function Projects(){
    const projectList = [
        {
            name:"Cell Tools",
            img:celltools1,
            desc: "This project was designed to analyze fluorescent microscopy images. The main structure is a React container that serves the FastAPI which handles the image processing."
        },
         {
            name:"Caries Dataset Classification",
            img:caries3,
            desc: "A classification of an enamel caries image dataset, allowing to distinguish among the stages. The models were tested in R Studio and evaluated to find the best performing classificator."
        },
         {
            name:"Master of Science Degree Work",
            img:masters1,
            desc:"All of the image processing methods applied to my Master Degree, where image quantification was used to correlate it with fluorescence intensity, produced from a chemical reaction."
        },
       
    ]
    const [activeProject,setActiveProject] = useState("");

    const figureDescriptions = {
        celltools:["Sample of color extraction feature","Sample Ripley's K Function response graph, generated and downloadable"],
        caries:["Classification metrics sample.","No Enamel Caries sample.","Advanced Enamel Caries sample."],
        masters:["Multiwell plate with cell cultures after blank subtraction","Wound assay sample", "Wound assay image after Fourier's Transform"]
    }
        return(
        <div>
            <h1 className="bg-gradient-to-r from-green-500 to-red-600 bg-clip-text text-transparent text-4xl font-bold text-center max-w-3xl mx-auto h-[45px]">My Projects so far</h1>
            <div className="grid md:grid-cols-3 p-4 mt-6 gap-8">
                {projectList.map((project)=>(
                    <div
                    key={project.name}
                    className={`p-6 border-2 rounded-xl transition cursor-pointer flex flex-col items-center gap-2 
                        ${activeProject === project.name ? "shadow-xl bg-gray-200" : "shadow-md"} hover:shadow-xl`}
                    onClick={() =>
                        activeProject === project.name
                        ? setActiveProject("")
                        : setActiveProject(project.name)
                    }
                    >
                    <img className="h-[200px]" src={project.img} alt={project.name} />
                    <h3 className={`text-lg mb-3
                        ${activeProject === project.name ? "text-green-600 font-bold":"text-black font-semibold"}
                        `}>{project.name}</h3>
                    <p className="text-justify font-semibold">{project.desc}</p>
                    </div>
                ))}
            </div>
            {activeProject === "Cell Tools" && (
            <div className="mx-3 max-w-full flex flex-col border-2 rounded-xl overflow-hidden max-h-screen p-6">
                <p className="text-xl">The core use case for this project is the analysis of <b>microscopy cell images</b> stained with one or more fluorophores. It includes two main tools:
                A color or cluster extraction module to separate distinct fluorophore signals, and
                a clustering analysis module that uses <b>Ripley's K Function</b> to evaluate spatial distributions.
                Although initially intended for public deployment via a Cloudflare tunnel, self-hosting presented memory limitations. As a result, this project is now released as a containerized version suitable for local use.
                </p>
                <ul className="text-xl my-4 list-disc pl-5">
                <h2><b>Tech Stack</b></h2>
                <li>React – Frontend (browser-based interface)</li>
                <li>FastAPI (Python) – Backend (image processing + API endpoints)</li>
                <li>Docker – Containerization for easy deployment</li>
                </ul>
                <a className="text-lg underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://github.com/HexVexDev/cell-tools?tab=readme-ov-file">Link to the project.</a>
                <div className="flex items-center overflow-auto">
                    {[celltools3,celltools2].map((img,i) =>(
                        <div>
                        <img src={img} className="object-contain max-h-[90vh]" />
                        <h3 className="text-center"><b>Figure {i+1}. </b>{figureDescriptions.celltools[i]}</h3>
                    </div>
                    ))}
                </div>
            </div>
            )}
            {activeProject === "Caries Dataset Classification" && (
            <div className="mx-3 max-w-full flex flex-col border-2 rounded-xl overflow-hidden max-h-screen p-6">
                <p className="text-xl">
                    The purpose of this project was to evaluate the performance of various classification models in distinguishing among different stages of dental caries. Most existing approaches focus only on detecting the presence or absence of caries in intraoral images, without proposing a graded classification scale. Developing a quantitative model-based scale can reduce subjective variability among dentists and improve diagnostic consistency.
                    The dataset included 2,000 images representing multiple caries stages. Image features were extracted using <b>Weka</b>, followed by dimensionality reduction with <b>PCA</b>. 
                    Models such as <b>k-Nearest Neighbors, Naive Bayes, Random Forest, Support Vector Machine,</b> and <b>Neural Networks</b> were compared, achieving up to <b>~100% precision</b> under certain configurations.
                </p>
                <ul className="text-xl my-4 list-disc pl-5">
                <h2><b>Tech Stack</b></h2>
                <li>R Studio(for model generation and evaluation)</li>
                <li>Weka(for image characteristics extraction)</li>
                </ul>
                <div className="flex items-center justify-around ">
                    {[caries1,caries2,caries4].map((img,i)=>(
                        <div className="flex flex-col items-center">
                        <img src={img}  />
                        <h3 className="text-center"><b>Figure {i+1}. </b>{figureDescriptions.caries[i]}</h3>
                    </div>
                    ))}
                </div>
            </div>
            )}
            {activeProject === "Master of Science Degree Work" && (
            <div className="mx-3 max-w-full flex flex-col border-2 rounded-xl overflow-hidden max-h-screen p-6">
                <p className="text-xl">
                    During my Master’s degree, I focused on quantifying biological variables such as reactive oxygen species (ROS) using fluorescence imaging and image processing. 
                    This required developing a custom imaging setup and implementing pre-processing steps such as blank subtraction.
                </p>
                <ul className="text-xl my-4 list-disc pl-5">
                    <li><b>Python</b>: Subtracted blank images and applied morphological operations to reduce background noise.</li>
                <li><b>R</b>: Analyzed fluorescence clustering in cultured cells and quantified statistical significance using <b>Ripley’s K function</b>.</li>
                <li><b>MATLAB</b>: Processed wound assay images using the <b>Fourier Transform</b> to isolate wound regions from noise.</li>
                </ul>
                <div className="flex items-center overflow-auto justify-around">
                    {[masters2, masters3, masters4].map((img, i) => (
                        <div key={i} className="flex flex-col items-center w-[450px]">
                            <img src={img} className="h-[200px] w-full object-contain " />
                            <h3 className="text-center mt-2 text-sm">
                            <b>Figure {i + 1}. </b>{figureDescriptions.masters[i]}</h3>
                        </div>
                    ))}
                </div>
            </div>
            )}
        </div>
    );
}
