import classNames from 'classnames';
import React from 'react';
import { ColorVariationAttributes } from '.';

const OuiButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & ColorVariationAttributes> = (props) => (
  <button {...props} className={classNames(
    'ouiButton',
    props.colorVariation,
    props.className,
  )}>{props.children}</button>
);

export default OuiButton;
