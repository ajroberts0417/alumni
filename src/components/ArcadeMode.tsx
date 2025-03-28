import { Github, Linkedin, Twitter, Globe, FileText, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackgroundTile from './BackgroundTile';
import { candidates } from '../data/candidates';

function ArcadeMode() {
    const colorScheme = [
        'bg-hot-pink', 'bg-neon-green', 'bg-cyber-blue',
        'bg-bright-orange', 'bg-electric-yellow', 'bg-cyber-blue', 'bg-retro-purple'
    ];

    return (
        <BackgroundTile tileSize={500} opacity={0.95}>
            <div className="py-12 px-4 sm:px-6 lg:px-8">
                {/* Mode toggle button */}
                <Link
                    to="/"
                    className="fixed bottom-4 right-4 z-40 px-4 py-2 bg-white border border-black text-black hover:bg-gray-100 w-64 text-center transition-colors"
                >
                    ascii mode
                </Link>

                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="font-pixel text-white mb-6 title-glitch">
                            FRACTAL ARCADE MODE!!!
                        </h1>
                        <h2 className="text-white font-pixel text-lg mb-8 text-shadow-neon">
                            hire my students :)
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {candidates.map((candidate) => (
                            <div
                                key={candidate.name}
                                className="retro-card p-6 
                         transform transition-all duration-300 hover:scale-105 
                         hover:shadow-[0_0_25px_rgba(0,255,255,0.7)] relative"
                            >
                                {/* Circular headshot in top right corner */}
                                {candidate.headshot && (
                                    <div className="absolute top-4 right-4 w-16 h-16 rounded-full overflow-hidden border-2 border-cyber-blue shadow-glow headshot-container">
                                        <img
                                            src={candidate.headshot}
                                            alt={`${candidate.name}'s headshot`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}

                                <h2 className="text-2xl font-bold text-neon-green mb-4 font-pixel text-lg text-shadow-glow pr-20">
                                    {candidate.name}
                                </h2>

                                <div className="flex flex-wrap gap-5 mb-6">
                                    <a href={candidate.linkedin} target="_blank" rel="noopener noreferrer"
                                        className="text-cyber-blue hover:text-white transition-colors">
                                        <Linkedin className="w-6 h-6 social-icon" />
                                    </a>
                                    {candidate.twitter && candidate.twitter !== "none" && (
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

export default ArcadeMode; 