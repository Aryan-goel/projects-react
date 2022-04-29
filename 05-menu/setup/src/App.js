import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCatagories = ["all", ...new Set(items.map((item) => item.category))];

console.log(allCatagories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCatagories] = useState(allCatagories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItems} />
        </div>
      </section>
    </main>
  );
}

export default App;
