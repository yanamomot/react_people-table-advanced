import { createRoot } from 'react-dom/client';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Root } from './components/Root/Root';

createRoot(document.getElementById('root') as HTMLDivElement).render(<Root />);
