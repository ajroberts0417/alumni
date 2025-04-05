import AsciiMode from './components/AsciiMode'; // Updated path
import { Metadata } from 'next';

// Define page-specific metadata
export const metadata: Metadata = {
  title: 'Fractal Tech Alumni Roster - Home',
  description: "Fractal Tech Alumni Roster - hire talented AI engineers from Fractal's NYC Tech accelerator.",
};

// Add caching directives for Next.js 15
export const dynamic = 'force-static'; // Static generation at build time
export const revalidate = 3600; // Revalidate every hour (3600 seconds)

export default function Home() {
  return (
    <AsciiMode />
  );
}
