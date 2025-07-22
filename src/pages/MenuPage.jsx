import React from "react";
import "./PageStyles.css";
import pattern2 from "../assets/Pattern2.png";

const menuItems = [
  {
    name: "cucumber & oyster salad",
    desc: "pickled ramps, opal basil, fish sauce vinaigrette",
    price: 24,
  },
  {
    name: "sungold tomatoes",
    desc: "housemade stracciatella, watermelon, zhug",
    price: 23,
  },
  {
    name: "caesar salad",
    desc: "chicories, she wolf croutons, anchovy, parmesan",
    price: 19,
  },
  {
    name: "jerk-spiced blowfish tails",
    desc: "scotch bonnet butter, husk cherries",
    price: 22,
  },
  {
    name: "pasta salad",
    desc: "jonah crab, summer beans, green goddess",
    price: 24,
  },
  {
    name: "sweet corn risotto",
    desc: "truffle, sarvecchio",
    price: 37,
  },
  {
    name: "swordfish kebab",
    desc: "marinated squid, summer squash, romesco",
    price: 38,
  },
  {
    name: "brick chicken",
    desc: "heirloom tomatoes, schmaltz croutons, shishito",
    price: 44,
  },
  {
    name: "beef tenderloin",
    desc: "baba ganoush, jimmy nardello peppers, salsa verde",
    price: 45,
  },
  {
    name: "grass-fed & finished burger",
    desc: "white cheddar, pickled red onion, lettuce",
    price: 27,
  },
];

const MenuPage = () => {
  const today = new Date();
  const dateString = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className="menu-bg"
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        backgroundImage: `url(${pattern2})`,
        backgroundRepeat: "repeat",
        backgroundSize: "400px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="menu-canvas">
        <div className="menu-date">{dateString}</div>
        <h1 className="menu-title">DINNER</h1>
        <div className="menu-list">
          {menuItems.map((item, idx) => (
            <div className="menu-item" key={idx}>
              <div className="menu-item-main">
                <span className="menu-item-name">{item.name}</span>
                <span className="menu-item-price">{item.price}</span>
              </div>
              <div className="menu-item-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
