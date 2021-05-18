const WheatherStatus = () => {
  return (
    <>
      <div className="wheatherStatusContainer">
        <div className="wheatherStatusContainer__info">
          <div className="wheatherStatusContainer__info-icon">Icon</div>
          <div className="wheatherStatusContainer__info-detail">
            <div className="status__text">
              <h2>Cloudy</h2>
            </div>
            <div className="status__detail">
              <span className="status__detail-temp">33.2 C</span>
              <span className="status__detail-humidity">77%</span>
            </div>
          </div>
        </div>
        <div className='wheatherStatusContainerDetail'>
          <div className="wheatherStatusContainerDetail__detail">
            <div className="psi-text">
              <h3>PSI</h3>
            </div>
            <div className="psi-number">
              23
            </div>
            <div className="psi-status">
             GOOD
            </div>
          </div>
          <div className="wheatherStatusContainerDetail__detail">
            <div className="psi-text">
              <h3>PSI</h3>
            </div>
            <div className="psi-number">
              23
            </div>
            <div className="psi-status">
             GOOD
            </div>
          </div>
          <div className="wheatherStatusContainerDetail__detail">
          <div className="psi-text">
              <h3>PSI</h3>
            </div>
            <div className="psi-number">
              23
            </div>
            <div className="psi-status">
             GOOD
            </div>
          </div>
          <div className="wheatherStatusContainerDetail__detail">
            <div className="psi-number">
              23
            </div>
            <div className="psi-status">
             GOOD
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default WheatherStatus;
