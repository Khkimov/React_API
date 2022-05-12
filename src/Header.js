import React, { Component } from "react";
import './Header.css';
import SwapiService from "./servise";

export default class Header extends Component  {

  swapiService = new SwapiService();

  state = {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  updatePlanet() {
    const id = Math.floor(Math.random()*20) + 2;
    this.swapiService
    .getPlanet(id)
    .then((planet) => {
      this.setState({
        id,
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
      })
    })
  }

  render () {

    const { id, name, population, rotationPeriod, diameter } = this.state;
    return (
      <div className="header">
        <div className="header-title">
          <h1>STAR WARS DATABASE</h1>
        </div>
        <div className="planet-content">
        <img className="planet-image" 
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet"/>
            <div className="planet-info">
            <h2 className="planet-title">{name}</h2>
            <div className="planet-location">
            <span>Population: </span>
            <span>{population}</span>
            </div>
            <div className="planet-location">
            <span>Rotation Period: </span>
            <span>{rotationPeriod}</span>
            </div>
            <div className="planet-location">
            <span>Diameter: </span>
            <span>{diameter}</span>
            </div>
            </div>
        </div>
      </div>
    )
  }
 
}

