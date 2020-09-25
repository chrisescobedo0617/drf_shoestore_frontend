import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    shoes: [{}],
  };

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/shoes/")
      .then((res) => res.json())
      .then((data) => this.setState({ shoes: data }));
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.shoes.map((shoe) => (
            <>
              <div key={shoe.id}>
                <li> Brand Name: {shoe.brand_name}</li>
                <li> Color: {shoe.color}</li>
                <li> Fasten: {shoe.fasten_type}</li>
                <li> Manufacturer: {shoe.manufacturer}</li>
                <li> Material: {shoe.material}</li>
                <li> Shoe Type: {shoe.shoe_type}</li>
                <li> Size: {shoe.size}</li>
              </div>
              <br />
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
