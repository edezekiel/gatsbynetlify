import React from "react"
import primitive from "./primitive.module.css"

export default ({ children }) => (
  <div className={primitive.container}>{children}</div>
)
