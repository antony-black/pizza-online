import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/main-layout';
import { routes } from './routes';
import './scss/app.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
            // exact={route.exact}
          />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
