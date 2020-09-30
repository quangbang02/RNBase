/**
 * @flow
 * @format
 */

export type ViewProps = {};

export type Props = {
  title: string,
  arrowColor?: string,
  useOnPressText: boolean,
  useArrowDownIcon: boolean,
  titleCustomStyle?: Object,
  containerStyle?: Object,
  onPressText?: Function,
  isCollapse?: boolean,
  rightButtonTitle?: string,
  ...View.propTypes,
};
