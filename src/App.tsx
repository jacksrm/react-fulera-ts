import { Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import PlayList from './pages/PlayList';
import Register from './pages/Register';
import Login from './pages/Login';
import FAQ from './pages/FAQ';
import Profile from './pages/Profile';
import Update from './pages/Update';


import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { AuthProvider } from './contexts/auth';

function App() {
  return (
    <div className="App">
      {/* <Navbar session={session} setSession={setSession} /> */}
      <AuthProvider>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <MainPage /> }
          />
          <Route
            exact
            path="/playlist/:id"
            render={(props) => (
              <PlayList id={parseInt(props.match.params.id) }
              />
            )}
          />

          <Route exact path="/register" component={Register} />
          <Route exact path="/login" render={() => <Login />} />
          <Route path="/faq" component={FAQ} />
          <Route exact path="/:nameURL" component={Profile}/>
          <Route path="/profile/update/:userURL" component={Update}/>
        </Switch>

        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
