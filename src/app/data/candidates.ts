export interface Candidate {
    name: string;
    email: string;
    linkedin: string;
    twitter: string | undefined;
    resume: string;
    website: string;
    bio?: string;
    github?: string;
    headshot?: string;
    cohort: string;
    status: 'open' | 'hired' | 'founded';
    currentCompany?: string;
    companyUrl?: string;
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
        headshot: "https://media.licdn.com/dms/image/v2/D4E03AQG85gIxelBfaA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1680124740365?e=1748476800&v=beta&t=ZfWIQspwlkil87_lrZjOycnWWsKbaKtBiTSg6kGdEEw",
        cohort: "Fa24",
        status: "hired",
        currentCompany: "iCapital"
    },
    {
        name: "Isaac Gemal",
        email: "isaacgemal@gmail.com",
        linkedin: "https://www.linkedin.com/in/isaac-gemal-278191214",
        twitter: "https://x.com/Aizkmusic",
        resume: "https://www.aizk.sh/Isaac's%20Resume.pdf",
        website: "https://aizk.sh",
        bio: "Engineer experienced in dealing with physical and digital infrastructure.",
        headshot: "/images/isaac.png",
        cohort: "Fa24",
        status: "hired",
        currentCompany: "Headstart.nyc"
    },
    {
        name: "Malin Kankanamge",
        email: "malin.kankanamge@gmail.com",
        linkedin: "https://www.linkedin.com/in/mkankanamge/",
        twitter: "https://x.com/mahlenr",
        resume: "https://cv.mahlen.dev/",
        website: "https://mahlen.dev",
        bio: "In a previous life I worked on banking infrastructure at some of Australia's top financial institutions. In 2024, I leaned in to a desire for more creativity in my work and I made the leap to software engineering through NYC's Fractal Tech SWE Accelerator. This was like a religious experience where I fell deeply in love with the process of building software. I built products ranging from AI voice therapists to e-commerce platforms to PDF analysis tools and many many more. I won an AI Agents hackathon and shipped real features for local NYC startups. Now i'm looking to join a brilliant team of engineers and creatives on a mission to build something incredible.",
        headshot: "/images/mahlen.png",
        cohort: "Fa24",
        status: "hired",
        currentCompany: "tmrw"
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
        headshot: "https://media.licdn.com/dms/image/v2/D4E03AQHWbDFeVUCo5w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725224435831?e=1748476800&v=beta&t=NP-GTrk_g-j0RX15fkmiGluv6jH7ofZGf04QVSiNG4I",
        cohort: "Sp25",
        status: "hired",
        currentCompany: "Plastic Labs"
    },
    {
        name: "Ajay Bhargava",
        email: "bhargava.ajay@gmail.com",
        linkedin: "https://www.linkedin.com/in/ajaybhargava/",
        twitter: "https://x.com/0x1F9EB",
        resume: "https://drive.google.com/file/d/1weW7CjPRMMbcMFwMg65yTzZb3s7u_PEY/view?usp=drive_link",
        website: "https://ajay-bhargava.github.io",
        bio: "I'm a self-taught builder who has previously made and shipped drugs that target brain cancers, contributed computer vision tech to the US military, and is now building an AI powered scientific services marketplace to make doing science with others faster and better for all.",
        github: "https://github.com/ajay-bhargava",
        headshot: "https://media.licdn.com/dms/image/v2/C4E03AQHjK0nUgkm_qA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1668045721230?e=1748476800&v=beta&t=lLbXQRo8sc7OKLhmyGmGOt4EFnEtOhect0MqPK7WUWw",
        cohort: "Sp25",
        status: "founded",
        currentCompany: "bynd.bio"
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
        headshot: "/images/alan.jpeg",
        cohort: "Sp25",
        status: "open"
    },
    {
        name: "Eric Wang",
        email: "erwang1151@gmail.com",
        linkedin: "https://www.linkedin.com/in/ericwang20/",
        twitter: "",
        resume: "https://ewang.vercel.app/wang-resume-2025.pdf",
        website: "https://ewang.vercel.app/",
        bio: "Eric is a Design Engineer with an eye for detail and full-stack AI experience. He can do it all -- design, frontend, backend, AI. An obvious choice if you need a smart, capable generalist to improve your product.  -Andrew",
        github: "https://github.com/ewang0",
        headshot: "https://media.licdn.com/dms/image/v2/D4E03AQELavzeGQET1g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698239694877?e=1748476800&v=beta&t=VoEMy_j5fJwFTF2wWqVeII9T4w5OI1_ect0-21xTApE",
        cohort: "Sp25",
        status: "hired",
        currentCompany: "Simple Closure",
        companyUrl: "https://simpleclosure.com"
    },
    {
        name: "Chenshu Zhou",
        email: "zcs0126@gmail.com",
        linkedin: "https://www.linkedin.com/in/chenshu-zhou-988488116/",
        twitter: "https://x.com/chenshuz26",
        resume: "https://chenshuz-resume.vercel.app/",
        website: "https://chenshuz.vercel.app/",
        bio: "I'm Chenshu, a software engineer with 4 years of experience at AWS, where I built scalable backend systems and APIs. I'm looking for a mission driven team to build things with positive social impacts.",
        headshot: "https://media.licdn.com/dms/image/v2/C5603AQHlLZNFSmTrvw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1543434361525?e=1748476800&v=beta&t=dwFUc8PIogfkJLBgpSiEHsAtZ7G38iL_KjD47qN2azw",
        cohort: "Fa24",
        status: "hired",
        currentCompany: "Amazon Web Services"
    },
    {
        name: "Rashik Shahjahan",
        email: "rashikshahjahan@protonmail.com",
        linkedin: "https://linkedin.com/in/rashikshahjahan",
        twitter: "https://x.com/RashikShahjahan",
        resume: "https://www.rashik.sh/resumeRashikShahjahan.pdf",
        website: "https://www.rashik.sh/",
        headshot: "https://avatars.githubusercontent.com/u/20547252?v=4",
        bio: "I am a software engineer with expertise in full-stack development, distributed systems, and AI. I co-invented a patent-pending system to process large medical corpora and led the development and deployment of a metrics monitoring system across four major clients, including Mayo Clinic and Duke Hospital.",
        cohort: "Fa24",
        status: "hired",
        currentCompany: "Gridify AI"
    },
    {
        name: "Faisal Owimer",
        email: "faisal@owimer.co",
        linkedin: "https://www.linkedin.com/in/faisal-owimer/",
        twitter: "https://x.com/faisalowimer",
        resume: "https://resume.owimer.co",
        website: "https://www.owimer.co/",
        bio: "As the first employee of a fintech startup, I drove critical growth by raising $2M in funding, launching the product, and scaling to $150M+ in assets under management. As a software engineer, I developed full-stack applications using React, TypeScript, Node.js, and modern data technologies.",
        cohort: "Fa24",
        status: "hired",
        currentCompany: "Goodie AI",
        headshot: "https://media.licdn.com/dms/image/v2/D4E03AQGQi9TX-x1_0w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718401347792?e=1749686400&v=beta&t=GoxUcS_hKNc4fcpVTqxDQ44YrNzP9_bJN8CcJ-WIXvA"
    },
    {
        name: "Dorothy Ren",
        email: "dorothy.x.ren@gmail.com",
        linkedin: "https://www.linkedin.com/in/dorothyxren/",
        twitter: "https://x.com/dorothyxren",
        resume: "",
        website: "https://x.com/dorothyxren",
        github: "https://github.com/dxren",
        cohort: "Su24",
        status: "hired",
        currentCompany: "Ellis",
        headshot: "/images/dorothy.jpg"
    },
    {
        name: "Daniel Gavidia",
        email: "dgavidia1@gmail.com",
        linkedin: "https://www.linkedin.com/in/danielgavidia1/",
        twitter: "https://x.com/dgavidia1",
        resume: "https://danielgavidia.vercel.app/resume",
        website: "https://danielgavidia.vercel.app/",
        github: "https://github.com/danielgavidia",
        cohort: "Fa24",
        status: "hired",
        currentCompany: "ESAI",
        headshot: "/images/daniel.jpg"
    },
    {
        name: "Patrick Astarita",
        email: "PATRICKASTARITA@GMAIL.COM",
        linkedin: "https://www.linkedin.com/in/patrickastarita/",
        twitter: "https://x.com/pastarita27",
        resume: "https://www.patrickastarita.com/assets/patrick_astarita_resume_2025.pdf",
        website: "https://www.patrickastarita.com/",
        bio: "I am Patrick, I'm someone who is humbly curious about the world and I often form fast opinions in order to pursue coherence and structure memories. I work on sustainable industrialization and am interested in skiing, golf, both the study & improvement of living systems.",
        github: "https://www.github.com/pastarita",
        cohort: "Fa24",
        status: "hired",
        currentCompany: "Recharged.com",
        headshot: "/images/patrick.jpg"
    },
    {
        name: "Pranav Patil",
        email: "ompranav97@gmail.com",
        linkedin: "https://linkedin.com/in/pranavrpatil",
        twitter: "https://x.com/pranavsf",
        resume: "N/A",
        website: "https://breakfastmaxi.com",
        github: "https://github.com/pranavpatilsce",
        cohort: "Su24",
        status: "founded",
        currentCompany: "lsd.so",
        headshot: "/images/pranav.jpg"
    },
    {
        name: "Norman Qian",
        email: "normanqian@gmail.com",
        linkedin: "https://linkedin.com/in/norman-qian",
        twitter: "https://x.com/NormanQian",
        resume: "https://normanqian.com/resume",
        website: "https://normanqian.com",
        github: "https://github.com/elizasviel",
        cohort: "Su24",
        status: "hired",
        currentCompany: "Alpha School",
        headshot: "/images/norman.jpg"
    },
    {
        name: "Sarah Bicknell",
        email: "sarahebicknell@gmail.com",
        linkedin: "N/A",
        twitter: "https://x.com/hyperdiscogirl",
        resume: "N/a",
        website: "https://hyperdis.co",
        github: "https://github.com/sarelbic",
        cohort: "Su24",
        status: "hired",
        currentCompany: "Synthesis Tutor",
        headshot: "/images/sarah.jpg"
    },
    {
        name: "Lúí Smyth",
        email: "luismyth@gmail.com",
        linkedin: "https://www.linkedin.com/in/luismyth",
        twitter: "https://x.com/yablochko",
        resume: "https://lui.ie/projects",
        website: "https://lui.ie",
        bio: "Dublin-based AI product leader turned builder",
        github: "https://github.com/yablochko8",
        cohort: "Su24",
        status: "founded",
        currentCompany: "https://inni.bio",
        headshot: "/images/lui.jpg"
    },
    {
        name: "Bruno Lloret",
        email: "caballoret@gmail.com",
        linkedin: "https://www.linkedin.com/in/bruno-lloret-b8793b289",
        twitter: "https://x.com/brunolloret",
        resume: "various CVs depending on the client",
        website: "https://brunolloret.co",
        bio: "Creator with 10+ of multidisciplinary experience spanning fiction writing, research, painting, and education.",
        github: "https://github.com/brunoLloret",
        cohort: "Su24",
        status: "founded",
        currentCompany: "Own creative agency",
        headshot: "/images/bruno.jpg"
    },
    {
        name: "Brian Smiley",
        email: "briantsmiley42@gmail.com",
        linkedin: "https://www.linkedin.com/in/brian-smiley-1289a6121/",
        twitter: "https://x.com/BinarySmile",
        resume: "https://binarysmile.com/resume.pdf",
        website: "https://binarysmile.com",
        github: "https://github.com/briansmiley",
        bio: "I'm a self-taught software engineer and former scientist who loved to tinker with games in my free time. Now I'm building the frontier of AI systems.",
        cohort: "Su24",
        status: "hired",
        currentCompany: "TypeSafe AI",
        headshot: "https://media.licdn.com/dms/image/v2/D4E03AQHeODqsgx9jZA/profile-displayphoto-shrink_400_400/B4EZZFxwamGYAw-/0/1744927393929?e=1750291200&v=beta&t=LYbVz0gOayodhuERFJ3scGNYEYc5UcQrJE5UkWFSQRE"
    },
    {
        name: "Parth Agrawal",
        email: "pvagrawal0@gmail.com",
        linkedin: "https://www.linkedin.com/in/productparth/",
        twitter: "https://x.com/mr_samosaman/",
        resume: "https://parthagrawal.com/resume",
        website: "https://parthagrawal.com",
        bio: "Parth is a cyborg engineer interested in creating new forms and substrates for computing. He currently does interface research and product engineering for AI startups in NYC.",
        github: "https://github.com/parth-agrawal",
        cohort: "Su24",
        status: "hired",
        currentCompany: "Consulting: Sandbar, ESAI, HDR",
        headshot: "https://media.licdn.com/dms/image/v2/D4E03AQF97cnMl7Hw4A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725590217970?e=1750291200&v=beta&t=GGfN5A2oWny7DdTj7YrphEqyw1HIzsJbpCX4czKvVhA"
    },
    {
        name: "Aaditya Desai",
        email: "aadityadesai09@gmail.com",
        linkedin: "https://www.linkedin.com/in/aaditya-desai-2231851b6/",
        twitter: "https://x.com/AadityaDesai9",
        resume: "https://aadityadesai-resume.vercel.app/",
        website: "https://aadityadesai.vercel.app/",
        bio: "I’m Aaditya Desai, a young software developer and student at Cypress College seeking an exceptional team. I possess a wide skill set, am easy to work with, and work hard to get what I want. Currently an intern at Frame Media, I'm looking for a software engineering internship where I can help startups ship faster. My long-term goal is to work in defense tech companies like Anduril, developing weapons for the U.S. military.",
        github: "https://github.com/adesai47",
        headshot: "https://media.licdn.com/dms/image/v2/D5603AQF6sCVvAUbBkA/profile-displayphoto-shrink_400_400/B56ZUiLB6iGoAg-/0/1740035073216?e=1750896000&v=beta&t=jx0cQ03pB0hVHJPb2FlnLq4Ys3S2iQFf5m4jXLIYRdg",
        cohort: "Fa24",
        status: "open",
        currentCompany: "Frame Media"
    },
];

// Sort candidates by status (open first, then hired/founded)
export const sortedCandidates = [...candidates].sort((a, b) => {
    if (a.status === 'open' && b.status !== 'open') return -1;
    if (a.status !== 'open' && b.status === 'open') return 1;
    return 0;
});

// Filter recent candidates (Su25, Sp25, or Fa25)
export const recentCandidates = sortedCandidates.filter(candidate => {
    const recentCohorts = ['Su25', 'Sp25', 'Fa24'];
    return recentCohorts.includes(candidate.cohort);
});

// Filter past candidates (all other cohorts)
export const pastCandidates = sortedCandidates.filter(candidate => {
    const recentCohorts = ['Su25', 'Sp25', 'Fa24'];
    return !recentCohorts.includes(candidate.cohort);
});