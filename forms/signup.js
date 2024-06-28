import { useState } from "react";
import "./signuup.css";

function Signup() {
  const [data, setData] = useState({
    username: '',
    Lname: '',
    email:'',
    number: '',
    pswd:'',
    cnfpswd: ''
  });

  const [error, setError] = useState({});
  const handleChange = (e) => {
    const {name, value} = e.target;
    setData({
      ...data,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
   e.preventDefault();
   const validationError = validate(data);
   if(Object.keys(validationError).length === 0){
    console.log("Form Submitted");
    setData({
      username: '',
    Lname: '',
    email:'',
    number: '',
    pswd:'',
    cnfpswd: ''
    })
    setError({});
   }else{
    console.log(validationError);
   }
  }

  const validate = (data) => {
    let error = {};

    if(!data.username.trim()){
      error.username = "firstname required"
    }
  }
  return (
    <div className="container">
      <h1>signup your account</h1>
      <form onSubmit={handleSubmit} className="formss" action="/action_page.php">
        <label>FirstName: </label>
        <input
          className="inpt"
          type="text"
          name="username"
          placeholder="Enter your firstname"
          value={data.username}
          onChange={handleChange}
        />
        {error.username && <p className="errhandel">{error.username}</p>}
        <br />
        {error.username}
        <label>LasteName: </label>
        <input
          className="inpt"
          type="text"
          name="Lname"
          placeholder="Enter your lastname"
          value={data.Lname}
          onChange={handleChange}
        />
        <br />
        <label>Email</label>
        <input
          className="inpt"
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={data.email}
          onChange={handleChange}
        />
        <br />
        <label>Contact Number</label>
        <input
          className="inpt"
          type="number"
          name="number"
          placeholder="Enter your number"
          value={data.number}
          onChange={handleChange}
        />
        <br />
        <p>Select your gender</p>
        <input type="radio" id="male" name="gender" value="HTML" />
        <label for="males">Male</label>
        <br />
        <input type="radio" id="female" name="gender" value="HTML" />
        <label for="females">FeMale</label>
        <br />
        <input type="radio" id="other" name="gender" value="HTML" />
        <label for="other">I dont like to reveal</label>
        <br />
        <label>Password</label>
        <input
          className="inpt"
          type="password"
          name="pswd"
          placeholder="Enter your password"
          value={data.pswd}
          onChange={handleChange}
        />
        <br />
        <label>Confirm Password</label>
        <input
          className="inpt"
          type="password"
          name="cnfpswd"
          placeholder="Enter your password again"
          onChange={handleChange}
        />
        <br />
        <br />
        <button> SignUp</button>
      </form>
    </div>
  );
}

export default Signup;
