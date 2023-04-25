import { renderHook } from '@testing-library/react-hooks';
import App from './App';

describe('when rendered', () => {
  it("returns current initial value", () => {
    const { result } = renderHook(
        () => App("Testing"),

        expect(result.current.value).toEqual("TESTING")
    )
  })
})
