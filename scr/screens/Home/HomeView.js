/**
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, Text, View, SafeAreaView} from 'react-native';
import useStyles from './HomeStyles';

export type Props = {
  newListData: Array,
};

const HomeView = (props: Props) => {
  const {t} = useTranslation();

  const styles = useStyles();

  useEffect(() => {}, []);

  return (
    <View style={[styles.container]}>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>{t('translation:welcome')}</Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

HomeView.defaultProps = {
  newList: [],
};

export default HomeView;
