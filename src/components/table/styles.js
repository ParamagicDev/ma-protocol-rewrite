import { jsx, css } from "@emotion/core"

function toColor(colorMode) {
  return colorMode === "dark" ? "white" : "black"
}

export const table = colorMode => {
  const color = toColor(colorMode)
  return css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border: 1px solid ${color};
  `
}
export const row = ({ lastRow, heading, colorMode }) => {
  const color = toColor(colorMode)
  const borderBottom = lastRow ? "none" : `1px solid ${color}`

  const fontSize = heading ? "1.25rem" : "initial"
  const fontWeight = heading ? "bold" : "normal"

  return css`
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    display: flex;
    justify-content: flex-start;
    text-align: center;
    width: 100%;
    align-items: stretch;
    border-bottom: ${borderBottom};
  `
}

export const item = ({ columns, align, lastItem, colorMode }) => {
  const columnWidth = 100 / columns
  const color = toColor(colorMode)

  const borderRight = lastItem ? "none" : `1px solid ${color}`

  return css`
    width: ${columnWidth}%;
    border-right: ${borderRight};
    padding: 0.5rem;
    text-align: ${align};
  `
}

export const tableCell = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`