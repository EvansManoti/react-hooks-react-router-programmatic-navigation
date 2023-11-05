import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ onLogin }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [buttonStyles, setButtonStyles] = useState({
    backgroundColor: "blue", 
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    
    if (formData.username === "user" && formData.password === "password") {
      onLogin({ username: formData.username });
      history.push("/");
    } else {
      alert("Invalid username or password");
    }
  }

  const buttonStylesHover = {
    backgroundColor: "blue",
  };

  return (
    <form onSubmit={handleSubmit} style={formContainerStyles}>
      <h1>Login</h1>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          style={inputStyles}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={inputStyles}
        />
      </div>
      <button
        type="submit"
        style={buttonStyles}
        onMouseEnter={() => setButtonStyles(buttonStylesHover)}
        onMouseLeave={() => setButtonStyles({ backgroundColor: "blue" })}
      >
        Login
      </button>
    </form>
  );
}

export default Login;
