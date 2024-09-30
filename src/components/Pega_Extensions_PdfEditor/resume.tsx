import React from 'react';
import type { PropsWithChildren } from 'react';
import { Text, View, Image, Page, StyleSheet, Font } from '@react-pdf/renderer';
import type { PageProps } from '@react-pdf/renderer';
import Header from './Header';
import Education from './Education';
import Skills from './Skills';
import Lion from './Lion';
import PieChart from './PieChart';
import Experience from './Experience';

const styles = StyleSheet.create({
  page: {
    padding: 30
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    '@media max-width: 400': {
      flexDirection: 'column'
    }
  },
  image: {
    marginBottom: 10
  },
  leftColumn: {
    flexDirection: 'column',
    width: 170,
    paddingTop: 0,
    paddingRight: 15,
    '@media max-width: 400': {
      width: '100%',
      paddingRight: 0
    },
    '@media orientation: landscape': {
      width: 200
    }
  },
  footer: {
    fontSize: 12,
    fontFamily: 'Lato Bold',
    textAlign: 'center',
    marginTop: 15,
    paddingTop: 5,
    borderWidth: 3,
    borderColor: 'gray',
    borderStyle: 'dashed',
    '@media orientation: landscape': {
      marginTop: 10
    }
  }
});

Font.register({
  family: 'Open Sans',
  src: 'https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf'
});

Font.register({
  family: 'Lato',
  src: 'https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf'
});

Font.register({
  family: 'Lato Italic',
  src: 'https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf'
});

Font.register({
  family: 'Lato Bold',
  src: 'https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf'
});

// Define the interface for Resume props
interface ResumeProps extends PageProps {
  title: string;
  name: string;
  skills: string[];
  schoollDesc: string;
  degree: string;
  school: string;
  sectionTitle: string;
}

const Resume: React.FC<PropsWithChildren<ResumeProps>> = ({
  title,
  name,
  skills,
  schoollDesc,
  degree,
  school,
  sectionTitle,
  ...props
}) => {
  return (
    <Page {...props} style={styles.page}>
      <Header />
      <View style={styles.container}>
        <View style={styles.leftColumn}>
          <Image src='https://avatars.githubusercontent.com/u/2925044?v=4' style={styles.image} />
          <Education
            schoollDesc={schoollDesc}
            degree={degree}
            school={school}
            sectionTitle={sectionTitle}
          />
          {/* Pass title, name, and skills as props to the Skills component */}
          <Skills title={title} name={name} skills={skills} />
          <PieChart />
        </View>
        <Experience />
      </View>
      <Text style={styles.footer}>This IS the candidate you are looking for</Text>
      <Lion />
    </Page>
  );
};

export default Resume;
