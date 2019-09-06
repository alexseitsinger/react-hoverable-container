import React from "react"
import { HoverableContainer } from "../src"

const Content = () => (<div>Content</div>)

class HoverableComponent extends React.Component {
  state = {
    isHovered: false,
  }

  handleMouseEnter = e => {
    this.setState({isHovered: true})
  }

  handleMouseLeave = e => {
    this.setState({isHovered: false})
  }

  render() {
    const { delay } = this.props

    return (
      <HoverableContainer
        delay={delay}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
        <Content />
      </HoverableContainer>
    )
  }
}

const setup = delay => mount(<HoverableComponent delay={delay} />)

describe("<HoverableContainer />", () => {
  it("renders", () => {
    const delay = 300
    const wrapper = setup(delay)

    // ensure the component exists.
    expect(wrapper.find(<HoverableComponent />).exists).toBeTruthy()

    // check that the defaulkt state is false.
    expect(wrapper.state("isHovered")).toBe(false)

    wrapper.simulate("mouseenter")
    setTimeout(() => {
      expect(wrapper.state("isHovered")).toBe(true)
    }, delay)

    wrapper.simulate("mouseleave")
    setTimeout(() => {
      expect(wrapper.state("isHovered")).toBe(false)
    }, delay)
  })
})
