import React from "react";
import VegetableItems from "./VegetableItems";

const dummy_vegy_data = [
  {
    id: "1",
    name: "Carrot",
    price: 35,
    image:
      "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/04/23175719/shutterstock_440493100-1.jpg",
  },
  {
    id: "2",
    name: "Broccoli",
    price: 57.5,
    image:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-broccoli-1296x728-feature.jpg?w=1155&h=1528",
  },
  {
    id: "3",
    name: "Tomato",
    price: 22,
    image:
      "https://images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg",
  },
  {
    id: "4",
    name: "Capsicum",
    price: 42.5,
    image:
      "https://i.mscwlns.co/mosaic-wellness/image/upload/f_auto,w_1000,c_limit/v1647514400/BW%20BLOG/Untitled-design---2022-03-17T162312.140_11zon.jpg",
  },
  {
    id: "5",
    name: "Onion",
    price: 30,
    image:
      "https://static.toiimg.com/thumb/msid-92775530,width-1070,height-580,imgsize-147380,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
  },
  {
    id: "6",
    name: "Cucumber",
    price: 18,
    image: "https://nenow.in/wp-content/uploads/2023/08/sliced-cucumber.jpg",
  },
  {
    id: "7",
    name: "Potato",
    price: 15,
    image: "https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP.jpg",
  },
  {
    id: "8",
    name: "Corn",
    price: 40,
    image:
      "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/03/corn-cob-field-1296x728-header.jpg?w=1155&h=1528",
  },
  {
    id: "9",
    name: "Cauliflower",
    price: 45,
    image:
      "https://img.taste.com.au/DBCUD8iO/taste/2007/05/cauliflower-181864-2.jpg",
  },
  {
    id: "10",
    name: "Beetroot",
    price: 37.5,
    image:
      "https://images-prod.healthline.com/hlcmsresource/images/AN_images/AN172-Beets-1296x728-Header.jpg",
  },
];

export default function vegetables() {
  return (
    <div className="container my-5">
      <ul className="row p-0 justify-content-center gap-4">
        {dummy_vegy_data.map((veg) => (
          <VegetableItems veg={veg} key={veg.id} />
        ))}
      </ul>
    </div>
  );
}
