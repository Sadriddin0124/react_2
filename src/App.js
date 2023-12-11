import React, { Component } from "react";

export default class App extends Component {
  state = {
    step: 0,
    step_size: 1,
    counters: [1, 2],
    user: {
      firstname: "Sadriddin",
      lastname: "Ravshanov",
      address: "Karshi",
    },
    user2: {
      firstname: "Sadriddin",
      lastname: "Ravshanov",
      address: {
        country: {
          title: "Uzbekistan",
          city: {
            title: 'Kukdala', 
            street: {
              title: 'Olmazor'
            }
          }
        }
      }
    },
  };

  walk = () => {
    this.setState({
      step: this.state.step + this.state.step_size,
    });
  };

  increaseSize = () => {
    this.setState({
      step_size: this.state.step_size + 1,
    });
  };
  addcounter = () => {
    const { counters } = this.state;
    let result = counters;
    let last_item = result[result.length - 1];
    this.setState({
      counter: counters.push(last_item + 1),
    });
  };
  increaseItem = (index) => {
    this.setState({
      counter: this.state.counters[index]++,
    });
  };
  decreaseItem = (index) => {
    this.setState({
      counter: this.state.counters[index]--,
    });
  };
  changeFirstname = ()=> {
    const {user} = this.state
    this.setState ({
      firstname: user.firstname = "Ahmad"
    })
  }
  changeLastname = ()=> {
    const {user} = this.state
    this.setState ({
      firstname: user.lastname = "Shahmat"
    })
  }
  changeAddress = ()=> {
    const {user} = this.state
    this.setState ({
      firstname: user.address = "Toshkent"
    })
  }
  editFirstname =() => {
    this.setState({
      firstname: this.state.user2.firstname = "John"
    })
  }
  editLastname =() => {
    this.setState({
      firstname: this.state.user2.lastname = "Smith"
    })
  }
  changeCountry = () => {
    this.setState ({
      country: this.state.user2.address.country.title = 'England'
    })
  }
  changeCity = () => {
    this.setState ({
      country: this.state.user2.address.country.city.title = 'London'
    })
  }
  changeStreet = () => {
    this.setState ({
      country: this.state.user2.address.country.city.street.title = 'Green'
    })
  }
  render() {
    const { step, step_size, counters, user, user2 } = this.state;
    return (
      <div>
        <h1>Homework 1</h1>
        <h1>Step: {step} m</h1>
        <button onClick={this.walk}>Walk</button>
        <h2>Step Size: {step_size} m</h2>
        <button onClick={this.increaseSize}>Increase step size</button>
        <h1>Homework 2</h1>
        <button onClick={this.addcounter}>Add Counter</button> <br />
        {counters.map((item, index) => {
          return (
            <div>
              <button onClick={() => this.increaseItem(index)}>+</button>
              <span>{item}</span>
              <button onClick={() => this.decreaseItem(index)}>-</button>
            </div>
          );
        })}
        
        <h1>Homework 3</h1>
        <p>First Name: {user.firstname}</p>
        <button onClick={this.changeFirstname}>Change Firstname</button>
        <p>Last Name: {user.lastname}</p>
        <button onClick={this.changeLastname}>Change Lastname</button>
        <p>Address: {user.address}</p>
        <button onClick={this.changeAddress}>Change address</button>
        <h1>Homework 4</h1>
        <p>First Name: {user2.firstname}</p>
        <button onClick={this.editFirstname}>Change Firstname</button>
        <p>Last Name: {user2.lastname}</p>
        <button onClick={this.editLastname}>Change Lastname</button>
        <p>Country: {user2.address.country.title}</p>
        <button onClick={this.changeCountry}>Change Country</button>
        <p>City: {user2.address.country.city.title}</p>
        <button onClick={this.changeCity}>Change City</button>
        <p>Street: {user2.address.country.city.street.title}</p>
        <button onClick={this.changeStreet}>Change Street</button>
      </div>
    );
  }
}
