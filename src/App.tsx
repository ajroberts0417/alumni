import { Github, Linkedin, Twitter, Globe, FileText, Mail, Phone } from 'lucide-react';
import BackgroundTile from './components/BackgroundTile';

interface Candidate {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  twitter: string;
  resume: string;
  website: string;
  bio: string;
  github?: string;
}

const candidates: Candidate[] = [
  {
    name: "Jacob Waldor",
    email: "jacobwaldor@gmail.com",
    phone: "9739517500",
    linkedin: "http://linkedin.com/in/jacob-waldor",
    twitter: "https://x.com/jacobwaldor",
    resume: "https://www.jacobwaldor.com/resume",
    website: "https://www.jacobwaldor.com",
    bio: "Jacob is a bright, young software engineer, mathematician, and data scientist. He wants to have a serious impact at a software or AI company with an exceptional team and has been rigorously studying software and AI engineering for the last several months."
  },
  {
    name: "Isaac Gemal",
    email: "isaacgemal@gmail.com",
    phone: "7327594245",
    linkedin: "https://www.linkedin.com/in/isaac-gemal-278191214",
    twitter: "https://x.com/Aizkmusic",
    resume: "https://www.aizk.sh/Isaac's%20Resume.pdf",
    website: "Aizk.sh",
    bio: "Engineer experienced in dealing with physical and digital infrastructure. (At least with regards to the civil stuff)"
  },
  {
    name: "Malin Kankanamge",
    email: "malin.kankanamge@gmail.com",
    phone: "+61451667601",
    linkedin: "https://www.linkedin.com/in/mkankanamge/",
    twitter: "@mahlenr",
    resume: "https://cv.mahlen.dev/",
    website: "mahlen.dev",
    bio: "In a previous life I worked on banking infrastructure at some of Australia's top financial institutions. In 2024, I leaned in to a desire for more creativity in my work and I made the leap to software engineering through NYC's Fractal Tech SWE Accelerator. This was like a religious experience where I fell deeply in love with the process of building software. I built products ranging from AI voice therapists to e-commerce platforms to PDF analysis tools and many many more. I won an AI Agents hackathon and shipped real features for local NYC startups. Now i'm looking to join a brilliant team of engineers and creatives on a mission to build something incredible."
  },
  {
    name: "Eri Barrett",
    email: "eri@erosika.digital",
    phone: "+17325673556",
    linkedin: "https://www.linkedin.com/in/eri-barrett/",
    twitter: "https://x.com/3rosika",
    resume: "https://eri-dev.vercel.app/cv",
    website: "https://eri-dev.vercel.app/",
    bio: "Hey I am Eri and I am a self-taught dev with a background in computer music. I love to build beautiful software for the world to enjoy. As a forever learner who's extremely dedicated with clarity of focus, I love to dive deep into problems & ship swiftly. My mission in tech is to architect transformative digital landscapes ––creating systems that reshape how we interact with technology, remaining accessible to all.",
    github: "https://github.com/erosika"
  },
  {
    name: "Ajay Bhargava",
    email: "bhargava.ajay@gmail.com",
    phone: "908-636-4149",
    linkedin: "https://www.linkedin.com/in/ajaybhargava/",
    twitter: "https://x.com/ajay_bhargava",
    resume: "https://drive.google.com/file/d/1weW7CjPRMMbcMFwMg65yTzZb3s7u_PEY/view?usp=drive_link",
    website: "ajay-bhargava.github.io",
    bio: "",
    github: "https://github.com/ajay-bhargava"
  },
  {
    name: "Alan Mark Garber",
    email: "a8garber@yahoo.com",
    phone: "4405239475",
    linkedin: "https://www.linkedin.com/in/alan-garber-659063112/",
    twitter: "https://x.com/AGLabBear/",
    resume: "https://alanmgarber.com/Resume/",
    website: "https://alanmgarber.com/",
    bio: "After graduating law school in 2022, I worked as a frontend engineer in Cleveland, OH, for two years, specializing in React and TypeScript. In 2025, I moved to New York and enrolled in the Fractal Bootcamp to become a full-stack specialist. I'm always excited to learn new things! Many of my personal projects over the past year have focused on creating immersive experiences with LLMs so users can get more out of the websites they are visiting.",
    github: "https://github.com/OldEphraim"
  },
  {
    name: "Eric Wang",
    email: "erwang1151@gmail.com",
    phone: "6146203579",
    linkedin: "https://www.linkedin.com/in/ericwang20/",
    twitter: "none",
    resume: "https://ewang.vercel.app/wang-resume-2025.pdf",
    website: "https://ewang.vercel.app/",
    bio: "",
    github: "https://github.com/ewang0/racquet-club-receptionist"
  },
  {
    name: "Chenshu Zhou",
    email: "zcs0126@gmail.com",
    phone: "519-7871-7760",
    linkedin: "https://www.linkedin.com/in/chenshu-zhou-988488116/",
    twitter: "@chenshuz26",
    resume: "https://chenshuz-resume.vercel.app/",
    website: "https://chenshuz.vercel.app/",
    bio: "I'm Chenshu, a software engineer with 4 years of experience at AWS, where I built scalable backend systems and APIs. I'm looking for a mission driven team to build things with positive social impacts."
  }
];

function App() {
  const colorScheme = [
    'bg-hot-pink', 'bg-neon-green', 'bg-cyber-blue',
    'bg-bright-orange', 'bg-electric-yellow', 'bg-cyber-blue', 'bg-retro-purple'
  ];

  return (
    <BackgroundTile tileSize={500} opacity={0.95}>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-pixel text-white mb-6 title-glitch">
              FRACTAL TECH
            </h1>
            <h2 className="text-cyber-blue font-pixel text-lg mb-8 text-shadow-neon">
              111 Conselyea Street
            </h2>
            <div className="flex justify-center gap-3 mb-6">
              {['F', 'R', 'A', 'C', 'T', 'A', 'L'].map((letter, index) => (
                <span
                  key={index}
                  className={`logo-circle ${colorScheme[index % colorScheme.length]}`}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {candidates.map((candidate) => (
              <div
                key={candidate.name}
                className="retro-card p-6 
                         transform transition-all duration-300 hover:scale-105 
                         hover:shadow-[0_0_25px_rgba(0,255,255,0.7)] relative"
              >
                <h2 className="text-2xl font-bold text-neon-green mb-4 font-pixel text-lg text-shadow-glow">
                  {candidate.name}
                </h2>

                <div className="flex flex-wrap gap-5 mb-6">
                  <a href={candidate.linkedin} target="_blank" rel="noopener noreferrer"
                    className="text-cyber-blue hover:text-white transition-colors">
                    <Linkedin className="w-6 h-6 social-icon" />
                  </a>
                  {candidate.twitter !== "none" && (
                    <a href={candidate.twitter.startsWith('@') ? `https://x.com/${candidate.twitter.slice(1)}` : candidate.twitter}
                      target="_blank" rel="noopener noreferrer"
                      className="text-hot-pink hover:text-white transition-colors">
                      <Twitter className="w-6 h-6 social-icon" />
                    </a>
                  )}
                  {candidate.github && (
                    <a href={candidate.github} target="_blank" rel="noopener noreferrer"
                      className="text-electric-yellow hover:text-white transition-colors">
                      <Github className="w-6 h-6 social-icon" />
                    </a>
                  )}
                  <a href={candidate.website} target="_blank" rel="noopener noreferrer"
                    className="text-neon-green hover:text-white transition-colors">
                    <Globe className="w-6 h-6 social-icon" />
                  </a>
                  <a href={candidate.resume} target="_blank" rel="noopener noreferrer"
                    className="text-bright-orange hover:text-white transition-colors">
                    <FileText className="w-6 h-6 social-icon" />
                  </a>
                </div>

                <p className="text-white mb-6 line-clamp-4 font-mono text-sm leading-relaxed">
                  {candidate.bio || "An ambitious software engineer looking for their next opportunity."}
                </p>

                <div className="flex flex-col gap-3 text-sm text-white font-mono">
                  <a href={`mailto:${candidate.email}`}
                    className="flex items-center gap-2 hover:text-neon-green transition-colors group">
                    <Mail className="w-5 h-5 group-hover:animate-pulse social-icon" />
                    <span className="text-shadow-glow">{candidate.email}</span>
                  </a>
                  <a href={`tel:${candidate.phone}`}
                    className="flex items-center gap-2 hover:text-neon-green transition-colors group">
                    <Phone className="w-5 h-5 group-hover:animate-pulse social-icon" />
                    <span className="text-shadow-glow">{candidate.phone}</span>
                  </a>
                </div>

                {/* Scanline effect decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-hot-pink via-cyber-blue to-neon-green opacity-70"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BackgroundTile>
  );
}

export default App;