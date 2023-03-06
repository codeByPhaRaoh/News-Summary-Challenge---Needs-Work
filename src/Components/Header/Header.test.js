import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from "react-router-dom";
import Header from './Header';

/**
 * @jest-environment jsdom
 */

// Test H1

test('Test H1 - Same snapshot should be rendered', () => {

    // Arrange
    const view = render(
        <Router>
            <Header />
        </Router>
    );
    // Act
    // Assert
    expect(view).toMatchSnapshot();

});