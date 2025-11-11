import profilepic from "../../sources/profilepic.png"
export default function Home(){

    const stacks = [
  {
    title: "Data Science",
    tools: ["Python (Numpy,OpenCV, Scikit-learn)", "R", "SQL","MongoDB"],
  },
  {
    title: "Development",
    tools: ["React", "FastAPI", "Tailwind", "Java"],
  },
  {
    title: "Extra Tools",
    tools: ["Git","Docker", "Postman", "Linux"],
  },
];

    return(
        <div className="relative flex flex-col items-center justify-center">
            <div className="flex flex-col items-center border-2 rounded-md p-4 shadow-md hover:shadow-lg transition">
                <img src={profilepic} width="300px" height="300px"></img>
                <h1 className="bg-gradient-to-r from-green-500 to-red-600 bg-clip-text text-transparent text-4xl font-bold text-center max-w-3xl mx-auto">Data Scientist</h1>
                <p className="text-base font-medium">Research-oriented, skilled in developing end-to-end analytical solutions.</p>
            </div>
            <div className="flex mt-6 mb-6 items-center gap-6 justify-center">
                <h1 className="text-green-600 text-2xl font-bold">Who am I?</h1>
                <p className="w-1/3 text-justify">
                    I’m a Bioengineer with experience applying machine learning algorithms to quantify <em>in vitro</em> assay images during my Master’s research. 
                    My work focuses on breaking down complex problems into their underlying variables and designing analytical approaches that yield reliable, interpretable outcomes under defined experimental conditions.
                </p>
            </div>
            <h1 className="text-green-600 text-2xl font-bold text-center w-full">My Toolkit</h1>
            <div className="grid md:grid-cols-3 mt-6 gap-8">
            {stacks.map((stack) => (
                <div key={stack.title} className="p-6 border-2 rounded-xl shadow-md hover:shadow-lg">
                <h3 className="text-lg font-semibold mb-3">{stack.title}</h3>
                <ul className="space-y-1 text-gray-700 list-disc pl-5">
                    {stack.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                    ))}
                </ul>
                </div>
            ))}
            </div>
            <div className="flex mt-6 mb-6 items-center gap-6 justify-center">
                <h1 className="text-green-600 text-2xl font-bold">Fun Fact</h1>
                <p className="w-1/2 text-justify">
                    This page is deployed via <b>Cloudflare Tunnel</b> on a server from a recycled laptop running a <b>Docker container.</b>
                </p>
            </div>
        </div>
    );
}
