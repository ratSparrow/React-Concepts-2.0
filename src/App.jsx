import './App.css'

import CustomHookForm from './components/form/CustomHookForm'
import LineCharts from './components/charts/LineCharts'
import Posts from './components/posts/Posts'
import RefForm from './components/form/RefForm'
import ReuseableForm from './components/form/ReuseableForm';
import SimpleForm from './components/form/SimpleForm';
import StatefulForm from './components/form/StatefulForm';

function App() {
  const handleSignUp = data => {
    console.log('Sign Up Data', data);
  };
  const handleUpdateUser = data => {
    console.log('Updated User Data', data);
  };

  return (
    <>
      {/*
        <Country></Country>
        <SimpleForm></SimpleForm>
         <StatefulForm></StatefulForm>
          <RefForm></RefForm>
                <CustomHookForm></CustomHookForm>
       */}
      <LineCharts></LineCharts>
      <Posts></Posts>
      <ReuseableForm formTitle={'Sign Up'} handleSubmit={handleSignUp}>
        <div>
          <h1>Sign Up</h1>
          <p>Please Sign Up Here</p>
        </div>
      </ReuseableForm>
      <ReuseableForm formTitle={'Update User'} handleSubmit={handleUpdateUser}>
        <div>
          <h1>Update User Information</h1>
          <p>Please Update User Information Here</p>
        </div>
      </ReuseableForm>
    </>
  );
}

export default App
