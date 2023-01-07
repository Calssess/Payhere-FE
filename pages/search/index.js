import * as React from 'react';
import Container from '@mui/material/Container';
import Layout from '../../src/components/public/Layout';
import { useActions } from '../../src/hooks/useActions';
import { useState, useCallback } from 'react';
import { CircularProgress, InputAdornment, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { repoActions } from '../../src/store/rootAction';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import RepositoryList from '../../src/components/search/repositoryList';

export default function Index() {
  const { fetchSearchRepo } = useActions(repoActions, []);
  const { fetchLoading } = useSelector(state => ({
    fetchLoading: state.repoReducer.fetchLoading,
  }));
  const [searchText, setSearchText] = useState('');
  // paging 처리용 state,
  const [page, setPage] = useState(1);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const handleSearchText = e => {
    setSearchText(e.target.value);
  };
  const handleEnterEvent = e => {
    if (e.key === 'Enter') {
      handleSearch(searchText, 1);
      setPage(1);
      e.preventDefault();
    }
  };
  const handleSearch = useCallback((searchText, page) => {
    if (searchText === '') {
      return alert('한글자이상 입력해주세요.');
    }
    setIsFirstRender(false);
    setPage(page);
    const payload = {
      page: page,
      q: searchText,
    };
    return fetchSearchRepo(payload);
  }, []);
  const InputAdornmentBtn = () => {
    return (
      <InputAdornment position="end">
        <Button
          variant="contained"
          color={'primary'}
          onClick={() => {
            handleSearch(searchText, 1);
          }}
          disabled={fetchLoading}
        >
          {!fetchLoading ? (
            '검색'
          ) : (
            <CircularProgress
              sx={{
                width: '24px !important',
                height: '24px !important',
              }}
            />
          )}
        </Button>
      </InputAdornment>
    );
  };

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ pt: 6 }}>
        <TextField
          value={searchText}
          onChange={handleSearchText}
          fullWidth
          variant="outlined"
          placeholder={'검색할 Repsitory 명을 입력해주세요.'}
          onKeyPress={handleEnterEvent}
          InputProps={{
            endAdornment: <InputAdornmentBtn />,
          }}
        />
        <Box
          sx={{
            mt: 2,
            pt: 4,
            pb: 4,
            borderTop: '6px solid #929598',
            borderBottom: '6px solid #929598',
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 10,
          }}
        >
          <RepositoryList
            isFirstRender={isFirstRender}
            page={page}
            handleSearch={handleSearch}
            searchText={searchText}
          />
        </Box>
      </Container>
    </Layout>
  );
}
