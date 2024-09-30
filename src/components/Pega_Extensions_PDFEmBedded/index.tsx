import { FieldGroup, withConfiguration } from '@pega/cosmos-react-core';
import { useEffect, useState } from 'react';
import type { PConnFieldProps } from './PConnProps';
import './create-nonce';
import StyledPegaExtensionsPdfEmBeddedWrapper from './styles';
import PDFViewer from './PDFViewer';
import LoadingSkeleton from './LoadingSkeleton';
import { createPdf } from './CreatePdf'; // Import the function
// interface for props
export interface PegaExtensionsPdfEmBeddedProps extends PConnFieldProps {
  // If any, enter additional props that only exist on TextInput here
  showLabel: boolean;
}

export const PegaExtensionsPdfEmBedded = (props: PegaExtensionsPdfEmBeddedProps) => {
  const { label, showLabel } = props;
  const propsToUse = { label, showLabel };
  const [pdfBlobUrl, setPdfBlobUrl] = useState<string | null>(null); // State to store the Blob URL
  const [isLoading, setIsLoading] = useState(true);

  const renderPdf = (pdfBytes: Uint8Array): void => {
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const blobUrl = URL.createObjectURL(blob);
    setPdfBlobUrl(blobUrl); // Set the blob URL in the state to pass to the PDFViewer
    setIsLoading(false);
  };

  /* const dataViewName = 'D_PDFDocumentList';
  const contextName = 'caseInfo.content';
  console.log('contextName:::', contextName);
  (window as any).PCore.getDataApiUtils()
    .getData(dataViewName, {}, contextName)
    .then((response: any) => {
      console.log('response:::', response);
    })
    .catch((error: any) => {
      console.log('error:::', error);
    }); */

  /*  useEffect(() => {
    const tempCaseID = getPConnect().getCaseInfo().getID();
    const className = getPConnect().getCaseInfo().getClassName();
    const classConverted = className.substring(0, className.lastIndexOf('-'));
    const caseID = `${classConverted} ${tempCaseID}`;
    const changeSet = { 'OU17QZ-CompPOC-Data-PDFDocument': { Author: 'Rich Oren' } };
    let eTag = '';
    const context = 'caseInfo.content';
    const fetchData = async () => {
      try {
        await (window as any).PCore.getDataApiUtils()
          .getCaseEditLock(caseID, context)
          .then((response: { headers: { etag: any } }) => {
            console.log('getCaseEditLockRes:::: ', response);
            eTag = response.headers.etag;
            console.log('eTagR:::: ', response.headers.etag);

            (window as any).PCore.getDataApiUtils()
              .updateCaseEditFieldsData(caseID, changeSet, eTag, context)
              .then((response2: any) => {
                console.log('updateCaseEditFieldsData:::: ', response2);
              })
              .catch((error: any) => {
                console.log('updateCaseEditFieldsDataErr:::: ', error);
              });
          })
          .catch((error: any) => {
            console.log('getCaseEditLockErr:::: ', error);
          });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    console.log('eTag:::: ', eTag);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

  // Handle the creation of the PDF
  const makePdf = async () => {
    await createPdf(setIsLoading, renderPdf);
  };

  // Call createPdf once when the component mounts
  useEffect(() => {
    makePdf();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //  TODO: Bring in Theming OOTB as Much as Possible
  return (
    <StyledPegaExtensionsPdfEmBeddedWrapper>
      <FieldGroup name={propsToUse.showLabel ? propsToUse.label : ''}>
        <LoadingSkeleton isLoading={isLoading} />
        {pdfBlobUrl && <PDFViewer url={pdfBlobUrl} />}
      </FieldGroup>
    </StyledPegaExtensionsPdfEmBeddedWrapper>
  );
};

export default withConfiguration(PegaExtensionsPdfEmBedded);
