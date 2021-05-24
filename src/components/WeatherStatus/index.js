import {IoIosAddCircleOutline} from 'react-icons/io'; 
import {WiCloudy} from 'react-icons/wi';
import {RiTempHotLine} from 'react-icons/ri';
import {BsDroplet} from 'react-icons/bs';

const WeatherStatus = () => {
  return (
    <>
      <div className="weatherStatusContainer">
        <div className="weatherStatusContainer__info">
          <div className="weatherStatusContainer__info-wrapper">
            <div className="weatherStatusContainer__info-icon">
              <WiCloudy size={120}/>
            </div>
            <div className="weatherStatusContainer__info-detail">
              <div className="status__text">
                Cloudy
              </div>
              <div className="status__detail">
                <span className="status__detail-temp">
                  <RiTempHotLine/>
                  33.2 C
                  </span>
                <span className="status__detail-humidity">
                  <BsDroplet/>
                  77%
                 </span>
              </div>
            </div>
          </div>
        </div>
        <div className='weatherStatusContainerDetail'>
          <div className="weatherStatusContainerDetail__detail">
            <div className="psi-text">
              <h3>PSI</h3>
            </div>
            <div className="psi-number">
              23
            </div>
            <div className="psi-status">
             Good
            </div>
          </div>
          <div className="weatherStatusContainerDetail__detail">
            <div className="rain-text">
              <h3>RAIN</h3>
            </div>
            <div className="rain-number">
              0
            </div>
            <div className="rain-status">
              mm
            </div>
          </div>
          <div className="weatherStatusContainerDetail__detail">
            <div className="dengue-text">
              <h3>DENGUE</h3>
            </div>
            <div className="dengueIcon-outline">
            </div>
          </div>
          <div className="weatherStatusContainerDetail__detail">
            <div className="add-icon">
              <IoIosAddCircleOutline size={47}/>
            </div>
            <div className="add-text">
              Add
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default WeatherStatus;
