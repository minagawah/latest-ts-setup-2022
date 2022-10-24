import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import tw, { css } from 'twin.macro';

import { wrapperStyle } from '../styles';
import { useTimeout } from '../hooks/useTimeout';

const TIMEOUT_DURATION_SECONDS = 15;

const styles = {
  wrapper: css`
    ${wrapperStyle}
    ${tw`h-screen py-40 bg-black font-bold text-white text-lg`}
  `,
  title: tw`text-7xl`,
  link: tw`
    inline-block
    link:text-white
    hover:text-white
    visited:text-white
    underline
    text-4xl
    mt-1
  `,
  message: tw`mt-1`,
};

export const Splash: React.FC = () => {
  const navigate = useNavigate();

  useTimeout(() => {
    navigate('/home');
  }, TIMEOUT_DURATION_SECONDS * 1000);

  return (
    <div css={styles.wrapper}>
      <div css={styles.title}>Splash</div>

      <Link to="/home" css={styles.link}>
        Next
      </Link>

      <div css={styles.message}>
        Or, wait for {TIMEOUT_DURATION_SECONDS} sec.
      </div>
    </div>
  );
};
