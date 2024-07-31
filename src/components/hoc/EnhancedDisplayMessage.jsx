import DisplayMessage from './DisplayMessage';
import PropTypes from 'prop-types';
import React from 'react';
import withLogger from './WithLogger';

EnhancedDisplayMessage.propTypes = {};

function EnhancedDisplayMessage() {
  return withLogger(DisplayMessage);
}

export default EnhancedDisplayMessage;
