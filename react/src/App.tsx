import React from 'react';
import { OuiColorVariation } from './orgui';
import { OuiBreadcrumb, OuiBreadcrumbItem } from './orgui/Breadcrumb';
import { OuiButton } from './orgui/Button';
import { OuiCard, OuiCardItem, OuiShorthandCard } from './orgui/Card';
import { OuiInputCheck } from './orgui/InputCheck';

class App extends React.Component<{}, any> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      checked: !this.state.checked,
    });
  }

  render() {
    return (
      <div style={{margin: "0 16px"}}>
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
        <div>
          <h2>Card</h2>
          <OuiCard>
            <OuiCardItem>test</OuiCardItem>
          </OuiCard>
          <OuiShorthandCard colorVariation={OuiColorVariation.Warning}>
            Warning
          </OuiShorthandCard>
        </div>
        <div>
          <h2>InputCheck</h2>
          <OuiInputCheck checked={this.state.checked} onChange={this.onChange.bind(this)}>test</OuiInputCheck><br/>
          {this.state.checked ? "checked": "not checked"}
        </div>
      </div>
    );
  }
}

export default App;
