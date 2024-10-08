// individual style, comment out above, and uncomment here and add styles
import { type themeDefinition } from '@pega/cosmos-react-core';
import styled, { css } from 'styled-components';

export default styled.div(({ theme }: { theme: typeof themeDefinition }) => {
  return css`
    margin: 0px 0;
    .card {
      border: 0.0625rem solid ${theme.base.palette['border-line']};
      height: '500px';
      overflow: 'auto';
    }
    @-webkit-keyframes placeHolderShimmer{
        0%{
            background-position:-468px 0
        }
        100%{
            background-position:468px 0
        }
    }

    @keyframes placeHolderShimmer{
        0%{
            background-position:-468px 0
        }
        100%{
            background-position:468px 0
        }
    }

    .timeline-wrapper {
        background-color: #e9eaed;
        color: #141823;
        padding: 20px;
        border: 1px solid #ccc;
        margin: 0 auto 1em;
    }

    .timeline-wrapper.hide {
      /* Add your loading styles here */
      display: none;
    }

    .timeline-item {
        background: #fff;
        border: 1px solid;
        border-color: #e5e6e9 #dfe0e4 #d0d1d5;
        border-radius: 3px;
        padding: 12px;

        margin: 0 auto;
        max-width: 472px;
        min-height: 200px;
    }

    .animated-background {
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-name: placeHolderShimmer;
        animation-name: placeHolderShimmer;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        background: #f6f7f8;
        background: #eeeeee;
        background: -webkit-gradient(linear, left top, right top, color-stop(8%, #eeeeee), color-stop(18%, #dddddd), color-stop(33%, #eeeeee));
        background: -webkit-linear-gradient(left, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
        background: linear-gradient(to right,  #eeeeee 8%,#dddddd 18%,#eeeeee 33%);
        -webkit-background-size: 800px 104px;
        background-size: 800px 104px;
        height: 96px;
        position: relative;
    }

    .background-masker {
        background: #fff;
        position: absolute;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .outlined .background-masker {
        border: 1px solid #ddd;
    }


    .outlined:hover .background-masker {
        border: none;
    }

    .outlined:hover .background-masker:hover {
        border: 1px solid #ccc;
        z-index: 1;
    }

    .background-masker.header-top,
    .background-masker.header-bottom,
    .background-masker.subheader-bottom {
        top: 0;
        left: 40px;
        right: 0;
        height: 10px;
    }

    .background-masker.header-left,
    .background-masker.subheader-left,
    .background-masker.header-right,
    .background-masker.subheader-right {
        top: 10px;
        left: 40px;
        height: 8px;
        width: 10px;
    }

    .background-masker.header-bottom {
        top: 18px;
        height: 6px;
    }

    .background-masker.subheader-left,
    .background-masker.subheader-right {
        top: 24px;
        height: 6px;
    }


    .background-masker.header-right,
    .background-masker.subheader-right {
        width: auto;
        left: 300px;
        right: 0;
    }

    .background-masker.subheader-right {
        left: 230px;
    }

    .background-masker.subheader-bottom {
        top: 30px;
        height: 10px;
    }

    .background-masker.content-top,
    .background-masker.content-second-line,
    .background-masker.content-third-line,
    .background-masker.content-second-end,
    .background-masker.content-third-end,
    .background-masker.content-first-end {
        top: 40px;
        left: 0;
        right: 0;
        height: 6px;
    }

    .background-masker.content-top {
        height:20px;
    }

    .background-masker.content-first-end,
    .background-masker.content-second-end,
    .background-masker.content-third-end{
        width: auto;
        left: 380px;
        right: 0;
        top: 60px;
        height: 8px;
    }

    .background-masker.content-second-line  {
        top: 68px;
    }

    .background-masker.content-second-end {
        left: 420px;
        top: 74px;
    }

    .background-masker.content-third-line {
        top: 82px;
    }

    .background-masker.content-third-end {
        left: 300px;
        top: 88px;
    }
  `;
});
