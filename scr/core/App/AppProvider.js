/**
 *
 * @format
 * @flow
 */
import React, {useContext, createContext, useState, useRef} from 'react';
import {EventEmitter} from 'fbemitter';
import Toast from 'react-native-easy-toast';
import AlertView, {type Props as AlertViewProps} from './AlertView';

const eventEmitter = new EventEmitter();

type AlertProps = {
  ...AlertViewProps,
  show: boolean,
};

type AppContextType = {
  showOverlayLoading: () => void,
  hideOverlayLoading: () => void,
  showAlert: (props: AlertProps) => void,
  showToast: (message: string, duration?: number, callback?: Function) => void,
  eventEmitter: EventEmitter,
};

const AppContext: AppContextType = createContext();

const AppContextProvider = ({children}: {children: any}) => {
  const toast = useRef(undefined);
  const [loading, setLoading] = useState(false);
  const initAlertState = {
    message: '',
    show: false,
  };
  const [alertState, setAlertState] = useState(initAlertState);

  const showOverlayLoading = () => {
    setLoading(true);
  };
  const hideOverlayLoading = () => {
    setLoading(false);
  };
  const showAlert = ({
    title,
    message,
    contentView,
    onConfirm,
    onCancel,
    onDismiss,
    confirmLabel,
    cancelLabel,
  }: AlertProps) => {
    setAlertState({
      title,
      message,
      contentView,
      onConfirm: () => {
        setAlertState(initAlertState);
        if (onDismiss) {
          onDismiss();
        }
        if (onConfirm) {
          onConfirm();
        }
      },
      onCancel: () => {
        setAlertState(initAlertState);
        if (onDismiss) {
          onDismiss();
        }
        if (onCancel) {
          onCancel();
        }
      },
      confirmLabel,
      cancelLabel,
      show: true,
    });
  };

  const showToast = (
    text: string,
    duration: number = 500,
    callback: Function = () => {},
  ) => {
    if (toast && toast.current) {
      toast.current.show(text, duration, callback);
    }
  };

  const contextValue: AppContextType = {
    showOverlayLoading,
    hideOverlayLoading,
    showAlert,
    showToast,
    eventEmitter,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
      {!!alertState.show && <AlertView {...alertState} />}
      <Toast ref={toast} />
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const useApp = () => useContext(AppContext);
