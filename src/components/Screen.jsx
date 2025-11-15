import "./Screen.css";
function Screen() {
  return (
    <>
      <div className="screen-container">
        <div className="screen-design">
          <h3>Screen</h3>
          <div className="seats-info-container">
            <div className="available-box"></div>
            <div className="available-text">
              <h6>Available</h6>
            </div>
            <div className="selected-box"></div>
            <div className="available-text">
              <h6>Selected</h6>
            </div>
            <div className="sold-box"></div>
            <div className="available-text">
              <h6>Sold</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Screen;
