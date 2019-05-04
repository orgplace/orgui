import React from 'react';
import { OuiColorVariation } from './orgui';
import { OuiBreadcrumb, OuiBreadcrumbItem } from './orgui/Breadcrumb';
import { OuiButton } from './orgui/Button';
import { OuiCard, OuiCardItem, OuiShorthandCard } from './orgui/Card';
import { OuiFieldGroup } from './orgui/FieldGroup';
import { OuiInputCheck } from './orgui/InputCheck';
import { OuiInputSelect } from './orgui/InputSelect';
import { OuiInputText } from './orgui/InputText';
import { OuiOutput } from './orgui/Output';

const ButtonDemo: React.FC = () => (
  <div>
    <h2>Button</h2>
    <OuiButton colorVariation={OuiColorVariation.Primary}>Button</OuiButton>
  </div>
);

const BreadcrumbDemo: React.FC = () => (
  <div>
    <h2>Breadcrumb</h2>
    <OuiBreadcrumb>
      <OuiBreadcrumbItem href="#">A</OuiBreadcrumbItem>
      <OuiBreadcrumbItem href="#">B</OuiBreadcrumbItem>
      <OuiBreadcrumbItem href="#">C</OuiBreadcrumbItem>
    </OuiBreadcrumb>
  </div>
);

const CardDemo: React.FC = () => (
  <div>
    <h2>Card</h2>
    <OuiCard>
      <OuiCardItem>test</OuiCardItem>
    </OuiCard>
    <OuiShorthandCard colorVariation={OuiColorVariation.Warning}>
      Warning
    </OuiShorthandCard>
  </div>
);

const FieldGroupDemo: React.FC = () => (
  <div>
    <h2>FieldGroup</h2>
    <OuiFieldGroup label="Label" required>
      <OuiInputText className={OuiFieldGroup.classNames.child} />
      <div className={OuiFieldGroup.classNames.helpText}>help</div>
    </OuiFieldGroup>
  </div>
);

class InputCheckDemo extends React.Component<{}, any> {
  constructor(props: Readonly<{}>) {
    super(props)
    this.state = {checked: false};
  }

  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({checked: !this.state.checked});
  }

  render() {
    return (
      <div>
        <h2>InputCheck</h2>
        <OuiInputCheck checked={this.state.checked} onChange={this.onChange.bind(this)}>test</OuiInputCheck><br/>
        <OuiOutput>{this.state.checked ? "checked": "not checked"}</OuiOutput>
      </div>
    );
  }
}

class InputSelectDemo extends React.Component<{}, any> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {value: ""};
  }

  onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h2>InputSelect</h2>
        <OuiInputSelect value={this.state.value} onChange={this.onChange.bind(this)}>
          <option value=""></option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </OuiInputSelect>
      </div>
    );
  }
}

class InputTextDemo extends React.Component<{}, any> {
  constructor(props: Readonly<{}>) {
    super(props)
    this.state = {text: ""};
  }

  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      text: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h2>InputText</h2>
        <OuiInputText value={this.state.text} onChange={this.onChange.bind(this)} /><br/>
        <OuiOutput>{this.state.text}</OuiOutput>
      </div>
    );
  }
}

const App: React.FC = () => (
  <div style={{margin: "0 16px"}}>
    <h1>Components</h1>
    <ButtonDemo />
    <BreadcrumbDemo />
    <CardDemo />
    <FieldGroupDemo />
    <InputCheckDemo />
    <InputSelectDemo />
    <InputTextDemo />
  </div>
);

export default App;
