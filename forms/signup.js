import "./signuup.css";

function Signup() {
  return (
    <div className="container">
      <h1>signup your account</h1>
      <form className="formss" action="/action_page.php">
        <label>FirstName: </label>
        <input className="inpt" type="text" name="Fname" placeholder="Enter your firstname" />
        <br />
        <label>LastName: </label>
        <input className="inpt" type="text" name="Lname" placeholder="Enter your lastname" />
        <br />
        <label>Email</label>
        <input className="inpt" type="email" name="email" placeholder="Enter your Email" />
        <br />
        <label>Contact Number</label>
        <input className="inpt" type="number" name="munber" placeholder="Enter your number" />
        <br />
        <p>Select your gender</p>
        <input type="radio" id="male" name="gender" value="HTML" />
        <label for="males">Male</label><br/>
        <input type="radio" id="female" name="gender" value="HTML" />
        <label for="females">FeMale</label><br/>
        <input type="radio" id="other" name="gender" value="HTML" />
        <label for="other">I dont like to reveal</label><br/>

        <label>Password</label>
        <input className="inpt" type="password" name="pswd" placeholder="Enter your password" /><br/>
        <label>Confirm Password</label>
        <input className="inpt" type="password" name="cnfpswd" placeholder="Enter your password again" /> <br/>
        <br />
        <button>SignUp</button>
      </form>
    </div>
  );
}

export default Signup;
