import useInputState from "../../hooks/useInputState";

const CustomHookForm = () => {
  // const [name,handleNameChange] = useInputState('')
  const emailState = useInputState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(emailState.value)
  }
  return (
    <div>
            <form onSubmit={handleSubmit}>
        <input {...emailState} type="text" name="name" id="" />
        <br />
        <input type="text" name="email" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CustomHookForm;