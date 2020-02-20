import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import Screen from "../utils/screen.js"

const colors = {
  "first-responder": "deepskyblue",
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
  padding: 1.5rem;
  box-shadow: inset 0 0 5px 3px ${colors[level]};
  border-radius: 12px;
  font-size: 1.15rem;

  ul {
    padding-left: 1rem;
    padding-right: 0.5rem;
  }

  ${Screen.small} {
    font-size: 1.25rem;
  }
`

const EmtLevel = ({ children, level, medControl }) => {
  const standingOrders = " (Standing Orders)"
  const medicalControl = " (Medical Control)"

  function getLevel() {
    if (medControl) {
      return level + "-med-control"
    }

    return level
  }

  function toEmtText() {
    const text = `${capitalize(level)}`
    const levelText = `EMT-${text}`

    return levelText
  }

  function isFirstResponder(lvl) {
    if (lvl === "first-responder") {
      return true
    }

    return false
  }

  function firstResponderText() {
    const text = "First-Responder"
    console.log(level)

    if (!isFirstResponder(level)) {
      return null
    }

    if (medControl) {
      return text + medicalControl
    }

    return text + standingOrders
  }

  function getLevelText() {
    const firstResponderTxt = firstResponderText()
    if (firstResponderTxt) {
      return firstResponderTxt
    }

    const levelText = toEmtText(level)
    if (medControl) {
      return levelText + medicalControl
    }

    return levelText + standingOrders
  }
  return (
    <>
      <h2 id={getLevel()} css={emtHeaderCSS(level)}>
        <a css={linkAnchorCSS(level)} href={`#${getLevel()}`}>
          {getLevelText()}
        </a>
      </h2>
      <section className={level} css={emtLevelCSS(level)}>
        {children}
      </section>
    </>
  )
}

EmtLevel.propTypes = {
  level: PropTypes.node.isRequired,
}

export default EmtLevel
