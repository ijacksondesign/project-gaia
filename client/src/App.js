import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import CreateEvent from './pages/CreateEvent';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
<<<<<<< HEAD
import Event from './components/Event/index';
=======
import Results from './pages/Results';
>>>>>>> 66540aabe1e978132c596e3c4363205c42ab34db

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='d-flex flex-column justify-content-between min-vh-100 vw-100'>
          <Header />
          <main className='align-self-stretch'>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/profile/:username?" component={Profile} />
              <Route exact path="/create-event" component={CreateEvent} />
              <Route exact path ='/login' component={Login} />
              <Route exact path ='/signup' component={SignUp} />
<<<<<<< HEAD
              <Route exact path ='/event' component={Event} />
=======
              <Route exact path ='/results/:city' component={Results} />
              <Route exact path ='/event/:id' component={Home} />
>>>>>>> 66540aabe1e978132c596e3c4363205c42ab34db
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
