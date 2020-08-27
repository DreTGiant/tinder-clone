import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./card.styles.css";

function Card() {
  const [people, setpeople] = useState([
    {
      name: "batman",
      url:
        "https://i.pinimg.com/originals/dd/e4/da/dde4da8175c71a2559bba80224818f82.jpg",
    },
    {
      name: "superman",
      url: "https://pmcvariety.files.wordpress.com/2018/09/cavill-2.jpg",
    },
  ]);

  return (
    <div>
      <div className="card-container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Card;
