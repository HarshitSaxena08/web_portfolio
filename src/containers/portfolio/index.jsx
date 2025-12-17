import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
// import Jietjind from "../../images/jietjind.png";
import Jietjind_2 from "../../images/jietjind-ac-in.png";
// import Tarantula from "../../images/tarantulagear.png"
import Tarantula_2 from "../../images/tarantulagear-co-il.png"
// import Kizuna_travel from "../../images/Kizuna-clone.png"
import Kizuna_travel_2 from "../../images/screencapture-harshitsaxena08-github-io-Kizuna-clone-2025-12-17-13_39_06.png"
// import Travel_figma from "../../images/Travel-Figma.png"
import Travel_figma_2png from "../../images/travel-figma-2.png"
import Cannactive from "../../images/cannactive-co-il.png"
import Gsolar from "../../images/gsolar-co-il.png"
import Metalstaffroofing from "../../images/metalstaffroofing-co-nz.png"

import "./styles.css";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Tarantula Gear || Ecommerce ",
    image: Tarantula_2,
    link: "https://tarantulagear.co.il/",
  },
  {
    id: 2,
    name: "Jind Institute of Engineering & Technology",
    link: "https://www.jietjind.ac.in/",
    image: Jietjind_2,
  },
  {
    id: 2,
    name: "Kizuna Travel ",
    image: Kizuna_travel_2,
    link: "https://github.com/HarshitSaxena08/Kizuna_clone",
  },
  {
    id: 2,
    name: "Cannactive Website",
    image: Cannactive,

    link: "https://cannactive.co.il/",
  },
  {
    id: 2,
    name: "Metalstaffroofing Website",
    image: Metalstaffroofing,

    link: "https://metalstaffroofing.co.nz/",
  },
  {
    id: 2,
    name: "Gsolar Website",
    image: Gsolar,
    link: "https://gsolar.co.il/",

  },
  {
    id: 3,
    name: "Traveling website || Figma",
    image: Travel_figma_2png,
    link: "https://www.figma.com/proto/KYcyNJoM58FkpbBTkn7a5l/Project-X?node-id=474-1240&t=n2NptDDtDH8wbigD-1&scaling-scale-down-width&content-scaling%20fixed&page-id=474%3A726",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p >{item.name}</p>
                    
                    <button onClick={() => window.open(item.link, "_blank")}>
                      Visit
                    </button>

                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
