import styles from '../styles/Home.module.css'
import Image from 'next/image'


export default function About2(){

    return <div>
        <Image src="/SovTech-Team.jpg" alt="photo" width={250} height={250} />
        <Image src="/SovTech-Team2.jpeg" alt="photo" width={250} height={250} />
        <Image src="/SovTech-pic.jpg" alt="photo" width={250} height={250} />
        <Image src="/SovTech-Team3.jpg" alt="photo" width={250} height={250} />
        <Image src="/SovTech-Team4.jpg" alt="photo" width={300} height={250} />
        <h1 className={styles.title}>::: SovTech Innovative Solutions :::</h1>
        <h3 className={styles.code}> SovTechs focuses on the following areas of expertise</h3>
        <ul>
        <li>Customer Service Development</li>
        <li>Mobile and Cross-Platform App Development</li>
        <li>Product and Interface Design</li>
        <li>Elite Cloud Hosting</li>
        <li>Software and App Maintaince</li>
        </ul>

        <h3 className={styles.code}> Benefits of Graduate Programme</h3>
        <ul>
       <li>Mentor Support For The Duration Of The Programme</li>
       <li>Continued Support</li>
       <li>Product Diversity And The Opportunity To Take Full Responsibility</li>
        </ul>
        
        

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

   
}


