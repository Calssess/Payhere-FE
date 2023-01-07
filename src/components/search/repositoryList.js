/** @jsxImportSource @emotion/react */
import * as React from 'react';
import Typography from '@mui/material/Typography';
import RepoCard from '../repo/repoCard';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

export default function RepositoryList(data) {
  const { isFirstRender, page, handleSearch, searchText } = data;
  const { searchList, fetchLoading, totalSearchCount } = useSelector(state => ({
    searchList: state.repoReducer.searchList,
    fetchLoading: state.repoReducer.fetchLoading,
    totalSearchCount: state.repoReducer.totalSearchCount,
  }));
  if (searchList.length === 0 && !fetchLoading) {
    return (
      <Typography variant="h3" component="h3" sx={{ textAlign: 'center' }}>
        {isFirstRender === true
          ? 'Repository를 검색해주세요.'
          : '검색 결과가 없습니다.'}
      </Typography>
    );
  }
  const renderList = searchList.map((item, index) => {
    return <RepoCard key={item.id} item={item} index={index} />;
  });
  return (
    <>
      {/*  1페이지 검색 중일때는 이전 검색결과를 노출하지 않음*/}
      {fetchLoading && page === 1 ? '' : renderList}
      {!fetchLoading ? (
        !(searchList.length >= totalSearchCount) ? (
          //  현재 길이가 totalSearchCount보다 같거나 크면 더보기 표기 없애기
          <Typography
            variant="h3"
            component="h3"
            sx={{
              textAlign: 'center',
              margin: '16px 0 0',
              cursor: 'pointer',
            }}
            onClick={() => {
              handleSearch(searchText, page + 1);
            }}
          >
            <>
              <AddCircleIcon /> 더보기
            </>
          </Typography>
        ) : (
          ''
        )
      ) : (
        //  로딩중일대는 프로그레스 서클 표기
        <CircularProgress />
      )}
    </>
  );
}
