import axiosMock from 'axios';
import { getArDataAsync } from './arData';

jest.mock('axios');

describe('Tests for arData', () => {

    // Test aD.Err
    test('Test aD.Err - Error obj should be returned', async () => {
        // Arrange
        const error = { error: `Error` };
        axiosMock.get.mockRejectedValueOnce(error);
        // Act
        const result = await getArDataAsync();
        // Assert
        expect(result).toEqual(error);
    });

    // Test aD1
    test('Test aD1 - Data should be called', () => {
        // Arrange
        const tData = [{ id: 12, fields: { headline: `tHeadline`, thumbnail: `https://digitalfutures.com/wp-content/uploads/2021/02/yoast-logo.png` } }];
        axiosMock.get.mockResolvedValueOnce(tData);
        // Act
        getArDataAsync();
        // Assert
        expect(axiosMock.get).toHaveBeenCalledWith(process.env.REACT_APP_DATA_SERVICE_URL);
    });

    // Test aD2
    test('Test aD2 - Request should return correct data', async () => {
        // Arrange
        const t2Data = [{ id: 2, fields: { headline: `t2Headline`, thumbnail: `https://digitalfutures.com/wp-content/uploads/2021/02/yoast-logo.png` } }];
        axiosMock.get.mockResolvedValueOnce(t2Data);
        // Act
        const result = await getArDataAsync();
        // Assert
        expect(result).toEqual(t2Data.data);
    });

});