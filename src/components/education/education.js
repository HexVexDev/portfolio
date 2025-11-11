export default function Education(){
    const degrees = [
        {
            title: "Master of Science Degree",
            institution: "UABC",
            description: "Applied image analysis to breast cancer cell culture samples under different conditions to determine changes in Reactive Oxygen Species levels and their distribution.",
            link:"https://www.uabc.mx"
        },{
            title: "Fullstack Developer Professional Certificate",
            institution: "IBM - Coursera",
            description: "A fullstack development course, including MERN stack tools, cloud architecture and containerization principles and other tools for development such as Git and cloud platforms.",
            link: "https://coursera.org/share/11509bea4fc0477c9e610bafc2c6f91b"
        },{
            title:"Bioengineer",
            institution:"UABC",
            description: "Trained in both electronics, programming, engineering and diverse biology topics such as microbiology, chemistry and physiology.",
            link: "https://ingenieria.mxl.uabc.mx/pe_ibi/mapa-curricular-2020-1"
        }
    ]
    return(
        <div className="flex flex-col items-center w-full">
            <h1 className="bg-gradient-to-r from-green-500 to-red-600 bg-clip-text text-transparent text-4xl font-bold text-center h-[45px] mb-6">
            My Training
            </h1>
            <div className="flex flex-col gap-4 w-full max-w-md text-justify">
            {degrees.map((degree) => (
                 <a key={degree.title}
                    href={degree.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border-2 rounded-xl p-6 shadow-md bg-white hover:bg-gray-100 transition-colors cursor-pointer">
                    <h2 className="text-xl font-semibold">{degree.title}</h2>
                    <h3 className="text-md text-gray-600">{degree.institution}</h3>
                    <p className="text-md mt-2">{degree.description}</p>
                </a>
            ))}
            </div>
        </div>

    );
}