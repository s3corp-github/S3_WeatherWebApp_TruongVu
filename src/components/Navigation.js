import {GiHamburgerMenu} from "react-icons/gi";
import {FiChevronDown} from 'react-icons/fi';
import {BsBell} from 'react-icons/bs';

const Navigation = () => {
    return (
        <header className="header">
          <div className="headerContainer">
            <div className="headerContainer__hamburgerMenu">
              <GiHamburgerMenu size={30} color={'#FFF'}/>
            </div>
            <div className="headerContainer__selectLocation">
              <div className="headerContainer__selectLocation-text">
                myENV
              </div>
              <div className="headerContainer__selectLocation-location">
                Current Location <i><FiChevronDown /></i>
              </div>
            </div>
            <div className="headerContainer__notification">
              <BsBell size={25}/>
            </div>
          </div>
        </header>
    )
}

export default Navigation