import React, { Component } from "react";
import faker from "faker";

class JobInfoJson extends Component {
    render() {
        let randomArrays = faker.random.arrayElements();

        return (
            <div>
                <div>{`
                    {
                        "author": "Gabriel Austin",
                        "city": "Birmingham",
                        "state": "AL",
                        "position": "Developer",
                        "hireDate": "You Tell Me",
                        "skills": [
                            "HTML",
                            "CSS",
                            "Bootstrap",
                            "JavaScript",
                            "ReactJS",
                            "Git",
                            "Scrum"
                        ]
                    }
                `}</div>
            </div>
        )
    }
}

export default JobInfoJson;