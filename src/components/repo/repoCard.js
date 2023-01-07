/** @jsxImportSource @emotion/react */
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import style from '../../css/style';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import { NUMBER_SHORTCUT_OPTION } from '../../constants/const';
import { useActions } from '../../hooks/useActions';
import { repoActions } from '../../store/repo/actions';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

export default function RepoCard(data) {
  const { setMyRepo } = useActions(repoActions, []);
  const { myRepoList } = useSelector(state => ({
    myRepoList: state.repoReducer.myRepoList,
  }));
  const router = useRouter();
  const isMyRepo = router.pathname === '/repo';
  const { item, index } = data;
  const handleRegister = item => {
    setMyRepo({ item: item });
  };
  const isInMyRepo = myRepoList.some(i => {
    return i.id === item.id;
  });
  return (
    <div
      css={
        !isMyRepo ? style.searchCardWrapperStyle : style.myRepoCardWrapperStyle
      }
    >
      <div>
        {item.private === false ? (
          <AutoStoriesOutlinedIcon />
        ) : (
          <MenuBookOutlinedIcon />
        )}

        <div>
          <Typography variant="h4" component="h4">
            {item.full_name}
          </Typography>
          <Typography variant="p" component="p">
            {item.description}
          </Typography>
          <div>
            <StarBorderIcon />
            <Typography variant="p" component="p">
              {Intl.NumberFormat('en-US', NUMBER_SHORTCUT_OPTION).format(
                Number(item.stargazers_count),
              )}
            </Typography>
            <AdjustOutlinedIcon />
            <Typography variant="p" component="p">
              {Intl.NumberFormat('en-US', NUMBER_SHORTCUT_OPTION).format(
                Number(item.open_issues_count),
              )}
            </Typography>
          </div>
        </div>
      </div>
      <Button
        variant="contained"
        color={!isInMyRepo ? 'primary' : 'error'}
        onClick={() => {
          handleRegister(item);
        }}
      >
        {!isInMyRepo ? '등록하기' : !isMyRepo ? '해제하기' : '등록해제'}
      </Button>
    </div>
  );
}
