/**
 * @format
 * @flow
 */

export type ViewProps = {};
export type Props = {
  title?: string,
  message: string,
  contentView?: any,
  confirmLabel?: {title: string, type: 'normal' | 'danger'},
  cancelLabel?: {title: string, type: 'normal' | 'danger'},
  onConfirm?: Function,
  onCancel?: Function,
  onDismiss?: Function,
};
