import { createGlobalStyle } from 'styled-components'

import { InterBold, InterBold2, InterRegular, InterRegular2 } from './fonts'

export default createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url(${InterBold2}) format('woff2'),
          url(${InterBold}) format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterRegular2}) format('woff2'),
          url(${InterRegular}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

`
