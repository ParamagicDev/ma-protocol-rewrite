import React from "react"
import { render } from "@testing-library/react"
import NextPage from "./index"

test("Renders without error", () => {
  const { asFragment } = render(<NextPage />)

  expect(asFragment()).toMatchSnapshot()
})
