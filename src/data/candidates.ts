export interface Candidate {
    name: string;
    email: string;
    linkedin: string;
    twitter: string | undefined;
    resume: string;
    website: string;
    bio: string;
    github?: string;
    headshot?: string;
}

export const candidates: Candidate[] = [
    {
        name: "Jacob Waldor",
        email: "jacobwaldor@gmail.com",
        linkedin: "http://linkedin.com/in/jacob-waldor",
        twitter: "https://x.com/jacobwaldor",
        resume: "https://www.jacobwaldor.com/resume",
        website: "https://www.jacobwaldor.com",
        bio: "Jacob is a bright, young software engineer, mathematician, and data scientist. He wants to have a serious impact at a software or AI company with an exceptional team and has been rigorously studying software and AI engineering for the last several months.",
        headshot: "https://media.licdn.com/dms/image/v2/D4E03AQG85gIxelBfaA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1680124740365?e=1748476800&v=beta&t=ZfWIQspwlkil87_lrZjOycnWWsKbaKtBiTSg6kGdEEw"
    },
    {
        name: "Isaac Gemal",
        email: "isaacgemal@gmail.com",
        linkedin: "https://www.linkedin.com/in/isaac-gemal-278191214",
        twitter: "https://x.com/Aizkmusic",
        resume: "https://www.aizk.sh/Isaac's%20Resume.pdf",
        website: "Aizk.sh",
        bio: "Engineer experienced in dealing with physical and digital infrastructure.",
        headshot: "/images/isaac.png"
    },
    {
        name: "Malin Kankanamge",
        email: "malin.kankanamge@gmail.com",
        linkedin: "https://www.linkedin.com/in/mkankanamge/",
        twitter: "@mahlenr",
        resume: "https://cv.mahlen.dev/",
        website: "https://mahlen.dev",
        bio: "In a previous life I worked on banking infrastructure at some of Australia's top financial institutions. In 2024, I leaned in to a desire for more creativity in my work and I made the leap to software engineering through NYC's Fractal Tech SWE Accelerator. This was like a religious experience where I fell deeply in love with the process of building software. I built products ranging from AI voice therapists to e-commerce platforms to PDF analysis tools and many many more. I won an AI Agents hackathon and shipped real features for local NYC startups. Now i'm looking to join a brilliant team of engineers and creatives on a mission to build something incredible.",
        headshot: "/images/mahlen.png"
    },
    {
        name: "Eri Barrett",
        email: "eri@erosika.digital",
        linkedin: "https://www.linkedin.com/in/eri-barrett/",
        twitter: "https://x.com/3rosika",
        resume: "https://eri-dev.vercel.app/cv",
        website: "https://eri-dev.vercel.app/",
        bio: "Hey I am Eri and I am a self-taught dev with a background in computer music. I love to build beautiful software for the world to enjoy. As a forever learner who's extremely dedicated with clarity of focus, I love to dive deep into problems & ship swiftly. My mission in tech is to architect transformative digital landscapes ––creating systems that reshape how we interact with technology, remaining accessible to all.",
        github: "https://github.com/erosika",
        headshot: "https://media.licdn.com/dms/image/v2/D4E03AQHWbDFeVUCo5w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725224435831?e=1748476800&v=beta&t=NP-GTrk_g-j0RX15fkmiGluv6jH7ofZGf04QVSiNG4I"
    },
    {
        name: "Ajay Bhargava",
        email: "bhargava.ajay@gmail.com",
        linkedin: "https://www.linkedin.com/in/ajaybhargava/",
        twitter: "https://x.com/ajay_bhargava",
        resume: "https://drive.google.com/file/d/1weW7CjPRMMbcMFwMg65yTzZb3s7u_PEY/view?usp=drive_link",
        website: "https://ajay-bhargava.github.io",
        bio: "",
        github: "https://github.com/ajay-bhargava",
        headshot: "https://media.licdn.com/dms/image/v2/C4E03AQHjK0nUgkm_qA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1668045721230?e=1748476800&v=beta&t=lLbXQRo8sc7OKLhmyGmGOt4EFnEtOhect0MqPK7WUWw",
    },
    {
        name: "Alan Mark Garber",
        email: "a8garber@yahoo.com",
        linkedin: "https://www.linkedin.com/in/alan-garber-659063112/",
        twitter: "https://x.com/AGLabBear/",
        resume: "https://alanmgarber.com/Resume/",
        website: "https://alanmgarber.com/",
        bio: "After graduating law school in 2022, I worked as a frontend engineer in Cleveland, OH, for two years, specializing in React and TypeScript. In 2025, I moved to New York and enrolled in the Fractal Bootcamp to become a full-stack specialist. I'm always excited to learn new things! Many of my personal projects over the past year have focused on creating immersive experiences with LLMs so users can get more out of the websites they are visiting.",
        github: "https://github.com/OldEphraim",
        headshot: "/images/alan.jpeg"
    },
    {
        name: "Eric Wang",
        email: "erwang1151@gmail.com",
        linkedin: "https://www.linkedin.com/in/ericwang20/",
        twitter: "",
        resume: "https://ewang.vercel.app/wang-resume-2025.pdf",
        website: "https://ewang.vercel.app/",
        bio: "",
        github: "https://github.com/ewang0",
        headshot: "https://media.licdn.com/dms/image/v2/D4E03AQELavzeGQET1g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698239694877?e=1748476800&v=beta&t=VoEMy_j5fJwFTF2wWqVeII9T4w5OI1_ect0-21xTApE"
    },
    {
        name: "Chenshu Zhou",
        email: "zcs0126@gmail.com",
        linkedin: "https://www.linkedin.com/in/chenshu-zhou-988488116/",
        twitter: "@chenshuz26",
        resume: "https://chenshuz-resume.vercel.app/",
        website: "https://chenshuz.vercel.app/",
        bio: "I'm Chenshu, a software engineer with 4 years of experience at AWS, where I built scalable backend systems and APIs. I'm looking for a mission driven team to build things with positive social impacts.",
        headshot: "https://media.licdn.com/dms/image/v2/C5603AQHlLZNFSmTrvw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1543434361525?e=1748476800&v=beta&t=dwFUc8PIogfkJLBgpSiEHsAtZ7G38iL_KjD47qN2azw",
    }
]; 