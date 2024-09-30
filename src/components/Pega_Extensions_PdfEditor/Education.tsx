import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

import Title from './Title';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  school: {
    fontFamily: 'Lato Bold',
    fontSize: 10
  },
  degree: {
    fontFamily: 'Lato',
    fontSize: 10
  },
  candidate: {
    fontFamily: 'Lato Italic',
    fontSize: 10
  }
});

interface EDUProps {
  sectionTitle: string;
  school: string;
  degree: string;
  schoollDesc: string;
}

const Education: React.FC<EDUProps> = ({ sectionTitle, school, degree, schoollDesc }) => (
  <View style={styles.container}>
    <Title>{sectionTitle}</Title>
    <Text style={styles.school}>{school}</Text>
    <Text style={styles.degree}>{degree}</Text>
    <Text style={styles.candidate}>{schoollDesc}</Text>
  </View>
);

export default Education;
