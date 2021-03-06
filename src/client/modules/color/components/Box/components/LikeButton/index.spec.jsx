import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LikeButton from '.';

describe('render properly', () => {
  test('render color correct', () => {
    const clickFn = jest.fn();
    const { container } = render(
      <LikeButton likeNum={2} liked onToggle={clickFn} />
    );
    fireEvent.click(container.querySelector('button'));
    expect(clickFn).toBeCalled();
  });
});
