import React from 'react';
import { ColorVariation } from './orgui';
import OuiButton from './orgui/Button';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <OuiButton colorVariation={ColorVariation.Primary}>Button</OuiButton>
      </header>
    </div>
  );
}

export default App;
