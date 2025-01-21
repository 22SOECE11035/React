import React from "react";

function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ x: "Student of RKU", y: 1 });
    }, 5000);
  });
}

function ApiSimulation() {
  const [name, setName] = React.useState("loading...!!!");
  const [id, setId] = React.useState("loading...!!!");

  React.useEffect(() => {
    fetchUserData().then((data) => {
      setName(data.x);
      setId(data.y);
    });
  }, []); 

  return (
    <div>
      User: {name} <br />
      ID: {id}
    </div>
  );
}

export default ApiSimulation;
