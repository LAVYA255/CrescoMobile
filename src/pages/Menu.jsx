import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import pattern2 from "../assets/Pattern2.png";
import crescoOriginal from "../assets/Cresco Original.png";

// Main menu items
const menuItems = [
  { name: "Hummus / Sumac / Pine Nuts", price: "10.00 Euro" },
  { name: "Labneh / Cucumber / Dill", price: "12.00 Euro" },
  { name: "Pita / sourdough bread", price: "3.00 Euro" },
  { name: "Burrata / Nashi Pear / Fennel", price: "18.00 Euro" },
  { name: "Watermelon Tataki / Tuna / Edamame", price: "18.00 Euro" },
  { name: "Tartar / lovage / horseradish", price: "24.00 Euro" },
  { name: "Eggplant / curry / almond", price: "16.00 Euro" },
  { name: "Vegan scallop / herb mushroom / avocado", price: "18.00 Euro" },
  { name: "Octopus / Currant / White Onion", price: "26.00 Euro" },
  { name: "Chanterelles / Lardo / Matzo", price: "20.00 Euro" },
  { name: "Flank steak / mousseline / sugar snap peas", price: "45.00 Euro" },
  { name: "Duck breast pastrami / mizuma / pineapple", price: "28.00 Euro" },
  { name: "Turbot / Indigo Tomato / Triplets", price: "36.00 Euro" },
  { name: "Romaine / Cauliflower / Crispy Chili", price: "24.00 Euro" },
  { name: "Chocolate / Cherry / Sake", price: "10.00 Euro" },
  { name: "Citrus / Buckwheat / Ricotta", price: "12.00 Euro" },
  {
    name: "Chef's Choice for two people or more",
    price: "",
    highlight: true,
  },
  {
    name: "",
    price: "",
    highlight: true,
  },
  {
    name: "A journey through our culinary delights in four courses",
    price: "",
    highlight: true,
  },
  {
    name: "",
    price: "",
    highlight: true,
  },
  {
    name: "Sharing menu",
    price: "per person 89.00 Euro",
    highlight: true,
  },
  {
    name: "Sharing Menu Veg",
    price: "per person 65.00 Euro",
    highlight: true,
  },
];

// Bar menu items
const barMenuItems = [
  // SIGNATURES
  {
    name: "Cresco Sour",
    price: "14.00 euros",
    desc: "Bombay sapphire, lemon, thyme, maple syrup, egg white",
    section: "SIGNATURES",
  },
  {
    name: "Sweet and Spicy",
    price: "14.00 euros",
    desc: "Bombay sapphire, strawberry infused aperol, lime, ginger beer",
    section: "SIGNATURES",
  },
  {
    name: "Lavender Hemingway",
    price: "14.00 euros",
    desc: "Bacardi, lemon, lavender syrup, egg white",
    section: "SIGNATURES",
  },
  {
    name: "Ginger Lemonade Highball",
    price: "14.00 euros",
    desc: "Gray goose, ginger, lemon, soda",
    section: "SIGNATURES",
  },
  {
    name: "Margarita",
    price: "14.00 euros",
    desc: "Patron silver, cointreau, lime",
    section: "SIGNATURES",
  },
  {
    name: "Espresso Martini",
    price: "14.00 euros",
    desc: "Gray goose, espresso, kahlua",
    section: "SIGNATURES",
  },
  // MOCKTAILS
  {
    name: "Cresco's Lemonade",
    price: "9.00 euros",
    desc: "Martini vibrante, grapefruit, lemon, sugar, soda",
    section: "MOCKTAILS",
  },
  {
    name: "Lavender Rosemary Spritz",
    price: "9.00 euros",
    desc: "Lavender, orange, rosemary, lemongrass",
    section: "MOCKTAILS",
  },
];

// BarMenu component
const BarMenu = ({ items }) => (
  <div
    className="bg-white bg-opacity-95 rounded-lg shadow-xl max-w-2xl w-full px-10 py-12 flex flex-col items-center mt-12"
    style={{ fontFamily: "Special Elite, monospace" }}
  >
    <h2
      className="text-2xl font-bold mb-6 uppercase tracking-widest text-gray-900"
      style={{ fontFamily: "Special Elite, monospace" }}
    >
      Bar Menu
    </h2>
    {Object.entries(
      items.reduce((acc, item) => {
        acc[item.section] = acc[item.section] || [];
        acc[item.section].push(item);
        return acc;
      }, {})
    ).map(([section, sectionItems]) => (
      <div key={section} className="w-full mb-6">
        <h3
          className="text-lg font-bold mb-2 uppercase tracking-wide text-gray-700"
          style={{ fontFamily: "Special Elite, monospace" }}
        >
          {section}
        </h3>
        {sectionItems.map((item, idx) => (
          <div
            key={idx}
            className="w-full py-2 border-b border-gray-200 last:border-b-0"
          >
            <div className="flex flex-row justify-between items-center w-full">
              <span
                className="text-base md:text-lg font-bold text-gray-900"
                style={{ fontFamily: "Special Elite, monospace" }}
              >
                {item.name}
              </span>
              <span
                className="text-base md:text-lg font-bold text-gray-900"
                style={{ fontFamily: "Special Elite, monospace" }}
              >
                {item.price}
              </span>
            </div>
            {item.desc && (
              <div
                className="text-sm text-gray-600 italic mt-1"
                style={{ fontFamily: "monospace" }}
              >
                {item.desc}
              </div>
            )}
          </div>
        ))}
      </div>
    ))}
  </div>
);

const Menu = () => {
  useEffect(() => {
    document.body.classList.add("menu-navbar-top");
    return () => {
      document.body.classList.remove("menu-navbar-top");
    };
  }, []);

  // Date for the menu header
  const today = new Date();
  const dateString = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-start"
      style={{
        backgroundColor: "#000",
        backgroundImage: `url(${pattern2})`,
        backgroundRepeat: "repeat-y",
        backgroundSize: "contain",
        backgroundPosition: "top center",
      }}
    >
      <div className="relative z-50 w-full">
        <Navbar />
      </div>
      <div className="flex flex-col items-center justify-center w-full flex-1 py-12 px-2">
        <div className="mb-8 mt-8 flex flex-col items-center justify-center">
          <img
            src={crescoOriginal}
            alt="Cresco Logo"
            className="w-64 md:w-[380px] mb-10 mx-auto"
            style={{ objectFit: "contain" }}
          />
          <div className="mb-2 flex justify-center">
            <span
              className="text-xl md:text-2xl tracking-widest px-6 py-2 rounded-sm font-bold"
              style={{
                fontFamily: "monospace",
                fontWeight: 700,
                background: "#D4AF37",
                color: "#111",
                letterSpacing: "0.15em",
                display: "inline-block",
                borderRadius: "10px",
              }}
            >
              {dateString}
            </span>
          </div>
        </div>
        <div
          className="bg-white bg-opacity-95 rounded-lg shadow-xl max-w-2xl w-full px-10 py-12 flex flex-col items-center"
          style={{ fontFamily: "Special Elite, monospace" }}
        >
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className={`w-full py-4 ${
                item.highlight ? "bg-gray-100 rounded-md my-2" : ""
              }`}
            >
              <div className="flex flex-row justify-between items-center w-full">
                <span
                  className="text-lg md:text-xl font-bold tracking-tight text-gray-900"
                  style={{ fontFamily: "Special Elite, monospace" }}
                >
                  {item.name}
                </span>
                <span
                  className="text-lg md:text-xl font-bold tracking-tight text-gray-900"
                  style={{ fontFamily: "Special Elite, monospace" }}
                >
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* Bar Menu Section */}
        <BarMenu items={barMenuItems} />
      </div>
    </div>
  );
};

export default Menu;
