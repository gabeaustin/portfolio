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
      </>
    );
  }
}

export default MainImage;
