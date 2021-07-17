import React from "react";
import BookingCard from "../BookingCard/BookingCard";

const bookingData = [
  {
    _id: "5e8df6a0e6e8231764dc23e31",
    id: 10,
    subject: "For Customized Clock",
    image:
      "https://res.giftalove.com/resources/common/giftimages/productimage1/CWPFM202.jpg",
    HelpingHour: "10:00 AM - 10:00 PM",
    totalSpace: 25,
  },
  {
    _id: "5e8df6a0e6e8231764dc23e33",
    id: 11,
    subject: "For Customized Bag",
    image:
      "https://i.etsystatic.com/11249239/d/il/ee9306/2419275299/il_340x270.2419275299_873x.jpg?version=0",
    HelpingHour: "10:00 AM - 10:00 PM",
    totalSpace: 12,
  },
  {
    _id: "5e8df6a0e6e8231764dc23e34",
    id: 12,
    subject: "Customized What You Want",
    image:
      "https://3.imimg.com/data3/ML/WL/MY-18247332/mug-printing-500x500.png",
    HelpingHour: "10:00 AM - 10:00 PM",
    totalSpace: 10,
  },
  {
    _id: "5e8df50be6e8231764dc23de",
    id: 1,
    subject: "Hilton Moorea Lagoon Resort",
    image:
      "https://media.cntraveler.com/photos/53da60a46dec627b149e66f4/16:9/w_2560%2Cc_limit/hilton-moorea-lagoon-resort-spa-moorea-french-poly--110160-1.jpg",
    HelpingHour: "8:00 AM - 10:30 PM",
    totalSpace: 150,
  },
  {
    _id: "5e8df578e6e8231764dc23df",
    id: 2,
    subject: "Dream Square Resort",
    image:
      "http://universalsearch.co/images/bca09034cf2a0b79cc344dc25e34a2d2resort.jpg",
    HelpingHour: "10:00 AM - 12:30 PM",
    totalSpace: 500,
  },
  {
    _id: "5e8df5aee6e8231764dc23e0",
    id: 3,
    subject: "The Peak Singapore resorts",
    image:
      "https://www.thepeakmagazine.com.sg/wp-content/uploads/2019/04/sustainable-hotels-and-resorts-the-brando_1200.jpg",
    HelpingHour: "10:00 AM - 10:30 PM",
    totalSpace: 250,
  },
  {
    _id: "5e8df63be6e8231764dc23e1",
    id: 4,
    subject: "Bakers Kay Resort",
    image:
      "https://www.sixsenses.com/media/3978/yao-noi-thailand-the_view_aerial_8150-original.jpg?mode=max&rnd=132266540770000000",
    HelpingHour: "10:00 AM - 9:30 PM",
    totalSpace: 200,
  },
  {
    _id: "5e8df68de6e8231764dc23e2",
    id: 5,
    subject: "The Country Resort",
    image:
      "https://media.cntraveler.com/photos/5f681dd6b981fb78a3045fa0/master/w_1600%2Cc_limit/ritz-carlton-abama.jpg",
    HelpingHour: "11:00 AM - 11:00 PM",
    totalSpace: 400,
  },
  {
    _id: "5e8df68de6e8231764dc23e4",
    id: 6,
    subject: "The Ocean Retreat",
    image:
      "https://media.cntraveler.com/photos/608f49f8fff15401f8abdded/master/w_1600%2Cc_limit/monkey-hut-2-horz.jpg",
    HelpingHour: "11:00 AM - 11:00 PM",
    totalSpace: 75,
  },
  {
    _id: "5e8df68de6e8231764dc23e5",
    id: 7,
    subject: "Londolozi Retreat",
    image:
      "https://media-cdn.tripadvisor.com/media/daodao/photo-s/02/f0/20/c9/caption.jpg",
    HelpingHour: "11:00 AM - 11:00 PM",
    totalSpace: 120,
  },
  {
    _id: "5e8df68de6e8231764dc23e7",
    id: 8,
    subject: "Taj Exotica Resort",
    image:
      "https://media.cntraveler.com/photos/5f6821be7557491753645016/master/w_2048,h_1365,c_limit/mandapa-bali.jpg",
    HelpingHour: "11:00 AM - 11:00 PM",
    totalSpace: 375,
  },
  {
    _id: "5e8df6a0e6e8231764dc23e9",
    id: 9,
    subject: "Grand Metropark Resort ",
    image:
      "https://data.theupsider.com.au/wp-content/uploads/2018/08/Aerial_view_of_One-bedroom_Pool_Villa_5464-A4.jpg",
    HelpingHour: "10:00 AM - 10:00 PM",
    totalSpace: 200,
  },
];

const BookAppointment = ({ date }) => {
  return (
    <div className="container">
      <h2 className="text-center m-5 font-weight-bold">
        Customize order and resort booking on {date.toDateString()}
      </h2>
      <div className="row">
        {bookingData.map((booking) => (
          <BookingCard
            booking={booking}
            date={date}
            key={booking.key}
          ></BookingCard>
        ))}
      </div>
    </div>
  );
};

export default BookAppointment;
