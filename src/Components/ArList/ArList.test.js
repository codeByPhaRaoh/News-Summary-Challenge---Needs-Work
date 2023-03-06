import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import ArList from './ArList';
import testData from '../../../mockNewsData.json';

describe('ArList tests', () => {
    // Test aRL1


    test("Test aRL1 - No. of images should be the same as no. of articles", async () => {
        // Arrange
        render(<ArList data={testData.results} />);
        const imageElements = screen.getAllByRole("img");

        // Wait for all images to load
        await Promise.all(
            imageElements.map(
                (img) =>
                    new Promise((resolve, reject) => {
                        img.addEventListener("load", resolve);
                        img.addEventListener("error", reject);
                    })
            )
        );

        // Act
        const image = screen.getAllByRole("img");

        // Assert
        expect(image.length).toBe(testData.results.length);
    });


    // Test aRL2
    test('Test aRL2 - "Loading Your News Articles..." shown when data length = 0', () => {
        // Arrange
        render(<ArList data={[]} />);
        // Act
        // Assert
        expect(screen.getByText(/Loading Your News Articles.../i)).toBeInTheDocument();
    });


});
