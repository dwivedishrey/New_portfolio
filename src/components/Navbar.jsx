import logo from "../assets/shreya1.png"
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-0 w-10 "  style={{ filter: 'invert(100%) brightness(200%) ', width:'200px' ,height:'100px' }}  src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
           <a href="https://www.linkedin.com/in/shreya-dwivedi-a7959422b/"> <FaLinkedin/></a>
           <a href="https://github.com/dwivedishrey"><FaGithub/></a> 
            
        </div>
    </nav>
  )
}

export default Navbar;
