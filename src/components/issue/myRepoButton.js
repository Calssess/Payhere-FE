/** @jsxImportSource @emotion/react */
import * as React from 'react';
import style from '../../css/style';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Button from '@mui/material/Button';
import { Chip } from '@mui/material';
import { useActions } from '../../hooks/useActions';
import { repoActions } from '../../store/repo/actions';
import { useSelector } from 'react-redux';

export default function MyRepoButton(data) {
  const { tabNum, setTabNum, total, setTotal, handleFetchIssue } = data;
  const { setMyRepo, setIssues } = useActions(repoActions, []);
  const { myRepoList, fetchLoading } = useSelector(state => ({
    myRepoList: state.repoReducer.myRepoList,
    fetchLoading: state.repoReducer.fetchLoading,
  }));
  const handleDelete = item => {
    setTabNum(-1);
    setMyRepo({ item: item });
  };
  const handleClickRepo = (count, index) => {
    if (tabNum !== index) {
      setTabNum(index);
      setTotal(count);
      handleFetchIssue(1, index);
    } else {
      setTabNum(-1);
      setTotal(0);
      setIssues({ value: [] });
    }
  };
  if (myRepoList.length === 0) {
    return (
      <div css={style.cartListNoItemWrapper}>
        <Typography variant="h2" component="h2">
          등록한 Issue가 없습니다.
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
        return (
          <Chip
            disabled={fetchLoading}
            color={tabNum === index ? 'primary' : 'default'}
            key={item.id}
            label={item.full_name}
            onClick={() => {
              handleClickRepo(item.open_issues_count, index);
            }}
            onDelete={() => {
              handleDelete(item);
            }}
          />
        );
      })}
      <Typography
        variant="h3"
        component="h3"
        sx={{ mt: 2, mg: 2, textAlign: 'center' }}
      >
        {tabNum !== -1 ? (
          <>
            {!fetchLoading ? (
              <>
                Total Opened Issue : <strong>{total}</strong>
              </>
            ) : (
              ''
            )}
          </>
        ) : (
          'Repository를 선택해주세요'
        )}
      </Typography>
    </>
  );
}
