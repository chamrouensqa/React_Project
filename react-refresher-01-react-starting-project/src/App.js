import React from 'react';
import './App.css';
import GoalList from './components/GoalList'
const App = () => {
  return(
      <div>
        <h1 className='course-goal'>Programming language</h1>
        <GoalList />
      </div>
  );
};

export default App;
