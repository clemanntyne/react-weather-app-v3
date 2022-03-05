import React from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="City Name..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>

      <h1>San Francisco</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="http://openweathermap.org/img/wn/02d@2x.png"
            alt="mostly cloudy"
          />
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Percipitation: 15%</li>
            <li>Humidity 72%</li>
            <li>Wind:13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
