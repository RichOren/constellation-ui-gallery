import { Flex, Button, Icon, Progress } from '@pega/cosmos-react-core';
import React, { useEffect, useRef, useState } from 'react';
import { GlobalWorkerOptions, getDocument } from 'pdfjs-dist';
import type { PDFDocumentProxy, PDFPageProxy } from 'pdfjs-dist';
import './create-nonce';

// Set the PDF.js worker globally using the correct version from the import
GlobalWorkerOptions.workerSrc =
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.6.82/pdf.worker.min.mjs';

interface PDFViewerProps {
  url: string; // URL or path to the PDF
}

const PDFViewer: React.FC<PDFViewerProps> = ({ url }) => {
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const loadPDF = async () => {
      setLoading(true); // Start loading state

      if (!canvasRef.current) return;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      if (!ctx) return;

      try {
        // Load the PDF document
        const pdfDoc: PDFDocumentProxy = await getDocument(url).promise;
        setTotalPages(pdfDoc.numPages); // Get the total number of pages

        const page: PDFPageProxy = await pdfDoc.getPage(pageNum); // Load the current page

        // Set the desired scale (zoom level)
        const scale = 1;
        const viewport = page.getViewport({ scale });

        // Clear the canvas before rendering the new page
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Set canvas dimensions to match the page
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        // Render the page into the canvas
        const renderContext = {
          canvasContext: ctx,
          viewport
        };

        await page.render(renderContext).promise;
      } catch (err) {
        // console.error('Error rendering PDF:', err);
      } finally {
        setLoading(false); // End loading state
      }
    };

    loadPDF();
  }, [url, pageNum]);
  //  TODO: Bring in Theming OOTB as Much as Possible
  return (
    <Flex container={{ direction: 'column', alignItems: 'center', colGap: 1, rowGap: 1.5 }}>
      <Flex container={{ direction: 'row', alignItems: 'center', colGap: 1 }}>
        <Button disabled={pageNum <= 1} onClick={() => setPageNum(pageNum - 1)}>
          <Icon name='caret-left' />
        </Button>
        <span>
          Page {pageNum} of {totalPages}
        </span>
        <Button disabled={pageNum >= totalPages} onClick={() => setPageNum(pageNum + 1)}>
          <Icon name='caret-right' />
        </Button>
      </Flex>
      {loading && <Progress placement='local' visible={loading} message='Loading...' />}
      <div
        style={{
          height: '500px',
          overflow: 'auto',
          boxShadow: '2px 3px 12px -3px rgba(0,0,0,0.49)'
        }}
      >
        <canvas ref={canvasRef} />
      </div>
    </Flex>
  );
};

export default PDFViewer;
