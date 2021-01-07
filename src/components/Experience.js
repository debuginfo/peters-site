import React from "react";

export default class Experience extends React.Component {
  state = {
    places: [
      { name: "TUI", dates: "Aug 2018 - Now", jobTitle: "Web Developer" },
      { name: "Unasys", dates: "Mar 2017 - Aug 2018", jobTitle: "Full Stack Developer" },
      { name: "Clicksco", dates: "Jul 2015 - July 2016", jobTitle: "Software Developer" },
    ],
  };
  render() {
    return (
      <div className="experience__container">
        <div className="experience">
          <h3>Experience</h3>
          <p>A bunch of cool places I've worked at in the past/present</p>

          <ul class="list">
            {this.state.places.map((place) => (
              <li className="list__item list__item-hover">{place.dates}: {place.name} - {place.jobTitle}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
