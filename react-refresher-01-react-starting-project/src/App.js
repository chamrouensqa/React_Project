import React from 'react';
import './App.css';
import GoalList from './components/GoalList'
const App = () => {
  const courseGoals = [
    {id:'001', Text:"Learning the basic"},
    {id:'002', Text:"Create the main course"},
    {id:'003', Text:"Hosting the web services"}
  ];
  return(
      <div>
        <h1 className='course-goal'>Programming language</h1>
        <GoalList goals={courseGoals}/>
      </div>
  );
};

export default App;
