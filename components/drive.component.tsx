import Image from "next/image";

export const DriveComponent = () => {
  return (
    <>
      <div className="navbar-fixed">
        <nav className="nav-extended grey lighten-5">
          <div className="nav-wrapper grey lighten-5 flex justify-between">
            <ul>
              <li className="flex items-center">
                <img src="/google-drive.png" style={{ width: 40, height: 40}} alt="" />
                <a href="#!" className="title grey-text text-darken-1">
                 Drive
                </a>
              </li>
            </ul>
            <ul className="">
              <li>
                <a href="#!">
                  <i className="material-icons grey-text text-darken-1">apps</i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="material-icons grey-text text-darken-1">
                    notifications
                  </i>
                </a>
              </li>
              <li>
              <a
                  href="https://drive.google.com/"
                  target="_blank"
                  className="waves-effect waves-light btn btn-flat white-text"
                >
                  Sign in
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="main">
        <div className="container-fluid">
          <p className="subheader">Folders</p>
          <div className="card-panel-container">
          <div className="card-panel folder grey lighten-5">
            <div>
            <i className="material-icons left">folder</i>Education
            </div>
          </div>
          <div className="card-panel folder grey lighten-5">
            <div>
            <i className="material-icons left">folder</i>Pan
            </div>
          </div>
          <div className="card-panel folder grey lighten-5">
            <div>
            <i className="material-icons left">folder</i>Aadhar
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
};
