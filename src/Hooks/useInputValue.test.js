import { renderHook, act } from "@testing-library/react-hooks"
import { useInputValue } from "./useInputValue"


describe("when rendered", () => {
    it("return current value", () => {
        const { result } = renderHook(
            () => useInputValue("test test")
        )
        expect(result.current.value).toEqual("test test")
    });
})