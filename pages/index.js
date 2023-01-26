import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";

const MeetUp = (props) => {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://first-user-1:fMhZoIB6IXnOvay1@cluster0.ovdefz7.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetUpsCollection = db.collection("meetups");

  const meetUps = await meetUpsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetUps.map((data) => {
        return {
          id: data._id.toString(),
          image: data.image,
          title: data.title,
          address: data.address,
        };
      }),
    },
    revalidate: 1,
  };
};

export default MeetUp;
