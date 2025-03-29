import AsciiMode from './components/AsciiMode'; // Updated path

// Add caching directives for Next.js 15
export const dynamic = 'force-static'; // Static generation at build time
export const revalidate = 3600; // Revalidate every hour (3600 seconds)

export default function Home() {
  return (
    <AsciiMode />
  );
}
