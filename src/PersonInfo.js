import React, { Component } from "react";
import './PersonInfo.css';
import SwapiService from "./servise";

export default class PersonInfo extends Component {

  swapiService = new SwapiService();

  state = {
    person: null
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }

    this.swapiService
    .getPerson(personId)
    .then((person) => {
      this.setState({ person })
    })
  }
  render () {

    if (!this.state.person) {
      return <span>Select</span>
    }

    const { id, name, gender, species, mass } = this.state.person;
    return (
      <div className="about-person">
        <img className="person-image" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="person" />
        <ul className="person-info">
        <li className="person-list">
            <span>Name: </span>
            <span>{name} {this.props.personId}</span>
          </li>
          <li className="person-list">
            <span>Gender: </span>
            <span>{gender}</span>
          </li>
          <li className="person-list">
          <span>Species: </span>
            <span>{species}</span>
          </li>
          <li className="person-list">
          <span>Mass: </span>
            <span>{mass}</span>
          </li>
        </ul>
      </div>
    )
  }
}
