import React from 'react';
import ReactDOM from 'react-dom';
import { OuiColorVariation } from './orgui';
import { OuiAssist, OuiAssistItem } from './orgui/Assist';
import { OuiBreadcrumb, OuiBreadcrumbItem } from './orgui/Breadcrumb';
import { OuiButton } from './orgui/Button';
import { OuiCard, OuiShorthandCard } from './orgui/Card';
import { OuiFieldGroup } from './orgui/FieldGroup';
import { OuiInputCheck } from './orgui/InputCheck';
import { OuiInputSelect } from './orgui/InputSelect';
import { OuiInputText } from './orgui/InputText';
import { OuiOutput } from './orgui/Output';
import { OuiOverlay } from './orgui/Overlay';
import { OuiSwitch } from './orgui/Switch';
import keycode from 'keycode';
import { tsPropertySignature } from '@babel/types';

class AssistDemo extends React.Component<{}, any> {
  constructor(props: Readonly<{}>) {
    super(props)
    this.state = {
      text: "",
      suggests: [],
      selected: null,
    };
  }

  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const text = e.target.value;
    this.setState({
      text: text,
      suggests: text ? [...Array(3)].map((_, idx) => text + " " +idx) : [],
    });
  }

  onKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    const nextSelected = OuiAssist.nextSelected(
      this.state.selected,
      this.state.suggests.length,
      keycode.isEventKey(event.nativeEvent, 'up'),
      keycode.isEventKey(event.nativeEvent, 'down'),
    );
    let nextText = this.state.text;
    if (nextSelected !== null) {
      event.preventDefault();
      nextText = this.state.suggests[nextSelected];
    }

    this.setState({
      text: nextText,
      selected: nextSelected,
    });
  }

  render() {
    return (
      <div>
        <h2>Assist</h2>
        <OuiAssist
          suggests={this.state.suggests}
          renderSuggest={(s: string, idx: number) => (
            <OuiAssistItem key={idx} selected={idx === this.state.selected}>{s}</OuiAssistItem>
          )}
        >
          <OuiInputText value={this.state.text}
            onChange={this.onChange.bind(this)}
            onKeyDown={this.onKeyDown.bind(this)} />
        </OuiAssist>
      </div>
    );
  }
}

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
      <div>test</div>
    </OuiCard>
    <OuiShorthandCard colorVariation={OuiColorVariation.Warning}>
      Warning
    </OuiShorthandCard>
  </div>
);

const FieldGroupDemo: React.FC = () => (
  <div>
    <h2>FieldGroup</h2>
    <OuiFieldGroup label={<span style={{fontWeight: "bold"}}>Label</span>} required helpText="help">
      <OuiInputText />
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

class SwitchDemo extends React.Component<{}, any> {
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
        <h2>Switch</h2>
        <OuiSwitch checked={this.state.checked} onChange={this.onChange.bind(this)} /><br/>
        <OuiOutput>{this.state.checked ? "checked": "not checked"}</OuiOutput>
      </div>
    );
  }
}

class OverlayDemo extends React.Component<{rootElem: Element}, any> {
  constructor(props: Readonly<{rootElem: Element}>) {
    super(props);
    this.state = {displayed: false};
  }

  onClickOpen() {
    this.setState({displayed: true});
  }
  onClickClose() {
    this.setState({displayed: false});
  }

  render() {
    return (
      <div>
        <h2>Overlay</h2>
        <OuiButton onClick={this.onClickOpen.bind(this)}>Open</OuiButton>
        {this.state.displayed && <OuiOverlay rootElement={this.props.rootElem}>
          <OuiCard className="ouiFlexSideMargin">
            <h2>Modal</h2>
            <div>
              This card is modal on the overlay container.
            </div>
            <div style={{textAlign: 'right'}}>
              <OuiButton onClick={this.onClickClose.bind(this)}>Close</OuiButton>
            </div>
          </OuiCard>
        </OuiOverlay>}
      </div>);
  }
}

const App: React.FC<{rootElem: Element}> = (props) => (
  <div style={{margin: "0 16px"}}>
    <h1>Components</h1>
    <AssistDemo />
    <ButtonDemo />
    <BreadcrumbDemo />
    <CardDemo />
    <FieldGroupDemo />
    <InputCheckDemo />
    <InputSelectDemo />
    <InputTextDemo />
    <SwitchDemo />
    <OverlayDemo rootElem={props.rootElem} />
  </div>
);

export default App;
