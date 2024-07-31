import PropTypes from 'prop-types';

const ReuseableForm = ({ formTitle, handleSubmit, children }) => {
  const handleSubmitLocalData = e => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
    };

    handleSubmit(data);
  };
  return (
    <div>
      {children}
      <form onSubmit={handleSubmitLocalData}>
        <input type="text" name="name" id="" />
        <br />
        <input type="text" name="email" id="" />
        <br />
        <input type="submit" value={formTitle} />
      </form>
    </div>
  );
};

export default ReuseableForm;

ReuseableForm.propTypes = {
  formTitle: PropTypes.string,
  handleSubmit: PropTypes.func,
  children: PropTypes.children,
};
