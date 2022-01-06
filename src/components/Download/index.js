import React from "react"
import { Button } from "antd"
import { useDispatch } from "react-redux"
import * as style from "./style.module.scss"
import image1 from "./img1.jpg"
import image2 from "./img2.jpg"

const Download = () => {
  const dispatch = useDispatch()

  const handleModal = (type) => {
    dispatch({
      type: "settings/CHANGE_SETTING",
      payload: {
        setting: "modalInstall",
        value: type,
      },
    })
  }

  return (
    <div className="ray__block overflow-hidden">
      <h5 className="ray__title" id="download">
        Download RayWallet
      </h5>
      <div className={style.cards}>
        <div className={style.card}>
          <div className={style.cardName}>Web App</div>
          <p>Use the app in any modern browser. Fast and reliable</p>
          <a
            href="https://app.raywallet.io"
            className="ray__btn ray__btn--round ray__btn--transparent mt-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri ri-internet me-2" />
            Open
          </a>
        </div>
        <div className={style.card}>
          <div className={style.cardName}>macOS / Windows / Linux</div>
          <p>RayWallet desktop application for use on PCs and Macs</p>
          <span
            className="cursor-pointer ray__btn ray__btn--round ray__btn--transparent mt-auto"
            onClick={() => handleModal("desktop")}
            onKeyPress={() => handleModal("desktop")}
            role="button"
            tabIndex="0"
          >
            <i className="ri ri-add_circled me-2" />
            Install
          </span>
        </div>
        <div className={style.card}>
          <div className={style.cardName}>iOS</div>
          <p>Cardano mobile application for iOS users</p>
          <span
            className="cursor-pointer ray__btn ray__btn--round ray__btn--transparent mt-auto"
            onClick={() => handleModal("iOS")}
            onKeyPress={() => handleModal("iOS")}
            role="button"
            tabIndex="0"
          >
            <i className="ri ri-add_circled me-2" />
            Install
          </span>
        </div>
        <div className={style.card}>
          <div className={style.cardName}>Android</div>
          <p>Cardano mobile application for Android users</p>
          <span
            className="cursor-pointer ray__btn ray__btn--round ray__btn--transparent mt-auto"
            onClick={() => handleModal("Android")}
            onKeyPress={() => handleModal("Android")}
            role="button"
            tabIndex="0"
          >
            <i className="ri ri-add_circled me-2" />
            Install
          </span>
        </div>
      </div>
      <div className={style.ext}>
        <p>Web3 DApp Connector</p>
        <h1>
          <strong>
            RayWallet
            <br />
            Browser Extension
          </strong>
        </h1>
        <Button className="ray__btn ray__btn--extra ray__btn--round">
          <div>
            <i className="ri ri-download" />
            <div>
              <small>Install from</small>
              <br />
              Chrome Store
            </div>
            <span className={style.extSoon}>SOON</span>
          </div>
        </Button>
        <div className={style.image}>
          <img src={image1} alt="RayWallet Chrome Extension" />
        </div>
        <div className={style.image2}>
          <img src={image2} alt="RayWallet Chrome Extension" />
        </div>
        <div className={style.shadow} />
      </div>
    </div>
  )
}

export default Download
