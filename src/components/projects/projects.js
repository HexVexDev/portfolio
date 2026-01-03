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


export default function Projects() {
    const projectList = [
        {
            name: "Cell Tools",
            img: celltools1,
            desc: "This project was designed to analyze fluorescent microscopy images. The main structure is a React container that serves the FastAPI which handles the image processing."
        },
        {
            name: "Caries Dataset Classification",
            img: caries3,
            desc: "A classification of an enamel caries image dataset, allowing to distinguish among the stages. The models were tested in R Studio and evaluated to find the best performing classificator."
        },
        {
            name: "Master of Science Degree Work",
            img: masters1,
            desc: "All of the image processing methods applied to my Master Degree, where image quantification was used to correlate it with fluorescence intensity, produced from a chemical reaction."
        },

    ]
    const [activeProject, setActiveProject] = useState("");

    const figureDescriptions = {
        celltools: ["Sample of color extraction feature", "Sample Ripley's K Function response graph, generated and downloadable"],
        caries: ["Classification metrics sample.", "No Enamel Caries sample.", "Advanced Enamel Caries sample."],
        masters: ["Multiwell plate with cell cultures after blank subtraction", "Wound assay sample", "Wound assay image after Fourier's Transform"]
    }
    return (
        <div className="w-full max-w-7xl mx-auto px-4">
            <h1 className="bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent text-3xl md:text-5xl font-extrabold text-center max-w-3xl mx-auto h-auto md:h-[60px] mb-8 md:mb-4 drop-shadow-sm">My Projects so far</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 p-2 mt-8 gap-10">
                {projectList.map((project) => (
                    <div
                        key={project.name}
                        className={`group p-6 border border-gray-100 rounded-3xl transition-all duration-300 cursor-pointer flex flex-col items-center gap-4 relative overflow-hidden
                        ${activeProject === project.name
                                ? "shadow-2xl bg-white ring-2 ring-green-400 scale-[1.02]"
                                : "shadow-xl bg-white hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-50"}`}
                        onClick={() =>
                            activeProject === project.name
                                ? setActiveProject("")
                                : setActiveProject(project.name)
                        }
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <img className="h-[200px] w-full object-cover rounded-xl shadow-md group-hover:shadow-lg transition-all" src={project.img} alt={project.name} />
                        <h3 className={`text-xl mb-1 z-10 text-center
                        ${activeProject === project.name ? "text-green-700 font-extrabold" : "text-gray-800 font-bold group-hover:text-green-600 transition-colors"}
                        `}>{project.name}</h3>
                        <p className="text-center font-medium text-gray-500 text-sm leading-relaxed z-10 px-2">{project.desc}</p>
                    </div>
                ))}
            </div>
            {activeProject === "Cell Tools" && (
                <div className="mx-auto mt-10 max-w-6xl flex flex-col border border-gray-200 bg-white/50 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12 animate-fade-in">
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
                    <div className="flex flex-col md:flex-row items-center overflow-auto gap-4">
                        {[celltools3, celltools2].map((img, i) => (
                            <div key={i} className="w-full md:w-auto">
                                <img src={img} className="object-contain max-h-[50vh] md:max-h-[90vh] w-full md:w-auto" alt={`Project illustration ${i + 1}`} />
                                <h3 className="text-center mt-2"><b>Figure {i + 1}. </b>{figureDescriptions.celltools[i]}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {activeProject === "Caries Dataset Classification" && (
                <div className="mx-auto mt-10 max-w-6xl flex flex-col border border-gray-200 bg-white/50 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12 animate-fade-in">
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
                    <div className="flex flex-col md:flex-row items-center justify-around gap-6">
                        {[caries1, caries2, caries4].map((img, i) => (
                            <div key={i} className="flex flex-col items-center w-full md:w-auto">
                                <img src={img} className="max-w-full h-auto" alt={`Caries example ${i + 1}`} />
                                <h3 className="text-center mt-2"><b>Figure {i + 1}. </b>{figureDescriptions.caries[i]}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {activeProject === "Master of Science Degree Work" && (
                <div className="mx-auto mt-10 max-w-6xl flex flex-col border border-gray-200 bg-white/50 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12 animate-fade-in">
                    <p className="text-xl">
                        During my Master’s degree, I focused on quantifying biological variables such as reactive oxygen species (ROS) using fluorescence imaging and image processing.
                        This required developing a custom imaging setup and implementing pre-processing steps such as blank subtraction.
                    </p>
                    <ul className="text-xl my-4 list-disc pl-5">
                        <li><b>Python</b>: Subtracted blank images and applied morphological operations to reduce background noise.</li>
                        <li><b>R</b>: Analyzed fluorescence clustering in cultured cells and quantified statistical significance using <b>Ripley’s K function</b>.</li>
                        <li><b>MATLAB</b>: Processed wound assay images using the <b>Fourier Transform</b> to isolate wound regions from noise.</li>
                    </ul>
                    <div className="flex flex-col md:flex-row items-center overflow-auto justify-around gap-6">
                        {[masters2, masters3, masters4].map((img, i) => (
                            <div key={i} className="flex flex-col items-center w-full md:w-[450px]">
                                <img src={img} className="h-auto md:h-[200px] w-full object-contain " alt={`Master's work ${i + 1}`} />
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
