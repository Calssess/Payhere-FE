/** @jsxImportSource @emotion/react */
import * as React from 'react';
import style from '../../css/style';
import Typography from '@mui/material/Typography';
import { Box, CircularProgress, Grid, Link } from '@mui/material';
import { DATETIME_OPTION } from '../../constants/const';
import { useSelector } from 'react-redux';

export default function IssueList(data) {
  const { issueList, repoName } = data;
  const { fetchLoading } = useSelector(state => ({
    fetchLoading: state.repoReducer.fetchLoading,
  }));
  return (
    <Box
      sx={{ flexGrow: 1, mt: 4, mb: 2, minHeight: '600px', display: 'flex' }}
    >
      {!fetchLoading ? (
        <Grid container spacing={2}>
          {issueList.map(item => {
            return (
              <Grid key={item.id} item xs={4}>
                <Link href={item.html_url} target={'_blank'}>
                  <div css={style.issueCard}>
                    <Typography
                      variant="label"
                      component="label"
                      sx={{ marginRight: '8px' }}
                    >
                      {repoName}
                    </Typography>
                    <Typography
                      variant="label"
                      component="label"
                      sx={
                        item.state === 'open'
                          ? {
                              borderColor: '#04C28E',
                              color: '#04C28E',
                            }
                          : {
                              borderColor: '#FF5757',
                              color: '#FF5757',
                            }
                      }
                    >
                      {item.state}
                    </Typography>
                    <Typography
                      variant="h4"
                      component="h4"
                      sx={{ minHeight: 45, mt: '4px', mb: '6px' }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="p"
                      component="p"
                      sx={{ fontSize: '14px' }}
                    >
                      {item.state === 'open' ? (
                        <>
                          <strong>#{item.number}</strong>
                          {` opened on ${Intl.DateTimeFormat(
                            'en-US',
                            DATETIME_OPTION,
                          ).format(new Date(item?.created_at))} by `}
                          <strong>{item.user.login}</strong>
                        </>
                      ) : (
                        <>
                          <strong>#{item.number}</strong>
                          {` by `}
                          <strong>{item.user.login}</strong>
                          {` was closed on ${Intl.DateTimeFormat(
                            'en-US',
                            DATETIME_OPTION,
                          ).format(new Date(item?.closed_at))}`}
                        </>
                      )}
                    </Typography>
                  </div>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
}
