import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Modal } from "antd"
import * as style from "./style.module.scss"

import ImagePWADesktop from "./images/pwa-desktop.png"
import ImagePWAiOS1 from "./images/pwa-ios-1.png"
import ImagePWAiOS2 from "./images/pwa-ios-2.png"
import ImagePWAAndroid1 from "./images/pwa-android-1.png"
import ImagePWAAndroid2 from "./images/pwa-android-2.png"

const InstallModal = () => {
  const dispatch = useDispatch()
  const modalInstall = useSelector((state) => state.settings.modalInstall)

  const handleCancel = () => {
    dispatch({
      type: "settings/CHANGE_SETTING",
      payload: {
        setting: "modalInstall",
        value: "",
      },
    })
  }

  return (
    <Modal
      title={`RayWallet ${modalInstall} Installation`}
      footer={null}
      visible={modalInstall}
      onCancel={handleCancel}
      width={420}
      closeIcon={<span className="ri ri-close" />}
      centered
    >
      {modalInstall === "Desktop" && (
        <div>
          <p>
            In Chrome, Brave, or Edge Browser, visit the app page and click
            install RayWallet on the right side of the address bar:
          </p>
          <p className="text-center">
            <img src={ImagePWADesktop} className={style.image} alt="" />
          </p>
          <div className="ray__line my-4" />
          <a
            href="https://app.raywallet.io"
            target="_blank"
            rel="noopener noreferrer"
            className="ray__btn ray__btn--round w-100"
          >
            <i className="ri ri-wallet me-2" />
            Visit RayWallet
          </a>
        </div>
      )}
      {modalInstall === "iOS" && (
        <div>
          <p>In Safari Browser, visit the app page and click the Share icon:</p>
          <p className="text-center">
            <img src={ImagePWAiOS1} className={style.image} alt="" />
          </p>
          <p>Then select the &#34;Add to Home Screen&#34; option:</p>
          <p className="text-center">
            <img src={ImagePWAiOS2} className={style.image} alt="" />
          </p>
          <div className="ray__line my-4" />
          <a
            href="https://app.raywallet.io"
            target="_blank"
            rel="noopener noreferrer"
            className="ray__btn ray__btn--round w-100"
          >
            <i className="ri ri-wallet me-2" />
            Visit RayWallet
          </a>
        </div>
      )}
      {modalInstall === "Android" && (
        <div>
          <p>
            In Chrome Browser, visit the app page and click settings icon on the
            right side of the address bar:
          </p>
          <p className="text-center">
            <img src={ImagePWAAndroid1} className={style.image} alt="" />
          </p>
          <p>Then select the &#34;Install app&#34; option:</p>
          <p className="text-center">
            <img src={ImagePWAAndroid2} className={style.image} alt="" />
          </p>
          <div className="ray__line my-4" />
          <a
            href="https://app.raywallet.io"
            target="_blank"
            rel="noopener noreferrer"
            className="ray__btn ray__btn--round w-100"
          >
            <i className="ri ri-wallet me-2" />
            Visit RayWallet
          </a>
        </div>
      )}
    </Modal>
  )
}

export default InstallModal
