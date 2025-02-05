import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import { MainLayout } from './components/main-layout';
import './scss/app.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              route.element || <route.component />
            }
          />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
