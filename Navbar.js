import React, { useState ,useEffect} from "react";
import { NavLink } from "react-router-dom";
import "./assets/Navbar.css";


function NavBar() {
  
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="topnav">
    <a className="active" href="/Navbar">
      FLIP
    </a>
    <a href="#home">Home</a>
    <a href="#about">Library</a>
    <a href="#contact">Wishlist</a>
    <div className="search-container">
      <form action="/action_page.php">
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
  
  {/* Header */}
  <div className="header">
    <h1>Welcoming you to the world of mangas</h1>
    <p>Start with our hot books</p>
  </div>
  {/* Photo Grid */}
  <div className="row">

    <div className="column">
      <a href="/Login">
      <img src="https://i.postimg.cc/FsfmhZG8/11b32a461f8380cfedfded1f277a0fb1.jpg" alt="ks"style={{ width: "100%" }} />
      </a>
      
      <a href="/Login">
      <img src="https://i.postimg.cc/JnPmzYfV/de82cfbf197ccc2c7546867cb99f4df8.jpg" alt="sai" style={{ width: "100%" }} />
      </a>
      
      <img src="https://i.postimg.cc/k5CdFd9P/9684f5b9c80cb620db681c52afbf2491.jpg" alt="mob" style={{ width: "100%" }} />
      <img src="https://i.postimg.cc/MHNCnCt4/1b074a35b787b5469588318033e85946.jpg" alt="demon" style={{ width: "100%" }} />
      <img src="https://i.postimg.cc/qR7SjJ5S/23864840cd4b59ed0985d63b6deb8e1b.jpg" alt="dragon" style={{ width: "100%" }} />
      <img src="https://i.postimg.cc/W4TQq662/5f9e0fc1a31a07e4484473c7afd835dc.jpg" alt="hunter" style={{ width: "100%" }} />
      <img src="https://i.postimg.cc/RVnrk0Zz/98fd15d5b69e0f8f90a44be959bff360.jpg" alt="op" style={{ width: "100%" }} />
    </div>
    <div className="column">
      <img src="https://i.postimg.cc/85n33885/a556c8e63373057c84fdcbf294f1bf4e.jpg" alt="naruto" style={{ width: "100%" }} />
      <img src="https://i.postimg.cc/9Q53CjDw/c1daa2111cd92b088c1456a85ec2bb9e.jpg" alt="ghoul" style={{ width: "100%" }} />
      <img src="https://i.postimg.cc/vZWJmSnq/c6cdd36ef0e3ca592e08e062436e3d2d.jpg" alt="death" style={{ width: "100%" }} />
      <img src="https://i.postimg.cc/prmNXWQz/cc4a64f3e0f9dd57a8aa3fa0d14de855.jpg" alt="para" style={{ width: "100%" }} />
      <img src="https://i.postimg.cc/66PJbZw0/e722e4582484e2cf0f438d0598149277.jpg" alt="bleach" style={{ width: "100%" }} />
      <img src="https://i.postimg.cc/GpK6F8qv/e8de5f94776c99c8ad31058697d09886.jpg" alt="sunbean" style={{ width: "100%" }} />
    </div>
    <div className="column">
      <img src="/w3images/wedding.jpg" style={{ width: "100%" }} />
      <img src="/w3images/rocks.jpg" style={{ width: "100%" }} />
      <img src="/w3images/falls2.jpg" style={{ width: "100%" }} />
      <img src="/w3images/paris.jpg" style={{ width: "100%" }} />
      <img src="/w3images/nature.jpg" style={{ width: "100%" }} />
      <img src="/w3images/mist.jpg" style={{ width: "100%" }} />
      <img src="/w3images/paris.jpg" style={{ width: "100%" }} />
    </div>
    <div className="column">
      <img src="/w3images/underwater.jpg" style={{ width: "100%" }} />
      <img src="/w3images/ocean.jpg" style={{ width: "100%" }} />
      <img src="/w3images/wedding.jpg" style={{ width: "100%" }} />
      <img src="/w3images/mountainskies.jpg" style={{ width: "100%" }} />
      <img src="/w3images/rocks.jpg" style={{ width: "100%" }} />
      <img src="/w3images/underwater.jpg" style={{ width: "100%" }} />
    </div>
  </div>

  <footer className="footer-distributed">
    <div className="footer-left">
      <h3>
        This is<span> FLIP</span>
      </h3>
      <p className="footer-links">
        <a href="#" className="link-1">
          Home
        </a>
        <a href="#">Library</a>
        <a href="#">Wishlist</a>
        <a href="#">About</a>
        <a href="#">Faq</a>
        <a href="#">Contact</a>
      </p>
      <p className="footer-company-name">Company Name © 2015</p>
    </div>
    <div className="footer-center">
      <div>
        <i className="fa fa-map-marker" />
        <p>
          <span>444 S. Cedros Ave</span> Solana Beach, California
        </p>
      </div>
      <div>
        <i className="fa fa-phone" />
        <p>+1.555.555.5555</p>
      </div>
      <div>
        <i className="fa fa-envelope" />
        <p>
          <a href="mailto:support@company.com">support@company.com</a>
        </p>
      </div>
    </div>
    <div className="footer-right">
      <p className="footer-company-about">
        <span>About the company</span>
        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod
        convallis velit, eu auctor lacus vehicula sit amet.
      </p>
      <div className="footer-icons">
        <a href="#">
          <i className="fa fa-facebook" />
        </a>
        <a href="#">
          <i className="fa fa-twitter" />
        </a>
        <a href="#">
          <i className="fa fa-linkedin" />
        </a>
        <a href="#">
          <i className="fa fa-github" />
        </a>
      </div>
    </div>
  </footer>
    </>
  );
}

export default NavBar;