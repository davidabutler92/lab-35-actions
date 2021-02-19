import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogsContainer from '../containers/BlogsContainer';
import DetailsPage from '../commentsForm/DetailsPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/details/:id" component={DetailsPage} />
        <Route path="/" component={BlogsContainer} />
      </Switch>
    </Router>
  );
}
