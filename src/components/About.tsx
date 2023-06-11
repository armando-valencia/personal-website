const skills: string[] = [
    "React",
    "JavaScript",
    "Node",
    "Express",
    "Python",
    "Rust",
    "Tailwind",
    "Git",
    "SQL",
    "GraphQL",
];

const About = () => (
    <div className="section-container">
        <div className="block text-lg md:text-xl">
            <div className="flex justify-center items-center">
                <img
                    src="\picture.jpg"
                    alt="Picture of myself"
                    className="rounded-full h-48 md:h-60 p-3 mt-6 md:mt-0"
                />
            </div>
            <div className="text-quarternary">
                <p className="px-2 pt-6 pb-4">
                    In 2021, I graduated with my Bachelor's of Science, majoring
                    in Management Information Systems at the University of
                    Alabama.
                </p>
                <p className="px-2 pt-6 pb-4">
                    My enthusiasm for software development stems from my early
                    challenges in my first programming classes, which led me to
                    discover my passion for problem-solving and continuous
                    learning.
                </p>
                <p className="px-2 pt-6 pb-4">
                    In my freetime, I enjoy watching sports (mainly soccer,
                    basketball, and football), trying out a new recipe in the
                    kitchen, or spending time outdoors.
                </p>
            </div>
            <div className="flex justify-center mt-4 p-2 text-secondary text-2xl">
                Skills:
            </div>
            <div className="grid grid-cols-2 gap-1 justify-items-center list-none text-quarternary">
                {skills.map((skill, idx) => (
                    <li key={`${skill}-${idx}`}>{skill}</li>
                ))}
            </div>
        </div>
    </div>
);

export default About;
