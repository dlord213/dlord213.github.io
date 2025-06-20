interface Experience {
    position: string
    period: string
    description: string
    details?: string[]
    skills: string[]
    side: string
    showMore: boolean
}

const experience: Experience[] = [
    {
        position: 'Freelance Developer (Frontend)',
        period: 'March 2023 - May 2023',
        description:
            'Translated Figma prototypes into reusable, responsive React components, ensuring pixel-perfect accuracy and consistent design implementation across the application.',
        details: [
            'Translated Figma prototypes into responsive, reusable React components',
            'Refactored existing components and developed reusable UI elements',
            'Maintained consistency with the established design system across the application',
            'Adapted components for responsiveness across various screen sizes and devices',
        ],
        skills: ['React', 'Figma', 'Tailwind CSS'],
        side: 'start',
        showMore: true,
    },
    {
        position: 'Freelance Developer (Frontend Consultant)',
        period: 'June 2023 - July 2023',
        description:
            'Worked on improving and maintaining a frontend project using Vite, TailwindCSS. Focused on fixing AI-generated code, enhancing code quality, reusability, and HTTP request handling.',
        details: [
            'Assisted in reviewing and fixing AI-generated frontend code',
            'Refactored existing components and developed reusable UI elements',
            'Debugged and corrected HTTP requests implemented with Axios',
            'Improved overall codebase maintainability and structure',
        ],
        skills: ['Vite', 'TailwindCSS'],
        side: 'end',
        showMore: true,
    },
    {
        position: 'Freelance Developer (Full-stack)',
        period: 'July 2024 - November 2024',
        description:
            'Helped with building a full-stack app using Next.js with Prisma. Integrated Gemini AI to generate flashcards, summaries, and quizzes from user-provided content.',
        details: [
            "Created RESTful API routes in Next.js for handling user data and AI requests",
            "Integrated Gemini AI to generate educational flashcards from text input",
            "Integrated Gemini AI to summarize large blocks of user-submitted content",
            "Used Gemini AI to dynamically generate quiz questions for study purposes",
            "Managed database schema and migrations using Prisma",
            "Built reusable React components for displaying flashcards, summaries, and quizzes",
            "Ensured smooth data flow between frontend and backend using API handlers",
            "Tested and debugged AI integration to ensure accurate content generation"
        ],
        skills: ['Next.js', 'Prisma', 'Gemini',],
        side: 'start',
        showMore: true,
    },
];


export default experience