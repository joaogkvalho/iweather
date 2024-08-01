import { getNextDays } from './getNextDays'

test("should be return the next five days", () => {
    const days = getNextDays()
    console.log(days)
})