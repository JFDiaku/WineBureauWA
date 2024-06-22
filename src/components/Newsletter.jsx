import "./newsletter.css"
import "../components/hero.css"
import TextField from '@mui/material/TextField';

const Newsletter = () => {
  return (
    <div className="newsletter container">
      <h1 className="newsletter-title">Be The first to know</h1>
      <h4 className="newsletter-text">Sign up for our newsletter for Store offers and updates via Email</h4>

      <div className='newsletter-input'>
              <TextField sx={{width:'100%', background:'white'}}  id="outlined-basic" label="Your email address...." variant="outlined" />
                <button className='newsletter-submit-button'>SUBMIT</button>
              </div>

      
    </div>
  )
}

export default Newsletter