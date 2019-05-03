import classNames from 'classnames';
import React from 'react';

interface OuiInputCheckAttributes {
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

class OuiInputCheck extends React.Component<React.HTMLAttributes<HTMLElement> & OuiInputCheckAttributes, {}> {
  render() {
    const {checked, onChange, children, ...labelProps} = this.props;
    return (
      <label {...labelProps} className={classNames(
        'ouiInputCheck',
        this.props.className,
      )}>
        <input type="checkbox" className="ouiInputCheck__input" checked={checked} onChange={onChange} />
        <span className="ouiInputCheck__text">{children}</span>
      </label>
    );
  }
}

export { OuiInputCheck };
