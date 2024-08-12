import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";
import { api } from "./api";
import { getWeatherByCityService } from "./getWeatherByCityService";

const currentDay = new Date();
const nextDay = new Date();
nextDay.setDate(currentDay.getDate() + 1)

describe("Service: getWeatherByCityService", () => {
    it("should be return weather api data formated", async () => {
        jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse })

        const response = await getWeatherByCityService({ latitude: 123, longitude: 321 })
        expect(response).toHaveProperty("today")
    })
})