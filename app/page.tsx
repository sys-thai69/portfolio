import styles from '../app/Home.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>Pheav Chhengthai</h1>
        <p>
          A passionate student with a growth mindset, aiming to become a great AI engineer and help society evolve.
        </p>
      </header>

      <section className={styles.section}>
        <h2>Education</h2>
        <ul>
          <li>2009-2016: Grade 1-6, Pursat Primary School</li>
          <li>2016-2019: Grade 7-9, Pursat Secondary School</li>
          <li>2019-2022: Grade 10-12, E2STEM PreahYukunthor</li>
          <li>2023-Present: Bachelor Degree, Paragon International University; IFL</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Experience & Achievement</h2>
        <ul>
          <li>Leader, SolidEdge Training project</li>
          <li>Led class of 20+ students (soft skills)</li>
          <li>Financial Literacy Program (Singapore Professor)</li>
          <li>SEAGAME 2023 Organizer & Coordinator</li>
          <li>3rd Place ParagonIU Hackathon (Python fishing game)</li>
          <li>Built websites for school, hospital, crime mapping</li>
          <li>IFL poster researcher & presenter</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Technical Skills</h2>
        <ul>
          <li>Python, C++, SQL (Proficient)</li>
          <li>Laravel (Proficient), NextJS, NestJS, ReactJS (Familiar)</li>
          <li>PyTorch, Pandas, NumPy, Matplotlib (Familiar)</li>
          <li>Github, Jupyter Notebook, Docker, SolidEdge</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Core Competencies</h2>
        <ul>
          <li>Analytical Problem-Solving</li>
          <li>Creativity and Innovation</li>
          <li>Team Collaboration & Leadership</li>
          <li>Technical Communication</li>
          <li>Adaptability & Fast Learning</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Interests</h2>
        <ul>
          <li>Playing Chess</li>
          <li>Reading</li>
          <li>Exploring new technologies</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Languages</h2>
        <ul>
          <li>Khmer: Native</li>
          <li>English: C1 (Advanced)</li>
        </ul>
      </section>

      <section className={`${styles.section} ${styles.contact}`}>
        <h2>Contact</h2>
        <ul>
          <li>Phone: +855-XXX-XXX-XXX</li>
          <li>Email: xxxxxxxxxxxxxxx</li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/chhengthai-pheav-39a683255/" target="_blank" rel="noopener noreferrer">chhengthai-pheav</a></li>
        </ul>
      </section>
    </main>
  );
}