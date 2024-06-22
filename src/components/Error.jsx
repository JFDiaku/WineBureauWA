import InfoIcon from '@mui/icons-material/Info';

const Error = () => {


  
  return (
    <div className="error" style={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      padding:'5rem 0',
      alignItems: 'center',
      fontSize: '1.2em',
      textAlign:'center',
      width:'fit-content',
      margin:'auto'
    }}>
        <InfoIcon sx={{fontSize:'3em', marginTop:'1rem'}}/>
        <p >Oops! Something went wrong.</p>
    </div>
  )
}

export default Error