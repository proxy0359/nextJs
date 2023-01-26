import { Fragment } from "react";
import style from "./MeetupItemDetails.module.css";
import Image from "next/image";

const MeetupItemDetails = (props) => {
  return (
    <section className={style.detail}>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <address>{props.address}</address>
      <h4>{props.description}</h4>
    </section>
  );
};

export default MeetupItemDetails;
