import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [{
        id: 1,
        name: 'DriveCLone',
        description: "DriveClone is a full-stack cloud storage web application inspired by Google Drive.It allows users to securely upload, organize, preview, and manage files and folders with modern UI and real-time interactions.",
        tools: ["React", "Node", "Postman", "Javascript", "express", "multer", "Postgress"],
        role: 'Project Lead',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'WeatherApp',
        description: 'An innovative agricultural solution that automates the transplanting of multiple vegetable types, increasing planting efficiency by 30%. Built with Arduino for control, App Inventor for a user-friendly interface, and integrated QR Code Scanner for accurate crop identification, it also uses WhatsApp API to send real-time notifications. This system combines automation with seamless communication to enhance productivity in farming operations.',
        tools: ["React", "Weather API", "APIS", "Express"],
        role: 'Lead',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'ZerodhaClone',
        description: 'Developed a responsive Zerodha-inspired trading platform with user authentication, real-time stock data visualization, and order management using modern web technologies.',
        tools: ["React", "Node", "Express", "Rest APIS", "Node.js", "MongoDB",],
        code: '',
        role: 'Project Lead',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'VidhanVerse',
        description: " VidhanVerse is application wich help to law learn in game form. application is develop in react native and backend is done in mongo DB. main aim to develop this application is to learn law in easly way to citizen",
        tools: ['React Native', 'app development', 'node.js', 'Express', 'MongoDB' , 'apis' ,],
        code: '',
        demo: '',
        image: ayla,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },