import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { App } from '../../App';
import { PeoplePage } from '../PeoplePage';
import { HomePage } from '../HomePage/HomePage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="people">
          <Route index element={<PeoplePage />} />
          <Route path=":personSlug?" element={<PeoplePage />} />
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </Router>
);
