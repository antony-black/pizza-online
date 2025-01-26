import { Header } from './components/header';
import { routes } from './routes';
import { Routes, Route } from 'react-router-dom';
import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
        <Header/>
        <div className="content">
          <div className="container">
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                  exact={route.exact}
                />
              ))}
            </Routes>
          </div>
        </div>
    </div>
  );
}

export default App;
