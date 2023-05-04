import React, {createContext, useContext} from 'react';
import {View, Button, Text} from 'react-native';
import styles from './PracticeContextScreenStyles';

const ReporterContext = createContext();

const PracticeContextScreen = ({navigation}) => {
  const nameOfReporter = 'Jhon';
  const ageOfReporter = 35;

  return (
    <ReporterContext.Provider
      value={{nameOfReporter: nameOfReporter, ageOfReporter: ageOfReporter}}>
      <View style={styles.container}>
        <Text>Practice context screen</Text>
        <NewsList />
        <NewsList />
        <NewsList />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </ReporterContext.Provider>
  );
};

const NewsList = props => {
  return (
    <View>
      <NewsReporter />
      <View>
        <Text>News 1</Text>
      </View>
      <View>
        <Text>News 2</Text>
      </View>
      <View>
        <Text>News 3</Text>
      </View>
    </View>
  );
};

const NewsReporter = props => {
  const reporterInfo = useContext(ReporterContext);
  return (
    <View>
      <Text>Name: {reporterInfo.nameOfReporter}</Text>
      <Text>Age: {reporterInfo.ageOfReporter}</Text>
    </View>
  );
};

export default PracticeContextScreen;
