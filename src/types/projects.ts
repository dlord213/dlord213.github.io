interface ProjectInterface {
    title: string;
    devices: string;
    description: string;
    imageSrc: string;
    link: string;
    stack: string[];
}

const projects: ProjectInterface[] = [
    {
        title: "SwitchDeals",
        devices: "Web & Android",
        description: "A web app that tracks deals on Nintendo eShop.",
        imageSrc: "/assets/projects/switchdeals/1.jpg",
        link: "https://switchdeals.vercel.app",
        stack: ['Next.js', 'Expo']
    },
    {
        title: "Wii Parental Control Password Reset Tool",
        devices: "Web",
        description:
            "A tool that generates a Wii unlock code for Wii that has locked parental controls.",
        imageSrc: "/assets/projects/wii parental controls unlock tool.png",
        link: "/web/wii-master-key-generator",
        stack: ['Vite']
    },
    {
        title: "3DS Parental Control Password Reset Tool",
        devices: "Web",
        description:
            "A tool that generates a unlock code for 3DS that has locked parental controls.",
        imageSrc: "/assets/projects/wii parental controls unlock tool.png",
        link: "/web/3ds-master-key-generator",
        stack: ['Vite']
    },
];

export default projects