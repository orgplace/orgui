import React from 'react';
import { OuiColorVariation } from './orgui';
import { OuiBreadcrumb, OuiBreadcrumbItem } from './orgui/Breadcrumb';
import { OuiButton } from './orgui/Button';
import { OuiCard, OuiCardItem, OuiShorthandCard } from './orgui/Card';
import { OuiFieldGroup } from './orgui/FieldGroup';
import { OuiInputCheck } from './orgui/InputCheck';
import { OuiInputText } from './orgui/InputText';
import { OuiOutput } from './orgui/Output';

class App extends React.Component<{}, any> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      checked: false,
      text: "",
    };
  }

  onCheckChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      ...this.state,
      checked: !this.state.checked,
    });
  }

  onTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      ...this.state,
      text: e.target.value,
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
          <h2>FieldGroup</h2>
          <OuiFieldGroup label="Label" required>
            <OuiInputText className={OuiFieldGroup.classNames.child} />
            <div className={OuiFieldGroup.classNames.helpText}>help</div>
          </OuiFieldGroup>
        </div>
        <div>
          <h2>InputCheck</h2>
          <OuiInputCheck checked={this.state.checked} onChange={this.onCheckChange.bind(this)}>test</OuiInputCheck><br/>
          <OuiOutput>{this.state.checked ? "checked": "not checked"}</OuiOutput>
        </div>
        <div>
          <h2>InputText</h2>
          <OuiInputText value={this.state.text} onChange={this.onTextChange.bind(this)} /><br/>
          <OuiOutput>{this.state.text}</OuiOutput>
        </div>
      </div>
    );
  }
}

export default App;
