import React, { Component } from "react";
import faker from "faker";

class MainImage extends Component {
  render() {
    let randomAvatar = faker.image.avatar();
    return (
      <>
        <div className="card shadow p-3 mb-5">
          <div className="card-body bg-warning">
            <img
              src={randomAvatar}
              alt="Photo of Gabriel Austin"
              className="rounded-circle"
            />
          </div>
        </div>
      </>
    );
  }
}

export default MainImage;
