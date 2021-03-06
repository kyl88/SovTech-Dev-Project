import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
     
      
      <main className={styles.main}>
  
     
        <h1 className={styles.title}>
         Graduate Programme <a href=" ">SOVTECH Industries</a>
        </h1>
        <Image src="/cover-photo.jpg" alt="photo" width={100} height={100} />
        <p className={styles.description}>
          Kyle Padayachee Career Highlights{' '}
          <code className={styles.code}></code>
        
        </p>

        <div className={styles.grid}>
          <a href=" https://www.linkedin.com/in/kyle-padayachee-09a255191/" className={styles.card}>
            <h2>Profile ::: &rarr;</h2>
            <p>I am a driven South African Indian professional with experience in the Manufacturing and 
               Business fields and keen interest in Software Development. I am extremely hardworking, 
               motivated, organised and dependable. I wish to expand my career by developing new skills 
               as well as contributing ideas to potential employers. I am a strong believer in teamwork, have 
               a passion for quality, solid planning skills and strong analytical abilities I am committed to 
               continuous improvement and am always willing to learn and grow.</p>
          </a>

          <a href="https://bitbucket.org/dashboard/repositories" className={styles.card}>
            <h2>Projects ::: &rarr;</h2>
            <p>
            March 2022: API testing with Postman API - Research project::</p>
              
            <p>February 2022: Java integration Selenium - dependencies and TestNG plugins::</p>

            <p>February 2022: Project: Stored functions in SQL-MySQL Workbench</p>
            
            <p>February 2022: Database triggers - MySQL workbench</p>

            <p>February 2022: Data mapping testing- front-end operations - research project</p>

            <p> October 2021: Design an On-line Curriculum Vitae using HTML and CSS </p>

            <p>June 2021: Created a Simple Rest Application using SpringBoot with Intelli-J.</p>

            <p>2019: Developed a simple Payroll System using C++ Programming Language.</p>

            <p>2019: Developed a Roll-A-Ball Project- Unity Gaming Software.</p>

           <p> 2008: Third Year Project  DS3  Management Information Systems  East Coast News 
            Agency.</p>


          </a>

          <a
            href="https://www.sovtech.co.za/sovtech-launches-graduate-program/"
            className={styles.card}
          >
             
             <Image src="/SovTech-Grad.png" alt="photo" width={750} height={500} />
            <h2>::: Click Here To Join SovTech Graduate Programme :::  &rarr;</h2>
            <p></p>
          </a>

          
        </div>
      </main>

      <Link href="/about-us">
      
      <a className = "button">Click Here For More Information on SovTech</a>
       
      </Link>
    
      <footer className={styles.footer}>
        <a
          href="https://www.sovtech.co.za/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright 2022{' '}
          <span className={styles.logo}>
            <Image src="/Sovtech-Logo-01.png" alt="SovTech" width={75} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
