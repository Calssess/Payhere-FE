/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { Pagination, PaginationItem, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { ROW_PER_ISSUES_PAGE } from '../../constants/const';

export default function PaginationView(data) {
  const { page, tabNum, handleFetchIssue, setPage, total } = data;
  const { fetchLoading } = useSelector(state => ({
    fetchLoading: state.repoReducer.fetchLoading,
  }));
  const handlePage = (page, tab) => {
    handleFetchIssue(page, tab);
    setPage(page);
  };
  return (
    <Stack spacing={2}>
      <Pagination
        count={Math.ceil(total / ROW_PER_ISSUES_PAGE)}
        shape="rounded"
        page={page}
        disabled={fetchLoading}
        renderItem={item => {
          return tabNum === -1 ? (
            ''
          ) : (
            <PaginationItem
              {...item}
              selected={item.page === page}
              onClick={() => {
                handlePage(item.page, tabNum);
              }}
            />
          );
        }}
      />
    </Stack>
  );
}
