import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tanguy Merrien — AI &amp; Software Engineer</title>
        <meta
          name="description"
          content="Portfolio of Tanguy Merrien — AI & Software Engineer specializing in conversational AI, RAG architectures, and agent-driven systems."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
