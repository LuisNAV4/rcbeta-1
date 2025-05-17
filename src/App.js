import React from 'react';
import './styles/glass.css';
import NewsSection from './components/NewsSection';
import EnrollSection from './components/EnrollSection';
import SubjectsSection from './components/SubjectsSection';

function App() {
  return (
    <div>
      <div className="glass-window">
        <NewsSection />
      </div>
      <div className="glass-window">
        <EnrollSection />
      </div>
      <div className="glass-window">
        <SubjectsSection />
      </div>
    </div>
  );
}

export default App;