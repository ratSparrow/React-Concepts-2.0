/* eslint-disable react/display-name */

// Higher-Order Component
const withLogger = WrappedComponent => {
  return props => {
    console.log('Props:', props);
    return <WrappedComponent {...props} />;
  };
};

export default withLogger;
