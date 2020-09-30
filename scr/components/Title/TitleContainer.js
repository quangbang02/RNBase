/**
 * @flow
 * @format
 */

import React from 'react';
import TitleView from './TitleView';
import {type Props} from './TitleView';

const TitleContainer = (props: Props) => {
  const {onPressText} = props;

  return <TitleView {...props} onPressText={onPressText} />;
};

export default TitleContainer;
