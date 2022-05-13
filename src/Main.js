import React, { Component } from "react";
import './Main.css';
import SwapiService from "./servise";
import Spiner from "./spiner/spiner";

export default class Main extends Component {

  swapiService = new SwapiService();

  state = {
    peopleList: null
  }

  componentDidMount() {
    this.swapiService
    .getAllPeople()
    .then((peopleList) => {
      this.setState({
        peopleList
      });
    });
  }

  renderItems(arr) {
    return arr.map(({id, name}) => {
      return (
        <li className="list-group"
        key={id}
        onClick={() => this.props.itemSelected(id)}
        >
            {name}
          </li>
      )
    })
  }

  render () {

    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spiner />
    }

    const items = this.renderItems(peopleList);

    return (
      <div className="main">
      <div className="persons">
        <ul className="item-list">
          {items}
        </ul>
      </div>
    </div>
    )
  }
}
