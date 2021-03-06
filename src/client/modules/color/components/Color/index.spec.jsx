import React from 'react';
import { render, fireEvent } from 'test-utils';
import Color from '.';
import { fromJS, Map } from 'immutable';
import { translation } from '../../../../../translation/index';

describe('render properly', () => {
  beforeAll(() => {
    global.scrollTo = jest.fn();
  });
  const raw = {
    '1': {
      id: '1',
      like: 4,
      color: 'e5d12f#e5632f#d71a64#4c286f',
      userid: null,
      username: null,
      createdate: '1522956515000',
    },
    '2': {
      id: '2',
      like: 4,
      color: 'e5d12f#e5632f#d71a64#4c286f',
      userid: null,
      username: null,
      createdate: '1522956515000',
    },
  };
  const liked = Map({ '1': true, '2': true });
  const colorDef = fromJS(raw);
  const ids = Object.keys(raw);

  const cb = jest.fn();

  test('render loading', () => {
    const { container } = render(
      <Color
        list={[]}
        liked={liked}
        colorDef={colorDef}
        selectedId={null}
        loading
        vertical
        onLike={cb}
        onShare={cb}
        onEnter={cb}
        onDownload={cb}
      />
    );
    expect(container.querySelector('.spinContainer')).toBeTruthy();
  });
  test('render no data', () => {
    const { getByText } = render(
      <Color
        list={[]}
        liked={liked}
        colorDef={colorDef}
        selectedId={null}
        vertical
        onLike={cb}
        onShare={cb}
        onEnter={cb}
        onDownload={cb}
      />
    );

    expect(getByText(translation.en.noColorsToShow)).toBeTruthy();
  });
  test('render with data', () => {
    const { getByText } = render(
      <Color
        list={[...ids, '100']}
        liked={liked}
        colorDef={colorDef}
        selectedId={ids[0]}
        vertical
        onLike={cb}
        onShare={cb}
        onEnter={cb}
        onDownload={cb}
      />
    );
    expect(getByText('Download')).toBeTruthy();
  });
  test('click to enter', () => {
    const { container } = render(
      <Color
        list={[...ids, '100']}
        liked={liked}
        colorDef={colorDef}
        vertical
        onLike={cb}
        onShare={cb}
        onEnter={cb}
        onDownload={cb}
      />
    );

    fireEvent.click(container.querySelector('ul'));
    expect(cb).toBeCalled();
  });
});
