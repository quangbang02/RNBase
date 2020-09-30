/**
 *
 * @format
 * @flow
 */
import {useContext} from 'react';
import {AppServiceContext} from './AppServiceProvider';
import * as AppService from './AppService';

export const useAppService = () => useContext(AppServiceContext);

export default AppService;
