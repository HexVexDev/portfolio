import profilepic from "../../sources/profilepic.png"
export default function Home() {

    const stacks = [
        {
            title: "Data Science",
            tools: ["Python (Numpy,OpenCV, Scikit-learn)", "R", "SQL", "MongoDB"],
        },
        {
            title: "Development",
            tools: ["React", "FastAPI", "Tailwind", "Java"],
        },
        {
            title: "Extra Tools",
            tools: ["Git", "Docker", "Postman", "Linux"],
        },
    ];

    return (
        <div className="relative flex flex-col items-center justify-center px-4 md:px-0">
            <div className="flex flex-col items-center bg-white border border-gray-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-1 rounded-full bg-gradient-to-tr from-green-400 to-red-500 mb-4 shadow-lg">
                    <img src={profilepic} className="w-[200px] md:w-[300px] h-auto rounded-full border-4 border-white" alt="Profile"></img>
                </div>
                <h1 className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent text-3xl md:text-5xl font-extrabold text-center max-w-3xl mx-auto mb-2 tracking-tight">Data Scientist</h1>
                <p className="text-lg text-gray-600 font-medium text-center bg-gray-50 px-4 py-1 rounded-full border border-gray-100">Research-oriented, skilled in developing end-to-end analytical solutions.</p>
            </div>
            <div className="flex flex-col md:flex-row mt-12 mb-12 items-center gap-8 justify-center w-full max-w-5xl mx-auto">
                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-teal-400 rounded-lg blur opacity-25"></div>
                    <h1 className="relative text-emerald-700 text-3xl font-bold bg-white px-4 py-1 rounded-lg">Who am I?</h1>
                </div>
                <p className="w-full md:w-2/3 text-lg leading-relaxed text-gray-700 text-justify px-6 md:px-0 font-light">
                    I’m a Bioengineer with experience applying machine learning algorithms to quantify <em>in vitro</em> assay images during my Master’s research.
                    My work focuses on breaking down complex problems into their underlying variables and designing analytical approaches that yield reliable, interpretable outcomes under defined experimental conditions.
                </p>
            </div>
            <h1 className="text-3xl font-bold text-center w-full text-gray-800 mb-2">My Toolkit</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 mt-2 gap-8 w-full px-4 md:px-0 max-w-6xl">
                {stacks.map((stack) => (
                    <div key={stack.title} className="group p-8 border border-gray-100 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:border-emerald-200 transition-all duration-300 hover:-translate-y-2">
                        <h3 className="text-xl font-bold mb-4 text-emerald-700 group-hover:text-emerald-600 transition-colors border-b border-gray-100 pb-2">{stack.title}</h3>
                        <ul className="space-y-2 text-gray-600 list-none">
                            {stack.tools.map((tool) => (
                                <li key={tool} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full group-hover:scale-125 transition-transform"></span>
                                    {tool}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}        </div>
            <div className="flex flex-col md:flex-row mt-16 mb-12 items-center gap-8 justify-center w-full max-w-4xl p-6 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 shadow-inner">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 text-3xl font-extrabold uppercase tracking-widest">Fun Fact</h1>
                <p className="w-full md:w-2/3 text-center md:text-left text-gray-600 font-medium px-4 md:px-0 text-lg">
                    This page is deployed via <b className="text-gray-800">Cloudflare Tunnel</b> on a server from a recycled laptop running a <b className="text-gray-800">Docker container.</b>
                </p>
            </div>
        </div>
    );
}
