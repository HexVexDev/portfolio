export default function Education() {
    const degrees = [
        {
            title: "Master of Science Degree",
            institution: "UABC",
            description: "Applied image analysis to breast cancer cell culture samples under different conditions to determine changes in Reactive Oxygen Species levels and their distribution.",
            link: "https://www.uabc.mx"
        }, {
            title: "Fullstack Developer Professional Certificate",
            institution: "IBM - Coursera",
            description: "A fullstack development course, including MERN stack tools, cloud architecture and containerization principles and other tools for development such as Git and cloud platforms.",
            link: "https://coursera.org/share/11509bea4fc0477c9e610bafc2c6f91b"
        }, {
            title: "Bioengineer",
            institution: "UABC",
            description: "Trained in both electronics, programming, engineering and diverse biology topics such as microbiology, chemistry and physiology.",
            link: "https://ingenieria.mxl.uabc.mx/pe_ibi/mapa-curricular-2020-1"
        }
    ]
    return (
        <div className="flex flex-col items-center w-full px-4 md:px-0">
            <h1 className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent text-3xl md:text-5xl font-extrabold text-center h-auto md:h-[60px] mb-8 drop-shadow-sm">
                My Training
            </h1>
            <div className="flex flex-col gap-6 w-full max-w-2xl text-justify">
                {degrees.map((degree) => (
                    <a key={degree.title}
                        href={degree.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block border border-gray-100 rounded-2xl p-8 shadow-lg bg-white hover:bg-gradient-to-br hover:from-white hover:to-green-50/30 hover:border-green-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-full -mr-12 -mt-12 opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
                        <h2 className="text-2xl font-bold text-gray-800 group-hover:text-green-700 transition-colors">{degree.title}</h2>
                        <h3 className="text-lg font-semibold text-gray-500 mb-3">{degree.institution}</h3>
                        <p className="text-md leading-relaxed text-gray-600 relative z-10">{degree.description}</p>
                    </a>
                ))}
            </div>
        </div>

    );
}