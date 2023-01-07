/** @jsxImportSource @emotion/react */
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Layout from '../../src/components/public/Layout';
import { useSelector } from 'react-redux';
import style from '../../src/css/style';
import Button from '@mui/material/Button';
import Link from 'next/link';
import RepoCard from '../../src/components/repo/repoCard';
import { useRouter } from 'next/router';

export default function Index() {
  const { myRepoList } = useSelector(state => ({
    myRepoList: state.repoReducer.myRepoList,
  }));

  const MyRepoListView = () => {
    if (myRepoList.length === 0) {
      return (
        <div css={style.cartListNoItemWrapper}>
          <Typography variant="h2" component="h2">
            등록한 Repository가 없습니다.
          </Typography>
          <Link href={'/search'}>
            <Button variant="outlined" color={'primary'}>
              Repository 찾기
            </Button>
          </Link>
        </div>
      );
    }
    return (
      <>
        {myRepoList.map((item, index) => {
          return <RepoCard key={item.id} item={item} index={index} />;
        })}
      </>
    );
  };
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ pt: 2 }}>
        <MyRepoListView />
      </Container>
    </Layout>
  );
}
