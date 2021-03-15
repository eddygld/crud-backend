import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import ExerciseList from './components/ExerciseList';
import EditExercise from './components/EditExercise';
import LogExercise from './components/LogExercise';
import CreateUser from './components/CreateUser';




const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Route exact path="/" component={ExerciseList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/log" component={LogExercise} />
      <Route path="/user" component={CreateUser} />
    </BrowserRouter>
  );
}

export default App;
