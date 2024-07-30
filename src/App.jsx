import './App.css'

import CustomHookForm from './components/form/CustomHookForm'
import LineCharts from './components/charts/LineCharts'
import Posts from './components/posts/Posts'
import RefForm from './components/form/RefForm'
import SimpleForm from './components/form/SimpleForm'
import StatefulForm from './components/form/StatefulForm'

function App() {

  return (
    <>
      {/*
        <Country></Country>
        <SimpleForm></SimpleForm>
         <StatefulForm></StatefulForm>
          <RefForm></RefForm>
       */}
      <LineCharts></LineCharts>
      <Posts></Posts>
      <CustomHookForm></CustomHookForm>
    </>
  )
}

export default App
