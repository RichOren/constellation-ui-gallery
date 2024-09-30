import { Grid, Flex, FieldGroup, withConfiguration } from '@pega/cosmos-react-core';
import { Document, PDFViewer } from '@react-pdf/renderer';

import Resume from './resume';

import type { PConnFieldProps } from './PConnProps';
import './create-nonce';

import StyledPegaExtensionsPdfEditorWrapper from './styles';
import Invoice from './invoice';

// interface for props
export interface PegaExtensionsPdfEditorProps extends PConnFieldProps {
  // If any, enter additional props that only exist on TextInput here
  author: string;
  keywords: string;
  subject: string;
  documentTitle: string;
  skills: string[];
  name: string;
  skillTitle: string;
  children: any;
  schoollDesc: string;
  degree: string;
  school: string;
  sectionTitle: string;
}

// props passed in combination of props from property panel (config.json) and run time props from Constellation
// any default values in config.pros should be set in defaultProps at bottom of this file
export const PegaExtensionsPdfEditor = (props: PegaExtensionsPdfEditorProps) => {
  const {
    children = [],
    author,
    keywords,
    subject,
    documentTitle,
    skills,
    name,
    skillTitle,
    schoollDesc,
    degree,
    school,
    sectionTitle
  } = props;

  const resumeProps = { skills, name, skillTitle, schoollDesc, degree, school, sectionTitle };
  const docProps = { author, keywords, subject, documentTitle };

  // resumeProps.skillTitle = 'Skills';
  // resumeProps.name = 'Combat Abilities';
  /* resumeProps.skills = [
    'Completed Jedi Master training and built a lightsaber from scratch in order to do battle against the Empire',
    'Defeated the Rancor and rescued Princess Leia from Jabba the Hutt',
    'Competent fighter pilot as well as an excelent shot with nearly any weapon'
  ]; */

  // docProps.author = 'Luke Skywalker';
  /* docProps.keywords = 'awesome, resume, start wars';
  docProps.subject = 'The resume of Luke Skywalker';
  docProps.documentTitle = 'Resume'; */

  const numRegions = children?.length;
  const gridRepeat = 'repeat('.concat(numRegions).concat(', 1fr)');
  const gridContainer = { colGap: 6, pad: 2 };
  // @ts-ignore
  gridContainer.cols = gridRepeat;
  // @ts-ignore
  gridContainer.alignItems = 'start';

  const flexContainer = { direction: 'column' };
  // @ts-ignore
  flexContainer.gap = 2;

  return (
    <StyledPegaExtensionsPdfEditorWrapper>
      <Grid container={{}}>
        <FieldGroup name='Resume Viewer'>
          <Flex container={{ ...flexContainer, direction: 'column' }}>
            <PDFViewer height='600px'>
              <Document
                author={docProps.author}
                keywords={docProps.keywords}
                subject={docProps.subject}
                title={docProps.documentTitle}
                pageMode='fullScreen'
                pageLayout='twoColumnRight'
                producer='Pega Constellation'
                pdfVersion='1.5'
              >
                <Invoice />
                <Resume
                  size='A4'
                  title={resumeProps.skillTitle}
                  name={resumeProps.name}
                  skills={resumeProps.skills}
                  schoollDesc={resumeProps.schoollDesc}
                  degree={resumeProps.degree}
                  school={resumeProps.school}
                  sectionTitle={resumeProps.sectionTitle}
                />
              </Document>
            </PDFViewer>
          </Flex>
        </FieldGroup>
      </Grid>
    </StyledPegaExtensionsPdfEditorWrapper>
  );
};

export default withConfiguration(PegaExtensionsPdfEditor);
