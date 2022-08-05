import React from 'react'
import "./Test.css"

const Test = () => {
  return (
<div class="">
  <svg class="svg_class" viewBox="0 0 760 300">
    <symbol id="s-text">
      <text text-anchor="middle" x="50%" y="80%">Shobande James</text>
    </symbol>

    <g class = "g-ants">
      <use xlinkHref="#s-text" class="text-copy"></use>
      <use xlinkHref="#s-text" class="text-copy"></use>
      <use xlinkHref="#s-text" class="text-copy"></use>
      <use xlinkHref="#s-text" class="text-copy"></use>
      <use xlinkHref="#s-text" class="text-copy"></use>
    </g>
  </svg>
</div>
  )
}

export default Test