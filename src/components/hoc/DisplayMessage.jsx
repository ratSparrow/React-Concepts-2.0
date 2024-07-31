import PropTypes from 'prop-types';

DisplayMessage.propTypes = {
  message: PropTypes.string,
};

function DisplayMessage({ message }) {
  return <div>{message}</div>;
}

export default DisplayMessage;
