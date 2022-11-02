import { useState } from "react";
import "./styles.css";

const places = {
  Delhi: [
    {
      name: "Red Fort",
      description:
        "Red fort, also popularly known as Lal Quila, was constructed by Mughal emperor Shah Jahan in the 17th century"
    },
    {
      name: "Qutub Minar",
      description:
        "The Qutb Minar, also spelled Qutub Minar and Qutab Minar, is a minaret and victory tower that forms part of the Qutb complex, which lies at the site of Delhi’s oldest fortified city,"
    },
    {
      name: "Humayun Tomb",
      description:
        "Humayun's tomb is the tomb of the Mughal Emperor Humayun in Delhi, India. The tomb was commissioned by Humayun's first wife and chief consort"
    }
  ],
  noida: [
    {
      name: "Worlds Of Wonder",
      description:
        "Worlds of Wonder is an amusement park and water park located in Sector-38A, Noida, Gautam Buddha Nagar District, Uttar Pradesh, nearby to Delhi"
    },
    {
      name: "Noida Golf Course",
      description:
        "Golf Courses in Noida - Noida has three important golf courses for all golf enthusiasts namely Noida golf course and Jaypee Green golf course"
    },
    {
      name: "Botanical Garden",
      description:
        "A botanical garden or botanic garden is a garden dedicated to the collection, cultivation, preservation and display of an especially wide range of plants"
    }
  ],

  gurugram: [
    {
      name: "Rameshwaram",
      description:
        "Rameshwaram is located on a beautiful island in the South Indian state of Tamil Nadu. It is separated by a small Pamban channel from Sri Lanka. According to Hindu mythology, this is the place where Lord Rama created a bridge across the sea to Sri Lanka."
    },
    {
      name: "Ooty",
      description:
        "Nestled amidst Nilgiri hills, Ooty, also known as Udagamandalam, is a hill station in Tamil Nadu which serves as a top-rated tourist destination. Once regarded as the summer headquarters of the East India Company, the Queen of the hills is a picturesque getaway."
    },
    {
      name: "Kodaikanal",
      description:
        "Located in the state of Tamil Nadu, Kodaikanal is one of the most famous honeymoon destinations in India. A Lakeside resort town of Tamil Nadu, Kodaikanal has a beautiful climate, mist-covered manicured cliffs and waterfall that come together to create the ideal setting for a perfect getaway."
    }
  ]
};

export default function App() {
  const [visitPlaces, setVisitPlaces] = useState("Delhi");

  function stateChangeHandler(state) {
    // var cities = places[state];
    setVisitPlaces(state);
  }

  return (
    <div className="App">
      <h1>Best places to visit in Delhi</h1>
      {Object.keys(places).map((state) => {
        return (
          <li
            className="states"
            key={state}
            onClick={() => stateChangeHandler(state)}
            style={{
              backgroundColor: visitPlaces === state ? "#fdba74" : "transparent"
            }}
          >
            {state}
          </li>
        );
      })}
      <hr />
      {places[visitPlaces].map((place) => {
        return (
          <div key={place["name"]}>
            <li className="visitPlaces">
              <div className="placeName">
                <em>
                  <b> {place["name"]}</b>
                </em>
              </div>
              <p>{place["rating"]}</p>
              <div className="placeDescription">{place["description"]}</div>
            </li>
          </div>
        );
      })}
    </div>
  );
}
