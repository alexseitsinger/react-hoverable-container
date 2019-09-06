import React from "react"
import PropTypes from "prop-types"
import _ from "underscore"

import { Container } from "./elements"

export class HoverableContainer extends React.Component {
  static propTypes = {
    onMouseEnter: PropTypes.func.isRequired,
    onMouseEnterDelay: PropTypes.number,
    onMouseLeave: PropTypes.func.isRequired,
    onMouseLeaveDelay: PropTypes.number,
    containerStyle: PropTypes.object,
    delay: PropTypes.number,
  }

  static defaultProps = {
    delay: 300,
    containerStyle: {},
  }

  constructor(props) {
    super(props)

    const {
      delay,
      onMouseEnterDelay,
      onMouseLeaveDelay,
    } = props

    const mouseEnterDelay = (onMouseEnterDelay ? onMouseEnterDelay : delay)
    this.handleMouseEnter = _.debounce(this.handleMouseEnter, mouseEnterDelay)

    const mouseLeaveDelay = (onMouseLeaveDelay ? onMouseLeaveDelay : delay)
    this.handleMouseLeave = _.debounce(this.handleMouseLeave, mouseLeaveDelay)
  }

  handleMouseEnter = (e) => {
    const { onMouseEnter } = this.props
    onMouseEnter(e)
  }

  handleMouseLeave = (e) => {
    const { onMouseLeave } = this.props
    onMouseLeave(e)
  }

  render() {
    const {
      children,
      containerStyle,
    } = this.props

    return (
      <Container
        style={containerStyle}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
        {children}
      </Container>
    )
  }
}
