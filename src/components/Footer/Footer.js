import './Footer.css'

const Footer = () => {
      return (
            <div className="navFooter" onClick={()=>window.scrollTo(0, 0)}>
                  <span>Back To Top</span>
            </div>
      );
};

export default Footer;