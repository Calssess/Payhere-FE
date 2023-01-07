import * as React from 'react';
import Container from '@mui/material/Container';
import Layout from '../../src/components/public/Layout';
import { useSelector } from 'react-redux';
import { useActions } from '../../src/hooks/useActions';
import { repoActions } from '../../src/store/repo/actions';
import { useEffect, useState, useCallback } from 'react';
import { ROW_PER_ISSUES_PAGE } from '../../src/constants/const';
import MyRepoButton from '../../src/components/issue/myRepoButton';
import IssueList from '../../src/components/issue/issueList';
import PaginationView from '../../src/components/issue/pagination';

export default function Index() {
  const { fetchIssues, setIssues } = useActions(repoActions, []);
  const { myRepoList, issueList } = useSelector(state => ({
    myRepoList: state.repoReducer.myRepoList,
    issueList: state.repoReducer.issueList,
  }));
  const [page, setPage] = useState(1);
  const [tabNum, setTabNum] = useState(-1);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setPage(1);
    setIssues({ value: [] });
  }, []);
  const handleFetchIssue = useCallback((page, index) => {
    setPage(page);
    const payload = {
      page: page,
      per_page: ROW_PER_ISSUES_PAGE,
      repoIndex: index,
    };
    return fetchIssues(payload);
  }, []);

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ pt: 2 }}>
        <MyRepoButton
          tabNum={tabNum}
          setTabNum={setTabNum}
          total={total}
          setTotal={setTotal}
          handleFetchIssue={handleFetchIssue}
        />
        <IssueList issueList={issueList} repoName={myRepoList[tabNum]?.name} />
        <PaginationView
          page={page}
          setPage={setPage}
          tabNum={tabNum}
          total={total}
          handleFetchIssue={handleFetchIssue}
        />
      </Container>
    </Layout>
  );
}
