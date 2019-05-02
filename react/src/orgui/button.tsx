import classNames from 'classnames';
import React from 'react';

const OuiButton: React.FC<any> = (props) => (
  <button {...props} className={classNames('ouiButton', props.className)}>{props.children}</button>
);

export default OuiButton;
