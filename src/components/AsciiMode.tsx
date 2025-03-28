import { Link } from 'react-router-dom';
import { candidates } from '../data/candidates';
import hdbitsy from '../img/bghd_nyc.png'
import { Github, Linkedin, Twitter, Globe, FileText, Mail, Phone } from 'lucide-react';

function AsciiMode() {
    return (
        <div className="bg-white text-black font-mono p-8">
            {/* Arcade Mode toggle button */}
            <Link
                to="/arcade"
                className="fixed bottom-4 right-4 z-40 px-4 py-2 bg-retro-purple border-2 border-hot-pink text-white font-pixel text-shadow-neon hover:scale-105 transition-transform w-64 text-center"
            >
                arcade mode
            </Link>

            {/* ASCII Art Title */}
            <pre className="text-center text-xs sm:text-sm md:text-base mb-10 whitespace-pre-wrap overflow-auto">
                {`
  ______              _        _   _______        _     
 |  ____|            | |      | | |__   __|      | |    
 | |__ _ __ __ _  ___| |_ __ _| |    | | ___  ___| |__  
 |  __| '__/ _' |/ __| __/ _' | |    | |/ _ \\/ __| '_ \\ 
 | |  | | | (_| | (__| || (_| | |    | |  __/ (__| | | |
 |_|  |_|  \\__,_|\\___|\\__\\__,_|_|    |_|\\___|\\___|_| |_|
                                                         
           NYC Alumni Roster                                                
`}
            </pre>


            {/* Candidates List */}
            <div className="max-w-4xl mx-auto">
                {/* Fractal Info */}
                <p className="text-center mb-8 italic">
                    <a href="https://fractalbootcamp.com" target="_blank" rel="noopener noreferrer" className="underline">
                        Fractal Tech
                    </a>{" "}
                    is NYC's new training program for AI engineers. Our placement rate is 100%. Alumni from our first cohort have raised money from South Park Commons and work at
                    startups like Alpha School, Synthesis, HDR, Ellis, and Drumkit.
                </p>
                {candidates.map((candidate, index) => (
                    <div key={candidate.name} className="mb-10 pb-6 border-b border-gray-300">
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Candidate Photo - Left Side */}
                            <div className="md:w-1/4">
                                {candidate.headshot ? (
                                    <img
                                        src={candidate.headshot}
                                        alt={`${candidate.name}`}
                                        className="w-full aspect-square object-cover border-2 border-black"
                                    />
                                ) : (
                                    <div className="w-full aspect-square border-2 border-black flex items-center justify-center bg-gray-100">
                                        <span className="text-gray-400">No photo</span>
                                    </div>
                                )}
                            </div>

                            {/* Candidate Info - Right Side */}
                            <div className="md:w-3/4">
                                <h2 className="text-xl font-bold mb-2">{candidate.name}</h2>

                                {candidate.bio && (
                                    <p className="mb-4">{candidate.bio}</p>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                                    <div>
                                        <p className="flex items-center gap-2">
                                            <Mail className="w-5 h-5" />
                                            <a href={`mailto:${candidate.email}`} className="underline">{candidate.email}</a>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <Phone className="w-5 h-5" />
                                            <a href={`tel:${candidate.phone}`} className="underline">{candidate.phone}</a>
                                        </p>
                                    </div>
                                    <div>
                                        <p className="flex items-center gap-2">
                                            <Globe className="w-5 h-5" />
                                            <a href={candidate.website} target="_blank" rel="noopener noreferrer" className="underline">Website</a>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <FileText className="w-5 h-5" />
                                            <a href={candidate.resume} target="_blank" rel="noopener noreferrer" className="underline">Resume</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <a href={candidate.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 underline">
                                        <Linkedin className="w-5 h-5" /> LinkedIn
                                    </a>
                                    {candidate.twitter && candidate.twitter !== "none" && (
                                        <a href={candidate.twitter.startsWith('@') ? `https://x.com/${candidate.twitter.slice(1)}` : candidate.twitter}
                                            target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 underline">
                                            <Twitter className="w-5 h-5" /> Twitter
                                        </a>
                                    )}
                                    {candidate.github && (
                                        <a href={candidate.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 underline">
                                            <Github className="w-5 h-5" /> GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* New ASCII NYC Skyline */}
            <img
                src={hdbitsy}
                alt="NYC Skyline"
                className="w-full max-w-md mx-auto mt-10 rounded-lg shadow-lg"
            />
        </div>
    );
}

export default AsciiMode; 