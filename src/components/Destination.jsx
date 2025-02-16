import "./Destination.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot ,within a time frame</p>
      <DestinationData
        // bascialley we are storeing them in variable to use them in dyanmicalleymode
        className="first-des"
        heading="Pangong Tso"
        text=" Scenic Landscape: Pangong Tso is renowned for its mesmerizing
                beauty, with crystal-clear blue waters that change colors
                throughout the day—shifting from shades of blue to green and
                even red during sunrise and sunset. Unique Setting: The lake is
                surrounded by barren, rugged mountains, creating a stark and
                dramatic contrast between the vibrant water and the stark, arid
                landscape. High-Altitude Wonder: Located at an elevation of
                4,350 meters (14,270 feet), it is one of the highest saltwater
                lakes in the world, adding to its allure.
              "
        img1="https://media.istockphoto.com/id/1218830644/photo/beautiful-lake.jpg?s=612x612&w=0&k=20&c=r5or5KmtrZE5P93cDPG2FzxWQxhZA0qeTInoXJ7qXxA="
        img2="https://cdn.kimkim.com/files/a/content_articles/featured_photos/2afe680f438ab7f31cad3426fb31d277e8f1fe16/big-0c8da4b55236092e6fa7fb32290e9a7f.jpg"
      />
      <DestinationData
        // bascialley we are storeing them in variable to use them in dyanmicalleymode
        className="first-des-reverse"
        heading="Nubra Valley"
        text="Nubra Valley, located in the northernmost part of India in Ladakh, is a high-altitude cold desert known for its breathtaking landscapes, sand dunes, and unique double-humped Bactrian camels. The valley lies at an average altitude of 10,000 feet above sea level and is accessible via the Khardung La Pass, one of the highest motorable roads in the world. It is home to picturesque villages, ancient monasteries like Diskit Monastery, and the confluence of the Nubra and Shyok rivers. The valley is rich in Tibetan culture and offers adventure activities like trekking and ATV rides."
        img1="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/b9/e6/1c/nubra-valley.jpg?w=1200&h=-1&s=1"
        img2="https://www.valleytripplanner.in/wp-content/uploads/2022/12/2nubravalley.jpg"
      />
    </div>
  );
};

export default Destination;
