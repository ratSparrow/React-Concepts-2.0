import { useState } from "react";

const StatefulForm = () => {
  const [email,setEmail] = useState(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.name.value)
    console.log(email)
  }

  const handleEmailChange = (e) => {
    console.log(e.target.value)
    setEmail(e.target.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" />
        <br />
        <input
          onChange={handleEmailChange}
          type="text" name="email" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default StatefulForm;