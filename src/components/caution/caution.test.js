import React from "react"
import { render } from "@testing-library/react"
import Caution from "./index.js"

test("Renders without error", () => {
  const { asFragment } = render(<Caution />)
  expect(asFragment()).toMatchSnapshot()
})

test("Renders with different props", () => {
  const { asFragment, getByTestId } = render(
    <Caution
      id="caution-1"
      text="My caution"
      borderColor="green"
      data-testid="caution"
    />
  )
  expect(asFragment()).toMatchSnapshot()
  expect(getByTestId("caution")).toBeTruthy()
})
