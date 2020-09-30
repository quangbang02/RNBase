/**
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {
  View,
  Text,
  Animated,
  Platform,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {type Props, ViewProps} from './types';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../Theme/ThemeProvider';
import styles from './AlertViewStyles';

const AlertView = (props: Props & ViewProps) => {
  const {
    title,
    message,
    contentView,
    onCancel,
    onConfirm,
    onDismiss,
    confirmLabel,
    cancelLabel,
  } = props;

  const {t} = useTranslation();

  const {theme} = useTheme();

  const fadeOpacity = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeOpacity, {
      toValue: 1, // output
      duration: 150, // duration of the animation
    }).start();
  }, []);

  const AnimatedBlurView = Animated.createAnimatedComponent(
    Platform.OS === 'ios' ? View : View,
  );

  return (
    <Modal transparent>
      <AnimatedBlurView
        style={[styles.root, {opacity: fadeOpacity}]}
        blurType="light"
        blurAmount={5}>
        <View style={styles.containerView}>
          {!!title && (
            <View style={styles.headerView}>
              <Text style={styles.title}>{title}</Text>
            </View>
          )}
          {contentView !== undefined ? (
            contentView
          ) : (
            <Text style={styles.message}>{message}</Text>
          )}
          <View style={styles.footerView}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                Animated.timing(fadeOpacity, {
                  toValue: 0, // output
                  duration: 150, // duration of the animation
                }).start(() => {
                  if (onDismiss) {
                    onDismiss();
                  }
                  if (onCancel) {
                    onCancel();
                  }
                });
              }}>
              <Text
                style={[
                  styles.buttonLabel,
                  {color: theme.alertTintColor},
                  cancelLabel && cancelLabel.type === 'danger'
                    ? {color: theme.alertDangerColor}
                    : {},
                ]}>
                {cancelLabel ? cancelLabel.title : t('cancel')}
              </Text>
            </TouchableOpacity>
            <View style={styles.verticalSeparator} />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                Animated.timing(fadeOpacity, {
                  toValue: 0, // output
                  duration: 150, // duration of the animation
                }).start(() => {
                  if (onDismiss) {
                    onDismiss();
                  }
                  if (onConfirm) {
                    onConfirm();
                  }
                });
              }}>
              <Text
                style={[
                  styles.buttonLabel,
                  {color: theme.alertTintColor},
                  confirmLabel && confirmLabel.type === 'danger'
                    ? {color: theme.alertDangerColor}
                    : {color: theme.tintColor},
                ]}>
                {confirmLabel ? confirmLabel.title : t('ok')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </AnimatedBlurView>
    </Modal>
  );
};

AlertView.defaultProps = {
  title: undefined,
  contentView: undefined,
  onConfirm: undefined,
  onCancel: undefined,
  onDismiss: undefined,
  confirmLabel: undefined,
  cancelLabel: undefined,
};

export default AlertView;
