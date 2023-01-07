/** @jsxImportSource @emotion/react */
import * as React from 'react';
import Container from '@mui/material/Container';
import style from '../../css/style';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from './Logo';

export default function Header() {
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <header css={style.headerWrap}>
      <Logo />
      <div>
        <Link
          href={'/search'}
          className={currentPath === '/search' ? 'on' : ''}
        >
          <Typography variant="h3" component="h3">
            Search
          </Typography>
        </Link>
        <Link href={'/repo'} className={currentPath === '/repo' ? 'on' : ''}>
          <Typography variant="h3" component="h3">
            My_Repository
          </Typography>
        </Link>
        <Link href={'/issue'} className={currentPath === '/issue' ? 'on' : ''}>
          <Typography variant="h3" component="h3">
            Issues
          </Typography>
        </Link>
      </div>
    </header>
  );
}
