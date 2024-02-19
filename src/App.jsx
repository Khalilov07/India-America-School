import './App.css';
import Header from './components/Header/Header';
import AppRoutes from './components/App/AppRoutes';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
