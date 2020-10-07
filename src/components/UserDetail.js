import React from "react";
import GoogleLogout from "react-google-login";
import "./UserDetail.css";

function UserDetail(detail) {
  return (
    <div className="sidebar">
      <div className="user-header">
        {/* <a id="user-header-brand" href="https://utilize.app/" className="btn btn-primary">Utilize</a> */}
        <a id="user-header-brand" className="navbar-brand" href="#">
          Utilize
        </a>
      </div>

      <div className="user-details">
        <img
          className="img-thumbnail"
          id="user-avatar"
          src="https://www.brandeps.com/icon-download/U/User-icon-vector-01.svg"
          alt="User"
        ></img>
      </div>

      <div className="user-info">
        <span>{detail.name}Abhishek</span>
        <br />
        <span>Email</span>
      </div>

      <div>
        <GoogleLogout
          clientId="448128940514-s81lunfmgmshv561dmp99q5dt1pcu550.apps.googleusercontent.com"
          buttonText="Logout"
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
}

export default UserDetail;
