import React from "react";

export default function AccommodationInfoCard(props) {
  return (
    <div className="accommodation-info-card">
      <img src={props.infoImg} alt="img" />
      <div>
        <h3>{props.accInfoTitle}</h3>
        <p className="location">{props.location}</p>
        <p>{props.description1}</p>
        <p>{props.description2}</p>
        <p>{props.description3}</p>

        <p className="acc-contact">
          Book here:{" "}
          <a href={props.siteLink} target="_blank" rel="noopener noreferrer">
            {" "}
            {props.siteLink}
          </a>
        </p>
        <p className="acc-contact">Tel: {props.telNumber}</p>
      </div>
    </div>
  );
}
