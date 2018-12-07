import React from "react"

export default ({ item = {}, onToggle }) => (
  <li onClick={() => onToggle(item.id)}>
    {item.checked
      ? <s>{item.value}</s>
      : item.value}
  </li>
)
