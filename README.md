<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## HoverableContainer

**Extends React.Component**

A container that has a mouseEnter and mouseLeave event handler.

### Parameters

-   `props` **[object][1]** 
    -   `props.onMouseEnter` **[function][2]** The function to invoke when the mouse enters the container.
    -   `props.onMouseLeave` **[function][2]** The function to invoke when the mouse leaves the container.
    -   `props.onMouseEnterDelay` **[number][3]?** The number of milliseconds to wait before invoking onMouseEnter.
    -   `props.onMouseLeaveDelay` **[number][3]?** The number of milliseconds to wait before invoking onMouseLeave.
    -   `props.containerStyle` **[object][1]?** Extra css styles to apply to the container.
    -   `props.delay` **[number][3]** The number of milliseconds to wait for both mouse events. (optional, default `300`)

### Examples

```javascript
import { HoverableContainer } from
"@alexseitsinger/react-hoverable-container"

const App = ({ onMouseEnter, onMouseLeave, ... }) => {
  return (
    <HoverableContainer
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <div>Some other content</div>
    </HoverableContainer>
  )
}
```

Returns **[function][2]** A component

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number