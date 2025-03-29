'use client';
import Link from 'next/link';
import Image from 'next/image';
import { candidates } from '../data/candidates';
import { Github, Linkedin, Twitter, Globe, FileText, Mail } from 'lucide-react';
import EmailSubscribe from './EmailSubscribe';

function AsciiMode() {
    return (
        <div className="bg-white text-black font-mono p-8">
            {/* Arcade Mode toggle button */}
            <Link
                href="/arcade"
                className="fixed bottom-4 right-4 z-40 px-4 py-2 bg-retro-purple border-2 border-hot-pink text-white font-pixel text-shadow-neon hover:scale-105 transition-transform w-64 text-center"
            >
                arcade mode
            </Link>

            {/* Mobile Title (visible only on small screens) */}
            <h1 className="text-center text-3xl font-bold mb-6 md:hidden">
                Fractal Tech Talent
            </h1>

            {/* ASCII Art Title (hidden on mobile) */}
            <pre className="text-center text-xs sm:text-sm md:text-base mb-10 whitespace-pre-wrap overflow-auto hidden md:block">
                {`
  ______              _        _   _______        _     
 |  ____|            | |      | | |__   __|      | |    
 | |__ _ __ __ _  ___| |_ __ _| |    | | ___  ___| |__  
 |  __| '__/ _' |/ __| __/ _' | |    | |/ _ \\/ __| '_ \\ 
 | |  | | | (_| | (__| || (_| | |    | |  __/ (__| | | |
 |_|  |_|  \\__,_|\\___|\\__\\__,_|_|    |_|\\___|\\___|_| |_|
                                                         
           NYC Talent                                                
`}
            </pre>

            {/* Candidates List */}
            <div className="max-w-4xl mx-auto">
                {/* Fractal Info */}
                <p className="text-center mb-8 italic">
                    <a href="https://fractalbootcamp.com" target="_blank" rel="noopener noreferrer" className="underline">
                        Fractal Tech
                    </a>{" "}
                    is NYC's new training program for AI engineers. Our placement rate is 100%. First cohort alumni have raised money from South Park Commons and work at
                    startups like Alpha School, Synthesis, HDR, and Ellis. Email andrew@fractalbootcamp.com to get in touch.
                </p>
                {/* Email Subscription Form */}
                <EmailSubscribe mode="ascii" />
                {candidates.map((candidate, index) => (
                    <div key={candidate.name} className="mb-10 pb-6 border-b border-gray-300">
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Candidate Photo - Left Side */}
                            <div className="w-1/3 md:w-1/4 mx-auto md:mx-0">
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
                                        <span className="flex items-center gap-2">
                                            <Mail className="w-5 h-5" />
                                            <a href={`mailto:${candidate.email}`} className="underline">{candidate.email}</a>
                                        </span>
                                        <p className="flex items-center gap-2">
                                            <Globe className="w-5 h-5" />
                                            <a href={candidate.website} target="_blank" rel="noopener noreferrer" className="underline">Website</a>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <FileText className="w-5 h-5" />
                                            <a href={candidate.resume} target="_blank" rel="noopener noreferrer" className="underline">Resume</a>
                                        </p>
                                    </div>
                                    <div>
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
                    </div>
                ))}
            </div>

            {/* New ASCII NYC Skyline */}
            <Image
                src="/img/bghd_nyc.png"
                alt="NYC Skyline"
                width={500}
                height={200}
                className="w-full max-w-md mx-auto mt-10 rounded-lg shadow-lg"
            />
        </div>
    );
}

export default AsciiMode; 