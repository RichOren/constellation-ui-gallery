import { Text, View, StyleSheet } from '@react-pdf/renderer';
import React from 'react';

import Title from './Title';
import List, { Item } from './List';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 11,
    marginBottom: 10
  },
  skills: {
    fontFamily: 'Lato',
    fontSize: 10,
    marginBottom: 10
  }
});

interface SkillEntryProps {
  name: string;
  skills: string[];
}
interface SkillProps {
  title: string;
  name: string;
  skills: string[];
}
const SkillEntry: React.FC<SkillEntryProps> = ({ name, skills }) => (
  <View>
    <Text style={styles.title}>{name}</Text>
    <List>
      {skills.map(skill => (
        <Item key={skill}>{skill}</Item>
      ))}
    </List>
  </View>
);

const Skills: React.FC<SkillProps> = ({ title, name, skills }) => (
  <View>
    <Title>{title}</Title>
    <SkillEntry name={name} skills={skills} />
  </View>
);

export default Skills;
