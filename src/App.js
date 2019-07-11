import React, { useState } from "react";
import { WrappedMap } from "./component/Map";
import "./App.css";
import Form from "./component/Form";
import axios from "axios";

function App() {
  const [address, setAddress] = useState("");
  const [tasks, setTask] = useState([]);

  // handle address input
  const handleChange = e => {
    setAddress(e.target.value);
  };

  const REACT_APP_GOOGLE_KEY = "AIzaSyCeL7XdatKWo3Cjvfwc6qtwkTBCTZcxOL4";

  // making a get request to the api to get  all tasks
  const getTasks = () => {
    axios
      .get(
        "https://gsmtasks.com/api/tasks/tasks/?accout=78ede3eb-6aaa-49a8-b223-6aebaf6391e8",
        {
          headers: {
            Authorization: "Token a2fb5d518f7890fc67ca686af39cb0077b653203"
          }
        }
      )
      .then(res => {
        setTask(res.data);
      });
  };

  // post data
  const postData = {
    account:
      "https://gsmtasks.com/api/tasks/accounts/78ede3eb-6aaa-49a8-b223-6aebaf6391e8/",
    category: "assignment",
    address: { raw_address: address }
  };

  // making a post request to the api to create a task
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://gsmtasks.com/api/tasks/tasks/", postData, {
        headers: {
          Authorization: "Token a2fb5d518f7890fc67ca686af39cb0077b653203"
        }
      })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        address={address}
        getTasks={getTasks}
      />
      <div style={{ width: "81vw", height: "100vh" }}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${REACT_APP_GOOGLE_KEY}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
          tasks={tasks}
        />
      </div>
    </div>
  );
}

export default App;
