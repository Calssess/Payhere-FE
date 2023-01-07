import { css } from '@emotion/react';

const style = {
  mainWrap: css`
    background-color: #2b2e38;
    min-height: calc(100% - 50px);
    padding-bottom: 50px;
  `,
  headerWrap: css`
    padding: 30px 32px 0;
    background-color: #2b2e38;
    align-items: center;
    > h1 {
      color: #ffffff;
      font-size: 42px;
      font-weight: 900;
    }
    > div {
      display: flex;
      flex-wrap: wrap;
      margin-top: 18px;
      > .on {
        &:after {
          width: 100%;
        }
      }
      > a {
        margin: 0 15px 0 0;
        text-decoration: none;
        position: relative;
        font-size: 50px;
        > h3 {
          font-size: 50px !important;
        }
        &:hover {
          &:after {
            width: 100%;
          }
        }
      }
      > a:after {
        position: absolute;
        left: 0;
        top: 46px;
        width: 0;
        height: 6px;
        background-color: #ffffff;
        content: '';
      }
    }
  `,
  myRepoFab: css`
    top: 6px;
    right: 8px;
    width: 20px;
    height: 20px;
    z-index: 10;
    position: absolute;
    font-size: 13px;
    font-weight: 900;
    border-radius: 100%;
    position: absolute;
    background-color: #ef5350;
    color: #ffffff;
  `,
  cartListNoItemWrapper: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 0;
    a {
      text-decoration: none;
    }
    button {
      width: 400px;
      height: 72px;
      font-size: 26px;
      font-weight: 600;
      margin-top: 45px;
    }
  `,

  searchCardWrapperStyle: css`
    width: 100%;
    padding: 8px;
    background-color: #141721;
    margin: 8px 0px;
    display: flex;
    justify-content: space-between;
    border: 3px solid transparent;
    &:hover {
      border-color: #ffffff;
    }
    > div {
      display: flex;
      svg {
        color: #ffffff;
        font-size: 20px;
        margin: 2px 8px 0 0;
      }

      > div {
        padding: 0 16px 0 0;
        h4 {
          margin-bottom: 6px;
        }
        svg {
          color: #ffffff;
          font-size: 18px;
          margin: 2px 2px 0 0;
          &:nth-of-type(2) {
            margin: 3px 2px 0 6px;
          }
        }
        div {
          display: flex;
        }
      }
    }
    button {
      min-width: 85px;
      // height: 36px;
      margin: auto 0;
    }
  `,
  myRepoCardWrapperStyle: css`
    width: 100%;
    padding: 8px;
    background-color: #141721;
    margin: 8px 0px;
    display: flex;
    justify-content: space-between;
    border: 3px solid transparent;
    > div {
      display: flex;
      svg {
        color: #ffffff;
        font-size: 20px;
        margin: 2px 8px 0 0;
      }

      > div {
        padding: 0 16px 0 0;
        min-width: 200px;
        h4 {
          margin-bottom: 6px;
        }
        svg {
          color: #ffffff;
          font-size: 18px;
          margin: 2px 2px 0 0;
          &:nth-of-type(2) {
            margin: 3px 2px 0 6px;
          }
        }
        div {
          display: flex;
        }
      }
    }
    &:hover {
      border-color: #ffffff;
    }
    button {
      min-width: 85px;
      // height: 36px;
      margin: auto 0;
    }
  `,
  issueCard: css`
    background-color: #181a1f;
    cursor: pointer;
    padding: 7px;
    border: 3px solid transparent;
    &:hover {
      border-color: #ffffff;
    }
  `,
  noresult: css`
    text-align: 'center';
  `,
};
export default style;
