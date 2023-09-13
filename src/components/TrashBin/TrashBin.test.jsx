import React from 'react';
import { render } from '@testing-library/react';
import { MdDeleteForever, MdUndo } from 'react-icons/md';

describe('TrashBin', () => {
  it('renders the deleteForever icon', () => {
    const { queryByTestId } = render(
      <MdDeleteForever />,
    );
    expect.objectContaining(queryByTestId);
  });

  it('renders the undo icon', () => {
    const { queryByTestId } = render(
      <MdUndo />,
    );
    expect.objectContaining(queryByTestId);
  });
});
