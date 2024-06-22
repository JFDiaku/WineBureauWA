import './contact.css'
import { Link } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import TextField from '@mui/material/TextField';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';


const Contact = () => {



  return (
    <>
    <div className='collection-banner container' >
        <div className="collections-pageNav" style={{color:'white'}} >
          <Link className="navLink pageNav-link" style={{color:'white'}} to='/'>HOME</Link> 
          <ArrowForwardIosIcon sx={{fontSize:".7em"}}/>
          <Link className="navLink pageNav-link" style={{color:'white'}} to='/Contact' >CONTACT</Link>

        </div>


        <div className="title-box">
          <h1 className='collections-page-title' style={{fontFamily:'var(--font2)'}}>CONTACT</h1>
          <div className="underline collections-underline"></div>
        </div>    
      </div>


      <div className="container contact">

        <div className="contact-top">
          <div className="contact-left">
            <h2>Contact Us</h2>

            <p>If you would like to know more about our policies, you can consult our Terms and Conditions. You will also be able to follow your order (tracking number will be provided in an e-mail after ordering).</p>
            
            <div className="contact-item">
            <FmdGoodOutlinedIcon sx={{fontSize:'2.5em', marginTop:'-.3rem', color:'var(--base)'}}/>
          
              <div className="contact-item-right">
                <p>Address</p>
                <p>Click the icon in the bottom right of the page to talk to our agents during business hours. At other times we will respond as soon as possible.</p>
              </div>
            </div>


            <div className="contact-item">
              <PhoneIphoneOutlinedIcon sx={{fontSize:'2.5em', marginTop:'-.3rem', color:'var(--base)'}}/>
              <div className="contact-item-right">
                <p>Phone</p>
                <p>+41 71 227 7650</p>
              </div>
            </div>


            <div className="contact-item">
              <AccessTimeOutlinedIcon sx={{fontSize:'2.5em', marginTop:'-.3rem', color:'var(--base)'}}/>
              <div className="contact-item-right">
                <p>Open Hours</p>
                <p>Monday to Friday 09:30 - 17:30<br></br>
                  Saturday & Sunday 10:00 - 15:00</p>
              </div>
            </div>


            <div className="contact-item">
            <MailOutlinedIcon sx={{fontSize:'2.5em', marginTop:'-.3rem', color:'var(--base)'}}/>
              <div className="contact-item-right">
                <p>Help</p>
                <p>Help@email.com</p>
              </div>
            </div>







          </div>
          <div className="contact-right">
              <iframe width="100%" height="100%" style={{margin:'auto', border:'none'}}  
       src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Abuja%20Nigeria+()
               &amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a>
               </iframe>
          </div>
        </div>


        <div className="contact-form-section">
          <h1>Send us A Message</h1>
          <form action="" className='contact-form' >
            <div className="form-top">
              <div className="form-top-sec">
                <TextField sx={{width:'100%'}}  id="outlined-basic" label="Your name...." variant="outlined" />
              </div>
              <div className="form-top-sec">
                <TextField   sx={{width:'100%'}} id="outlined-basic" label="Your email..." variant="outlined" />
              </div>
            </div>
            
        
            <TextField  
          id="outlined-multiline-static"
          label="Your message...."
          multiline
          rows={9}
  
        />
          </form>

          <button className="submit-btn">
              Send
              </button>
        </div>


        <div className="newsletter-strip">

          <div className="newsletter-icon">
          <MarkAsUnreadIcon sx={{fontSize:'5em'}} />

          <p> 
          SIGN UP 
          FOR NEWSLETTER
          </p>
          
         
          </div>
       

            <div className="newsletter-right">
              <p>Subscribe to the weekly newsletter for all the latest updates</p>

              <div className='newsletter-input-sec'>
              <TextField sx={{width:'100%'}}  id="outlined-basic" label="Your email address...." variant="outlined" />
                <button className='newsletter-submit-button'>SUBMIT</button>
              </div>

            </div>
      
           

        </div>

       
        
      </div>
    </>
  )
}

export default Contact