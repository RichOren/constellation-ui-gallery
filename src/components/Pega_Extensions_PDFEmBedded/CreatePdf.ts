/* eslint-disable import/prefer-default-export */
import { PDFDocument } from 'pdf-lib'; // Make sure you import PDF-lib

export const createPdf = async (
  setIsLoading: (loading: boolean) => void,
  renderPdf: (pdfBytes: Uint8Array) => void
) => {
  setIsLoading(true);

  //  TODO: How do we make this code work as a prop without using eval()?
  // Please see examples Here: https://pdf-lib.js.org/
  const flagUrl = 'https://pdf-lib.js.org/assets/american_flag.pdf';
  const constitutionUrl = 'https://pdf-lib.js.org/assets/us_constitution.pdf';

  const flagPdfBytes = await fetch(flagUrl).then(res => res.arrayBuffer());
  const constitutionPdfBytes = await fetch(constitutionUrl).then(res => res.arrayBuffer());

  const pdfDoc = await PDFDocument.create();

  const [americanFlag] = await pdfDoc.embedPdf(flagPdfBytes);

  const usConstitutionPdf = await PDFDocument.load(constitutionPdfBytes);
  const preamble = await pdfDoc.embedPage(usConstitutionPdf.getPages()[1], {
    left: 55,
    bottom: 485,
    right: 300,
    top: 575
  });

  const americanFlagDims = americanFlag.scale(0.3);
  const preambleDims = preamble.scale(2.25);

  const page = pdfDoc.addPage();

  page.drawPage(americanFlag, {
    ...americanFlagDims,
    x: page.getWidth() / 2 - americanFlagDims.width / 2,
    y: page.getHeight() - americanFlagDims.height - 150
  });
  page.drawPage(preamble, {
    ...preambleDims,
    x: page.getWidth() / 2 - preambleDims.width / 2,
    y: page.getHeight() / 2 - preambleDims.height / 2 - 50
  });
  const pdfBytes = await pdfDoc.save();
  // END TODO

  renderPdf(pdfBytes); // Generate and set the Blob URL for the PDFViewer
  setIsLoading(false); // End loading state
};
