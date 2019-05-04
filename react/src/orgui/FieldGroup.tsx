import classNames from 'classnames';
import React from 'react';

interface OuiFieldGroupAttributes {
  label: string,
  required?: boolean,
  hazarding?: boolean,
}

class OuiFieldGroup extends React.PureComponent<React.HTMLAttributes<HTMLElement> & OuiFieldGroupAttributes> {
  static className = 'ouiFieldGroup';
  static classNames = {
    label: 'ouiFieldGroup__label',
    child: 'ouiFieldGroup__child',
    helpText: 'ouiFieldGroup__helpText',
  };

  render() {
    const {label, required, hazarding, ...divProps} = this.props;
    return (
      <div className={classNames(
        OuiFieldGroup.className,
        {
          'isRequired': required,
          'isHazarding': hazarding,
        },
        divProps.className,
      )}>
        <label className={OuiFieldGroup.classNames.label}>{label}</label>
        {divProps.children}
      </div>
    );
  }
}


export { OuiFieldGroup };
