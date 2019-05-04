import classNames from 'classnames';
import React from 'react';

interface OuiOverlayAttributes {
  displayed?: boolean,
}

const OuiOverlay: React.FC<React.HTMLAttributes<HTMLElement> & OuiOverlayAttributes> = (props) => {
  let {displayed, style, ...divProps} = props;

  if (!displayed) {
    if (style) {
      style.display = 'none';
    } else {
      style = {'display': 'none'};
    }
  }

  return (
    <div {...divProps} className={classNames(
      'ouiOverlay',
      props.className,
    )} style={style}>{props.children}</div>
  );
}

export { OuiOverlay };
