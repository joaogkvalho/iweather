import { mockCityAPIResponse } from '../../mocks/api/mockCityAPIResponse'
import { api } from './api'
import { getCityByNameService } from './getCityByNameService'

describe("Service: getCityByNameService", () => {
    it("should return city information", async () => {
        jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse })
        
        const response = await getCityByNameService("São Paulo")
        expect(response.length).toBeGreaterThan(0)
    })
})