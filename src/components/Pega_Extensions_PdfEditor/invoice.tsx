/* eslint-disable @typescript-eslint/quotes */
import React from 'react';
import type { PropsWithChildren } from 'react';
import { Page, StyleSheet, Font } from '@react-pdf/renderer';
import type { PageProps } from '@react-pdf/renderer';
import {
  InvoiceTitle,
  InvoiceAddress,
  UserAddress,
  TableBody,
  TableHead,
  TableTotal
} from './InvoiceComps';

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
  src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf`
});

Font.register({
  family: 'Lato',
  src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`
});

Font.register({
  family: 'Lato Italic',
  src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`
});

Font.register({
  family: 'Lato Bold',
  src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`
});

// Define the interface for Resume props
interface InvoiceProps extends PageProps {}

const Invoice: React.FC<PropsWithChildren<InvoiceProps>> = ({ ...props }) => {
  return (
    <Page {...props} style={styles.page}>
      <InvoiceTitle />
      <InvoiceAddress />
      <UserAddress />
      <TableHead />
      <TableBody />
      <TableTotal />
    </Page>
  );
};

export default Invoice;
