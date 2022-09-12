import logo from './logo.svg';
import './App.css';
import Layout from './Layout/Layout';
import Page from './Page/Page';
import { Routes, Route, Link } from "react-router-dom";
import Inscription from './Pageone/pageone';
import Connexion from './Pageone/pageconnex';


function App() {
  return (
    <div className="App">

      <Layout>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="inscription" element={<Inscription />} />
        <Route path="connexion" element={<Connexion />} />
      </Routes>
      </Layout>

    </div>
  );
}

export default App;
