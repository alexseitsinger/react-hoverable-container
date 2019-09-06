import React from "react"
import PropTypes from "prop-types"
import _ from "underscore"

import { Container } from "./elements"

/**
 * A container that has a mouseEnter and mouseLeave event handler.
 *
 * @param {object} props
 * @param {function} props.onMouseEnter
 * The function to invoke when the mouse enters the container.
 * @param {function} props.onMouseLeave
 * The function to invoke when the mouse leaves the container.
 * @param {number} [props.onMouseEnterDelay]
 * The number of milliseconds to wait before invoking onMouseEnter.
 * @param {number} [props.onMouseLeaveDelay]
 * The number of milliseconds to wait before invoking onMouseLeave.
 * @param {object} [props.containerStyle]
 * Extra css styles to apply to the container.
 * @param {number} [props.delay=300]
 * The number of milliseconds to wait for both mouse events.
 *
 * @example
 * import { HoverableContainer } from
 * "@alexseitsinger/react-hoverable-container"
 *
 * const App = ({ onMouseEnter, onMouseLeave, ... }) => {
 *   return (
 *     <HoverableContainer
 *       onMouseEnter={onMouseEnter}
 *       onMouseLeave={onMouseLeave}>
 *       <div>Some other content</div>
 *     </HoverableContainer>
 *   )
 * }
 *
 * @returns {function} A component
 */
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
