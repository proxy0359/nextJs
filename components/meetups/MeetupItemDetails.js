import { Fragment } from "react";
import style from "./MeetupItemDetails.module.css";
import Image from "next/image";

const MeetupItemDetails = (props) => {
  return (
    <section className={style.detail}>
      <Image src={props.image} alt={props.title} width={200} height={200} />
      <h3>{props.title}</h3>
      <address>{props.address}</address>
      <h4>{props.description}</h4>
    </section>
  );
};

export default MeetupItemDetails;
