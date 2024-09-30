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
  schoollDesc: string;
  degree: string;
  school: string;
  sectionTitle: string;
}

export const PegaExtensionsPdfEditor = (props: PegaExtensionsPdfEditorProps) => {
  const {
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
                pageLayout='singlePage'
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
