import emoji from "react-easy-emoji";

export const greetings = {
	name: "Lance Steven Ranara",
	title: "Hi all, I'm Lance",
	description:
		"Hello! My name is Lance Steven Ranara, I currently have a Bachelor of Science in Computer Science degree. I'm trying to improve my skills, especially my problem-solving and programming skills by trying out different things.",
	resumeLink:
		"https://drive.google.com/file/d/1YS9AYNd1J0ZLJOOt2INEC8MnOvPGVaIU/view?usp=sharing",
};

export const openSource = {
	githubUserName: "lanceranara13",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/lanceranara13",
	github: "https://github.com/lanceranara13",
	linkedin: "https://www.linkedin.com/in/lance-ranara-65719019a/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				emoji(
					"⚡ Building RESTful APIs in Django & Django REST Framework"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},

				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},

	],
};

export const SkillBars = [
	{
		Stack: "Frontend", //Insert stack or technology you have experience in
		progressPercentage: "60", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "75",
	},
];

export const educationInfo = [
	{
		schoolName: "Ateneo de Naga University",
		subHeader: "Bachelor of Science in Computer Science",
		duration: "June 2018 - May 2022",
		// desc: "Participated in the research of XXX and published 3 papers.",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
];

export const experience = [
	{
		role: "Backend Developer",
		company: "ThingsPH",
		companylogo: "/img/icons/common/ThingsPH.jpg",
		date: "July 2022 – August 2022",
		desc: "I worked as a Backend developer on streamshot. Streamshot is a platform that handles the connection between CCTV cameras and the ThingsPH console. We built the API that connects the frontend and the server using NodeJS, NestJS, Typescript. I also helped the front-end developer in testing the system using Angular. ",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
];

export const projects = [
	{
		name: "Minesweeper Game",
		desc: "Terminal Minesweeper Game",
		github: "https://github.com/lanceranara13/Minesweeper",
	},
	{
		name: "Discord Bots",
		desc: "Disord Music Bot",
		github: "https://github.com/lanceranara13/DiscordBots",
	},
	{
		name: "Socket Game",
		desc: "2-Players Rock, Paper, Scissors Socket game",
		github: "https://github.com/lanceranara13/Rock-Paper-Scissors-Two-player-using-Sockets-",
	},
	{
		name: "Online Judge Problems Solved",
		desc: "C++ programs submitted solution to onlinejudge.org",
		github: "https://github.com/lanceranara13/uva",
	},
];

export const feedbacks = [
	// {
	// 	name: "John Smith",
	// 	feedback:
	// 		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	// },
	// {
	// 	name: "John Smith",
	// 	feedback:
	// 		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	// },
];
