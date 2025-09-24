# 🏨 Hotel Opal(Hotel Website) - Internship Assignment

This project is a **Hotel Website** developed using **React.js** as part of my internship assignment.  
It is fully responsive and includes basic interactivity along with a WhatsApp-based booking feature.

---

## 📌 Features

- Home page with hero banner (hotel name, tagline, background image)
- About Us section with a short description
- Rooms & Suites with images, descriptions, and sample pricing
- Facilities/Services including pool, spa, gym, Wi-Fi, parking, etc.
- Gallery with high-quality images.
- Contact & Booking page with phone, email, address, map, and WhatsApp booking

---

## 📂 Project Structure

hotel-frontend/
├── public/ # Public assets (favicon, manifest, etc.)
├── src/
│ ├── assets/
│ │ └── images/ # Image assets (rooms, facilities, gallery, etc.)
│ │
│ ├── components/ # Reusable components
│ │ ├── Footer.jsx
│ │ ├── HeroBanner.jsx
│ │ ├── Navbar.jsx
│ │ ├── Room.jsx
│ │ └── RoomCard.jsx
│ │
│ ├── Pages/ # Page components
│ │ ├── AboutUs.jsx
│ │ ├── Contact.jsx
│ │ ├── Facilities.jsx
│ │ ├── Gallery.jsx
│ │ ├── Homepage.jsx
│ │ ├── RoomDetails.jsx
│ │ └── Rooms.jsx
│ │
│ ├── App.jsx # Main app component
│ ├── App.css # Global styles
│ ├── index.css # Base styling
│ └── main.jsx # Entry point (ReactDOM render)
│
├── index.html # HTML template
├── package.json # Dependencies and project scripts
├── vite.config.js # Vite configuration
├── tailwind.config.js # Tailwind CSS config
├── postcss.config.js # PostCSS config
├── eslint.config.js # Linting rules
├── .gitignore # Git ignore rules
├── .gitattributes # Git attributes
└── README.md # Documentation


---

## ▶️ Run Locally

1. Clone the repo
   ```bash
   git clone https://github.com/TharushaPramod/hotel-frontend.git

cd hotel-website

npm install

npm start

