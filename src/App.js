import { Header } from './components/header';
import { routes } from './routes';
import { Routes, Route } from 'react-router-dom';
import './scss/app.scss';
import { createContext, useState } from 'react';

export const SearchContext = createContext('');

function App() {
  const [searchingValue, setSearchingValue] = useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider
        value={{
          searchingValue,
          setSearchingValue,
        }}>
        <Header/>
        <div className="content">
          <div className="container">
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component searchingValue={searchingValue} />}
                  exact={route.exact}
                />
              ))}
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
