import React from "react"
import { render } from "@testing-library/react"
import { PureFooter as Footer } from "./index.js"

test("Renders without error", () => {
  const data = {
    site: {
      siteMetadata: {
        author: "Konnor Rogers",
      },
    },
  }
  const { asFragment } = render(<Footer data={data} />)
  expect(asFragment()).toMatchSnapshot()
})
