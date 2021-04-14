import React, { Component } from "react";
import faker from "faker";

class MainImage extends Component {
  render() {
    let randomAvatar = faker.image.avatar();
    return (
      <>
        <div>
          <img
            src={randomAvatar}
            alt="Photo of Gabriel Austin"
            className="rounded-circle"
          />
        </div>

        <div className="Pokecard">
          <div className="card shadow p-3 mb-5">
            <div className="card-body bg-warning">
              <h5 className="card-title Pokecard-title">{this.props.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                <img
                  src={randomAvatar}
                  alt="Photo of Gabriel Austin"
                  className="rounded-circle"
                />
              </h6>
              <div className="Pokecard-data">Type: {this.props.type}</div>
              <div className="Pokecard-data">Experience: {this.props.exp}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainImage;
