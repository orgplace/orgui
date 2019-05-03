import classNames from 'classnames';
import React from 'react';
import { OuiColorVariationAttributes } from '.';

const OuiButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & OuiColorVariationAttributes> = (props) => {
  const {colorVariation, ...buttonProps} = props;
  return (
    <button {...buttonProps} className={classNames(
      'ouiButton',
      colorVariation,
      buttonProps.className,
    )}>{buttonProps.children}</button>
  );
}

export { OuiButton };
