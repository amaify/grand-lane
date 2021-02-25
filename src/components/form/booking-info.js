import React from "react";

const bookingInfo = () => {
  let date = localStorage.getItem("date");
  let time = localStorage.getItem("time");
  let transferType = localStorage.getItem("serviceType");
  let hours = localStorage.getItem("hours");
  let details = JSON.parse(localStorage.getItem("distance"));

  return (
    <section className="booking-info">
      <h3 className="booking-info__heading">basic information</h3>
      <div className="booking-info__container">
        {!details ? <p style={{color: "#fff", fontSize: "18px"}}>No Information</p> : (<ul className="booking-info__container--list">
          <li>
            pickup location &mdash;{" "}
            <span>{details.distance.origin_addresses}</span>
          </li>
          <li>
            destination &mdash;{" "}
            <span>{details.distance.destination_addresses}</span>
          </li>
          {transferType !== "Hourly Service" ? (
            <li>
              duration &amp; distance &mdash;
              <span>
                {" "}
                {
                  details.distance.rows[0].elements[0].duration.text
                } &ndash; {details.distance.rows[0].elements[0].distance.text}
              </span>
            </li>
          ) : (
            <li>
              Number of Hours &mdash;
              <span> {hours}</span>
            </li>
          )}
          <li>
            date &amp; time &mdash;{" "}
            <span>
              {date} &ndash; {time}
            </span>
          </li>
        </ul>)}
      </div>
    </section>
  );
};

export default bookingInfo;
