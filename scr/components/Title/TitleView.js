/**
 * @flow
 * @format
 */

import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './TitleStyles';
import {useTranslation} from 'react-i18next';
import {type Props} from './types';

const R = {
  arrowDown: require('../../../assets/icons/icon_arrow.png'),
};

const TitleView = (props: Props) => {
  const {
    isCollapse,
    title,
    onPressText,
    containerStyle,
    useOnPressText,
    arrowColor,
    useArrowDownIcon,
    textStyle,
    titleCustomStyle,
    rightButtonTitle,
  } = props;
  const {t} = useTranslation('Title');

  const seeRightButton = (
    <TouchableOpacity onPress={onPressText}>
      <Text style={[styles.onPressText]}>
        {rightButtonTitle || t('seeAll')}
      </Text>
    </TouchableOpacity>
  );

  const arrowDownIcon = (
    <Image
      source={R.arrowDown}
      style={[
        styles.arrowDownStyle,
        {
          tintColor: arrowColor,
          transform: [
            {
              rotate: isCollapse ? '270deg' : '90deg',
            },
          ],
        },
      ]}
    />
  );

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.titleText, titleCustomStyle, textStyle]}>
        {title}
      </Text>
      {!!useOnPressText && seeRightButton}
      {!!useArrowDownIcon && arrowDownIcon}
    </View>
  );
};

TitleView.defaultProps = {
  title: undefined,
  useOnPressText: false,
  useArrowDownIcon: false,
  onPressText: undefined,
  titleCustomStyle: undefined,
  containerStyle: undefined,
  rightButtonTitle: undefined,
  isCollapse: false,
};

export default TitleView;
