import React from 'react';
import { Link } from 'react-router-dom';
import tw, { css } from 'twin.macro';

import { wrapperStyle as wrapperBaseStyle } from '../styles';

const styles = {
  wrapper: css`
    ${wrapperBaseStyle}
    ${tw`py-20 text-lg`}
  `,
  title: tw`text-3xl font-bold`,
  back: tw`mt-4`,
};

export const Home: React.FC = () => {
  return (
    <div css={styles.wrapper}>
      <div css={styles.title}>Home</div>

      <Link to="/" css={styles.back}>
        Back
      </Link>
    </div>
  );
};
