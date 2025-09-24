import stroom1 from "../images/RoomsI/str1.jpg";
import droom1 from "../images/RoomsI/droom1.jpg";
import lroom from "../images/RoomsI/lroom.jpg";
import typeroom1 from "../images/RoomsI/typeroom1.jpg";
import typeroom2 from "../images/RoomsI/typeroom2.jpg";
import typeroom3 from "../images/RoomsI/typeroom3.jpg";

const rooms = [
  {
    category: "Standard Room",
    image: stroom1,
    priceRange: "$80 - $120 per night",
    description: "A comfortable and affordable option with essential amenities, perfect for solo travelers or couples.",
     idescription: "A spacious room with modern comforts and elegant decor, ideal for a luxurious stay. Each room is thoughtfully designed with stylish interiors, premium furnishings, and ample natural light. Guests can enjoy a relaxing ambiance, modern amenities, and the perfect balance of comfort and sophistication, making it an excellent choice for both leisure and business travelers.",
    subTypes: [
      {
        name: "Standard Normal",
        description: "A cozy room with a single bed, ideal for solo travelers seeking simplicity and comfort.",
        priceRange: "$80 - $100 per night",
        image: typeroom1,
      },
      {
        name: "Standard Single",
        description: "A spacious room with a double bed, perfect for couples or small families.",
        priceRange: "$90 - $120 per night",
        image: typeroom2,
      },
       {
        name: "Standard Double",
        description: "A cozy room with a single bed, ideal for solo travelers seeking simplicity and comfort.",
        priceRange: "$100 - $150 per night",
        image: typeroom3,
      },
    ],
  },
  {
    category: "Deluxe Room",
    image: droom1,
    priceRange: "$150 - $200 per night",
    description: "A spacious room with modern comforts and elegant decor, ideal for a luxurious stay.",
    idescription: "A spacious room with modern comforts and elegant decor, ideal for a luxurious stay. Each room is thoughtfully designed with stylish interiors, premium furnishings, and ample natural light. Guests can enjoy a relaxing ambiance, modern amenities, and the perfect balance of comfort and sophistication, making it an excellent choice for both leisure and business travelers.",

    subTypes: [
      {
        name: "Deluxe Normal",
        description: "A luxurious room with a king-sized bed and premium amenities for a relaxing stay.",
        priceRange: "$150 - $180 per night",
        image:stroom1,
      },
      {
        name: "Deluxe Twin",
        description: "A stylish room with two twin beds, designed for comfort and versatility.",
        priceRange: "$160 - $200 per night",
        image: droom1,
      },
       {
        name: "Deluxe King",
        description: "A cozy room with a single bed, ideal for solo travelers seeking simplicity and comfort.",
        priceRange: "$180 - $300 per night",
        image: typeroom3,
      },
    ],
  },
  {
    category: "Suite",
    image: lroom,
    priceRange: "$250 - $350 per night",
    description: "A lavish suite with ample space and premium amenities, designed for an exceptional experience.",
     idescription: "A spacious room with modern comforts and elegant decor, ideal for a luxurious stay. Each room is thoughtfully designed with stylish interiors, premium furnishings, and ample natural light. Guests can enjoy a relaxing ambiance, modern amenities, and the perfect balance of comfort and sophistication, making it an excellent choice for both leisure and business travelers.",
    subTypes: [
      {
        name: "Junior Suite",
        description: "An elegant suite with a spacious living area and upscale amenities for a refined stay.",
        priceRange: "$250 - $300 per night",
        image:lroom,
      },
      {
        name: "Executive Suite",
        description: "A grand suite with separate bedroom and living spaces, perfect for extended stays.",
        priceRange: "$280 - $350 per night",
        image: typeroom2,
      },
    ],
  },
  {
    category: "Presidential Suite",
    image: typeroom3,
    priceRange: "$400 - $620 per night",
    description: "A comfortable and affordable option with essential amenities, perfect for solo travelers or couples.",
     idescription: "A spacious room with modern comforts and elegant decor, ideal for a luxurious stay. Each room is thoughtfully designed with stylish interiors, premium furnishings, and ample natural light. Guests can enjoy a relaxing ambiance, modern amenities, and the perfect balance of comfort and sophistication, making it an excellent choice for both leisure and business travelers.",
    subTypes: [
      
    ],
  },
];

export default rooms;