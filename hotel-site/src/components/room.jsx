const rooms = [
  {
    category: "Standard Room",
    image: "https://images.squarespace-cdn.com/content/v1/571a88642b8dde690c217bf0/1614586299898-AI5MZSZ1ZGYBPHZVWU04/hotel-website-design-example-palm-island-resort.jpg",
    priceRange: "$80 - $120 per night",
    description: "A comfortable and affordable option with essential amenities, perfect for solo travelers or couples.",
    subTypes: [
      {
        name: "Standard Single",
        description: "A cozy room with a single bed, ideal for solo travelers seeking simplicity and comfort.",
        priceRange: "$80 - $100 per night",
        image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?cs=srgb&dl=pexels-pixabay-261102.jpg&fm=jpg",
      },
      {
        name: "Standard Double",
        description: "A spacious room with a double bed, perfect for couples or small families.",
        priceRange: "$90 - $120 per night",
        image: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?cs=srgb&dl=pexels-pixabay-279746.jpg&fm=jpg",
      },
       {
        name: "Standard Single",
        description: "A cozy room with a single bed, ideal for solo travelers seeking simplicity and comfort.",
        priceRange: "$80 - $100 per night",
        image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?cs=srgb&dl=pexels-pixabay-261102.jpg&fm=jpg",
      },
    ],
  },
  {
    category: "Deluxe Room",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFoo8y4kLV98oUwTZTAQCzqmlJUqOR0NLFg&s",
    priceRange: "$150 - $200 per night",
    description: "A spacious room with modern comforts and elegant decor, ideal for a luxurious stay.",
    idescription: "A spacious room with modern comforts and elegant decor, ideal for a luxurious stay. Each room is thoughtfully designed with stylish interiors, premium furnishings, and ample natural light. Guests can enjoy a relaxing ambiance, modern amenities, and the perfect balance of comfort and sophistication, making it an excellent choice for both leisure and business travelers.",

    subTypes: [
      {
        name: "Deluxe King",
        description: "A luxurious room with a king-sized bed and premium amenities for a relaxing stay.",
        priceRange: "$150 - $180 per night",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFoo8y4kLV98oUwTZTAQCzqmlJUqOR0NLFg&s",
      },
      {
        name: "Deluxe Twin",
        description: "A stylish room with two twin beds, designed for comfort and versatility.",
        priceRange: "$160 - $200 per night",
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?cs=srgb&dl=pexels-pixabay-271624.jpg&fm=jpg",
      },
       {
        name: "Standard Single",
        description: "A cozy room with a single bed, ideal for solo travelers seeking simplicity and comfort.",
        priceRange: "$80 - $100 per night",
        image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?cs=srgb&dl=pexels-pixabay-261102.jpg&fm=jpg",
      },
    ],
  },
  {
    category: "Suite",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn9GcSHBC04osXmko6Gkli-uPXgZReM25KmjIAZhA&s",
    priceRange: "$250 - $350 per night",
    description: "A lavish suite with ample space and premium amenities, designed for an exceptional experience.",
    subTypes: [
      {
        name: "Junior Suite",
        description: "An elegant suite with a spacious living area and upscale amenities for a refined stay.",
        priceRange: "$250 - $300 per night",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn9GcSHBC04osXmko6Gkli-uPXgZReM25KmjIAZhA&s",
      },
      {
        name: "Executive Suite",
        description: "A grand suite with separate bedroom and living spaces, perfect for extended stays.",
        priceRange: "$280 - $350 per night",
        image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?cs=srgb&dl=pexels-pixabay-271618.jpg&fm=jpg",
      },
    ],
  },
];

export default rooms;