import { Profile } from '../Images'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-upper">
            <h2>TS Developer</h2>
            <p className='info'>Create your own template to with webpack design and make ideas. <br />
                
            </p>
            <h4>Social Media</h4>
            <div className='social-icons'>
                <a href="https://github.com/Renstrio24p?tab=repositories"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.facebook.com/renstrio"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.linkedin.com/in/waren-gador-18505b1b7/"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://www.linkedin.com/in/waren-gador-18505b1b7/"><i className="fa-brands fa-twitter"></i></a>
            </div>
           <p className='copyright'>&copy; Standalone React 2023 - <i class="fa-solid fa-flask"></i> Beta Test</p>
        </div>
        <div className='footer-right'>
           <div className='profile'>
              <img src={Profile} alt="my Profile" />
           </div>
           <p className='desc-profile'>
           I'm Waren a Software Engineer with 1 1/2 years of experience. <br />
                to learn more. feel free to reach out with me.
           </p>
        </div>
    </footer>
  )
}