export const navItems = [
    { name: "Home", link: "#hero" },
    { name: "Education", link: "#education" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    // { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible and adpative with changing Environments",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My Development Skills",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: " development and Programming.",
        description: "Computer Science enthusiast with a passion for",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently building a itinerary builder using Gemini Ai",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const Programming = [
    { id: 1, title: "C", img: "/C_p.svg" },
    { id: 2, title: "C++", img: "/c++.svg" },
    { id: 3, title: "Java", img: "/java.svg" },
    { id: 4, title: "Python", img: "/python.svg" },
];

export const Frontend = [
    { id: 1, title: "HTML5", img: "/html.svg" },
    { id: 2, title: "CSS3", img: "/css3.svg" },
    { id: 3, title: "JavaScript", img: "/javascript.svg" },
    { id: 4, title: "ReactJs", img: "/re.svg" },
    { id: 5, title: "NextJs", img: "/next.svg" },
    { id: 6, title: "Tailwind", img: "/tail.svg" },
    { id: 7, title: "Bootstrap", img: "/bootstrap.svg" },
];

export const Backend = [
    { id: 1, title: "MongoDB", img: "/mongodb.svg" },
    { id: 2, title: "Drizzle ORM", img: "/dz.png" },
    { id: 3, title: "DBMS", img: "/sql.svg" },
];


export const projects = [
    {
        id: 1,
        title: "User Expense-Tracker",
        des: "Developed a fully functional expense-tracker website which helps a user to add various budgets and expenses related to it.",
        img: "/expense.jpg",
        iconLists: ["/next.svg", "/re.svg", "/shdcn.png", "/javascript.svg", "/tail.svg", "/dz.png"],
        link: "https://github.com/MuditRohilla1/Expense-Tracker.git",
    },
    {
        id: 2,
        title: "Real-Time News Generator",
        des: "Implemented a real-time news generator that fetches and displaysthe latest news articles from a news API, with the ability to filter by category and search for specific topics.",
        img: "/news.jpg",
        iconLists: ["/re.svg", "/html.svg", "/javascript.svg", "/bootstrap.svg"],
        link: "https://github.com/MuditRohilla1/NewsUp.git",
    },
    {
        id: 3,
        title: "To-Do List Website",
        des: "Created a to-do list web application where users can sign up, log in, and manage their to-do lists. Users can add, edit, delete, and mark tasks as complete, with all data stored in a connected database.",
        img: "/to-do.jpg",
        iconLists: ["/re.svg", "/javascript.svg", "/bootstrap.svg", "/html.svg", "/css3.svg"],
        link: "/ui.aiimg.com",
    },
    {
        id: 4,
        title: "E commerce Website",
        des: "Developed an Ecommerce Website by taking considerations of some major features from Amazon and applyign all the functionalites according to it...",
        img: "/ecommerce.jpg",
        iconLists: ["/re.svg", "/javascript.svg", "/fb.svg", "/html.svg", "/css3.svg"],
        link: "/https://github.com/MuditRohilla1/Rabbit-ecommerce-.git",
    },
    {
        id: 5,
        title: "A Social-Media App",
        des: "Cloned a Social Media app named TWITTER by taking considerations of some major features and applyign all the functionalites according to it...",
        img: "/Twitter-rebrands-X.webp",
        iconLists: ["/re.svg", "/javascript.svg", "/fb.svg", "/html.svg", "/css3.svg"],
        link: "https://clone-zkw3.onrender.com/",
    },
    {
        id: 6,
        title: "Chat Application",
        des: "A complete working chat application with real time message send/receive using Socket.io",
        img: "/chatImage.png",
        iconLists: ["/re.svg", "/javascript.svg", "/fb.svg", "/html.svg", "/css3.svg"],
        link: "https://clone-zkw3.onrender.com/",
    },
];

export const testimonials = [
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
];

export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Frontend Engineer Intern",
        desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Mobile App Dev",
        desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
    {
        id: 4,
        title: "College Project Lead",
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        path: "https://github.com/MuditRohilla1"
    },
    {
        id: 2,
        img: "/twit.svg",
        path: "https://twitter.com/MuditRohilla1"
    },
    {
        id: 3,
        img: "/link.svg",
        path: "https://www.linkedin.com/in/mudit-rohilla-43a031232/"
    },
];