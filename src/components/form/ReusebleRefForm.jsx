import { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';

const ReusebleRefForm = ({ formTitle, handleSubmit, children }) => {
  const nameRef = useRef('');
  const emailRef = useRef('');

  const handleSubmitLocalData = e => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
    };
    handleSubmit(data);
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);
  return (
    <div>
      {children}
      <form onSubmit={handleSubmitLocalData}>
        <input ref={nameRef} type="text" name="name" id="" />
        <br />
        <input ref={emailRef} type="text" name="email" id="" />
        <br />
        <input type="submit" value={formTitle} />
      </form>
    </div>
  );
};

export default ReusebleRefForm;

ReusebleRefForm.propTypes = {
  formTitle: PropTypes.string,
  handleSubmit: PropTypes.func,
  children: PropTypes.children,
};
