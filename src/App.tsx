import { Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import PlayList from './pages/PlayList';
import Register from './pages/Register';
import FAQ from './pages/FAQ';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <MainPage state={props.location.state} /> }
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
        <Route path="/faq" component={FAQ} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
