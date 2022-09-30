import { BrowserRouter as Router } from 'react-router-dom';
import ContactProvider from './context/Contacts';
import Routes from './Routes';

function App() {
  return (
    <Router basename="/phoneBookProject">
      <ContactProvider>
        <Routes />
      </ContactProvider>
    </Router>
  );
}

export default App;
