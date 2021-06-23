import React from 'react';
import { Provider } from 'react-redux';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddPostIT  from './index.jsx';
import configureStore from 'redux-mock-store';

const initialState = {
    };
const mockStore = configureStore();
const store = mockStore(initialState);
describe('Test AddPostIT', () => {
    const { container, queryByText } = render(
        <store>
            <AddPostIT/>
        </store>
    );
    expect(container.firstChild).toMatchSnapshot();
  });