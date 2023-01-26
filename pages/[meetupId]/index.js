import { MongoClient, ObjectId } from "mongodb";

import MeetupItemDetails from "@/components/meetups/MeetupItemDetails";

import React from "react";

const MeetupDetails = (props) => {
  return (
    <MeetupItemDetails
      image={props.meetUp.image}
      title={props.meetUp.title}
      id={props.meetUp.id}
      description={props.meetUp.description}
      address={props.meetUp.address}
    />
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://first-user-1:fMhZoIB6IXnOvay1@cluster0.ovdefz7.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetUpsCollection = db.collection("meetups");

  const meetups = await meetUpsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
};

export const getStaticProps = async (context) => {
  const meetUpId = context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://first-user-1:fMhZoIB6IXnOvay1@cluster0.ovdefz7.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetUpsCollection = db.collection("meetups");

  const meetups = await meetUpsCollection.findOne({ _id: ObjectId(meetUpId) });
  console.log(meetups.image);

  client.close();

  return {
    props: {
      meetUp: {
        id: meetups._id.toString(),
        title: meetups.title,
        address: meetups.address,
        image: meetups.image,
        description: meetups.description,
      },
    },
  };
};

export default MeetupDetails;
