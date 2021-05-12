import React from "react";

const JobInfoJson = () => {
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
  );
};

export default JobInfoJson;
