import * as React from 'react';
import PropTypes from 'prop-types';

export default function Navigate({theme}) {
  // const [myStyle, setMyStyle]= React.useState({
  //   // let myStyle={
  //   color: "black",
  //   backgroundColor: "white"
  // // }
  // })

  // const [btnText, setBtnText]= React.useState("Enable Dark Mode")

  // const toggleMode= ()=>{
  //   if(myStyle.color==="black"){
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black"
  //     })
  //     setBtnText("Enable Light Mode")
  //   }
  //   else{
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white"
  //     })
  //     setBtnText("Enable Dark Mode")
  //   }
  // }
  return (
    <>
      <nav className={'navbar navbar-expand-lg navbar-${theme} bg-${theme}'}>        
        <div className="container-fluid" /*style={myStyle}*/>
          <a className="navbar-brand" href="#" /*style={myStyle}*/>
            Dashboard
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            // style={myStyle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" /*style={myStyle}*/>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  // style={myStyle}
                >
                  Dashboard
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#" /*style={myStyle}*/>
                      Chart
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" /*style={myStyle}*/>
                      Graph
                    </a>
                  </li>
                  <li>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" /*style={myStyle}*/>
                      AAHHH Shit! He's up again.
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="form-check form-switch" /*style={myStyle}*/>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                // onClick={toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                xyz
                {/* {btnText} */}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
