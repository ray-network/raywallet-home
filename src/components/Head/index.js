import React from "react"
import * as style from "./style.module.scss"

const Head = () => {
  return (
    <div className={style.container}>
      <div className="ray__block text-center mb-0">
        <a
          href="https://raynetwork.io/xray/distribution/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>
            <i className="ri ri-activity" /> XRAY Tokens 0% FEE ISPO is LIVE.
            Take part in the FREE tokens distribution &rarr;
          </strong>
        </a>
      </div>
    </div>
  )
}

export default Head
