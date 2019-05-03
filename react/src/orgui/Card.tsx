import classNames from 'classnames';
import React from 'react';
import { OuiColorVariationAttributes } from '.';

class OuiCardItem extends React.Component<React.HTMLAttributes<HTMLElement>, {}> {
  render() {
    return (
      <a {...this.props} className={classNames(
        'ouiCardItem',
        this.props.className,
      )}>{this.props.children}</a>
    );
  }
}

interface OuiCardAttributes {
  children?: React.ReactElement<OuiCardItem>[] | React.ReactElement<OuiCardItem>
}

const OuiCard: React.FC<React.HTMLAttributes<HTMLElement> & OuiColorVariationAttributes & OuiCardAttributes> = (props) => {
  const {colorVariation, ...divProps} = props;
  return (
    <div {...divProps} className={classNames(
      'ouiCard',
      colorVariation,
      divProps.className,
    )}>{divProps.children}</div>
  );
}

const OuiShorthandCard: React.FC<React.HTMLAttributes<HTMLElement> & OuiColorVariationAttributes> = (props) => {
  const {colorVariation, ...divProps} = props;
  return (
    <div {...divProps} className={classNames(
      'ouiCard ouiCardItem',
      colorVariation,
      divProps.className,
    )}>{divProps.children}</div>
  );
}

export { OuiCard, OuiCardItem, OuiShorthandCard };
