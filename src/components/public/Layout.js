/** @jsxImportSource @emotion/react */
import Header from './Header';
import * as React from 'react';
import style from '../../css/style';
import { Fab } from '@mui/material';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import { useEffect, useState } from 'react';
import { repoActions } from '../../store/repo/actions';

export default function Layout({ children }) {
  const [isHover, setIsHover] = useState(false);
  const { setMyRepoList } = useActions(repoActions, []);
  const { myRepoList } = useSelector(state => ({
    myRepoList: state.repoReducer.myRepoList,
  }));
  useEffect(() => {
    setMyRepoList({
      value: JSON.parse(window.localStorage.getItem('my_repo') || '[]'),
    });
  }, []);
  return (
    <>
      <Header />
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
      <main css={style.mainWrap}>{children}</main>
      <Link
        href={'/repo'}
        onMouseOver={() => {
          setIsHover(true);
        }}
        onMouseOut={() => {
          setIsHover(false);
        }}
      >
        <Fab
          className="fab"
          size="large"
          color="primary"
          variant={isHover ? 'extended' : 'circular'}
        >
          <BookmarksIcon />
          {isHover ? 'My Repository' : ''}
          {myRepoList?.length !== 0 ? (
            <b css={style.myRepoFab}>{myRepoList?.length}</b>
          ) : (
            ''
          )}
        </Fab>
      </Link>
    </>
  );
}
