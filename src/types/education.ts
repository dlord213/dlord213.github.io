interface Education {
    degree: string
    school: string
    date: string
    imageSrc: string
}

const education: Education[] = [
    {
        degree: "Bachelor of Science in Information Technology",
        school: "University of Science and Technology of Southern Philippines",
        date: "August 2022 - Present",
        imageSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/University_of_Science_and_Technology_of_Southern_Philippines.png/250px-University_of_Science_and_Technology_of_Southern_Philippines.png'
    },
    {
        degree: "TVL - ICT",
        school: "Liceo de Cagayan University - Main Campus",
        date: "2020 - 2022",
        imageSrc: 'https://upload.wikimedia.org/wikipedia/en/1/18/Ldcu_seal.png'
    }
]

export default education