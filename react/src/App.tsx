import React from 'react';
import OuiButton from './orgui/Button';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <OuiButton className="isPrimary">Button</OuiButton>
      </header>
    </div>
  );
}

export default App;
