import { jsx, css } from "@emotion/core"

function toColor(colormode) {
  return colormode === "dark" ? "white" : "black"
}

export const table = ({ colorMode, minWidth }) => {
  minWidth = minWidth || "400px"
  const color = toColor(colorMode)
  return css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border: 1px solid ${color};
    min-width: ${minWidth};
  `
}
export const row = ({ lastRow, heading, colorMode }) => {
  const color = toColor(colorMode)
  const borderBottom = lastRow ? "none" : `1px solid ${color}`

  const fontSize = heading ? "1.15rem" : "initial"
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

export const item = ({ colspan, tableColumns, align, lastItem, colorMode }) => {
  const columnWidth = (100 / tableColumns) * colspan
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
