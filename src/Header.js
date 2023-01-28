import './header.css'

const Header = ({href, setHref}) => {


  const handleClick = (element) => {
    setHref(element.target.getAttribute('href'));
    return true;
  }

  return <div className="header">
  <a href="#default" className='logo' onClick={handleClick}>Safe Syringe Progam <img style={{width: 25, height: 25}} src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Filled_Syringe_icon.svg'/></a>
  <div className="header-right">
    <a className={href==="#proposal"? "active": ""} href="#proposal" onClick={handleClick}>Briefing Note</a>
    <a className={href==="#ins"? "active": ""} href="#ins" onClick={handleClick}>Institutions</a>
    <a className={href==="#about"? "active": ""} href="#about" onClick={handleClick}>About</a>
  </div>
</div>
}


export default Header