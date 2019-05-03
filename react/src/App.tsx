import React from 'react';
import { OuiColorVariation } from './orgui';
import { OuiBreadcrumb, OuiBreadcrumbItem } from './orgui/Breadcrumb';
import { OuiButton } from './orgui/Button';

const App: React.FC = () => {
  return (
    <div>
      <h1>Components</h1>
      <div>
        <h2>Button</h2>
        <OuiButton colorVariation={OuiColorVariation.Primary}>Button</OuiButton>
      </div>
      <div>
        <h2>Breadcrumb</h2>
        <OuiBreadcrumb>
          <OuiBreadcrumbItem href="#">A</OuiBreadcrumbItem>
          <OuiBreadcrumbItem href="#">B</OuiBreadcrumbItem>
          <OuiBreadcrumbItem href="#">C</OuiBreadcrumbItem>
        </OuiBreadcrumb>
      </div>
    </div>
  );
}

export default App;
