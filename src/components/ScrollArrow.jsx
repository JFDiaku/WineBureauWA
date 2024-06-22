import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import useMediaQuery from '@mui/material/useMediaQuery';

const ScrollArrow = () => {
  const isMobileScreen = useMediaQuery('(max-width:1100px)');
  return (
    <>
    {isMobileScreen ?
    <a className="scrollArrow" href='#'>
      <ArrowUpwardIcon sx={{color:'var(--base)', fontSize:'2em',}}/>
    </a>
    :<></>}
    </>
  )
}

export default ScrollArrow