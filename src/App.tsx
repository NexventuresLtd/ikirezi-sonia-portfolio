// src/App.tsx
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Reflection from './pages/Reflection';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Portfolio />
        <Resume />
        <Reflection />
      </main>
      <Footer />
    </div>
  );
}

export default App;