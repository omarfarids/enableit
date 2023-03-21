import React from "react";
import "../styles/card.css";

type CardProps = {
  data: Data;
};

interface Data {
  Company: string;
  Email: string;
  EmailAddress: string;
  FirstNameLastName: string;
  JobTitle: string;
  Phone: string;
}

const Card = ({ data }: CardProps) => {
  return (
    <div className="single-card">
      <h3 className="card-head">{data.Company}</h3>
      <p className="card-name">
        <b>name:</b> {data.FirstNameLastName}
      </p>
      <p className="card-title">
        <b>JobTitle:</b> {data.JobTitle}
      </p>
      <p className="card-number">
        <b>Phone Number:</b> {data.Phone}
      </p>
      <div className="card-email">
        <b>Email:</b>
        <ul>
          <li className="single-email">{data.Email}</li>
          <li className="single-email">{data.EmailAddress}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
