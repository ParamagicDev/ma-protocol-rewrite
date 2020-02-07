import React from "react"
import { css } from "@emotion/core"
import Screen from "../utils/screen.js"

const colors = {
  basic: "green",
  advanced: "#ffbc0d",
  paramedic: "red",
}

const capitalize = level => {
  const firstLetter = level[0].toUpperCase()
  const restOfWord = level.slice(1)

  return firstLetter + restOfWord
}

const emtHeaderCSS = level => css`
  margin: 0;
  font-size: 1.2rem;
  color: ${colors[level]};

  ${Screen.small} {
    font-size: 1.3rem;
  }
`

const linkAnchorCSS = level => css`
  color: ${colors[level]};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const emtLevelCSS = level => css`
  margin: 0.5rem auto 2rem auto;
  padding: 0.5rem 0.75rem;
  border: 1.5px solid ${colors[level]};
  border-radius: 4px;
  font-size: 1.15rem;

  ${Screen.small} {
    font-size: 1.25rem;
  }
`

const EmtLevel = ({ children, level }) => {
  return (
    <>
      <h2 id={level} css={emtHeaderCSS(level)}>
        <a css={linkAnchorCSS(level)} href={`#${level}`}>
          {`EMT-${capitalize(level)}`}
        </a>
      </h2>
      <section className={level} css={emtLevelCSS(level)}>
        {children}
      </section>
    </>
  )
}

export default EmtLevel
