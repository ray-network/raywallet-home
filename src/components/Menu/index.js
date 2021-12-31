import React from "react"
import { Link } from "gatsby"
import { useDispatch } from "react-redux"
import * as style from "./style.module.scss"
import { SVGRay } from "@/svg"

const Menu = () => {
  const dispatch = useDispatch()

  const switchMegaMenu = () => {
    dispatch({
      type: "settings/SWITCH_MEGA_MENU",
    })
  }

  return (
    <div className={style.container}>
      <div className="ray__block mb-0">
        <div className={style.menu}>
          <div className={style.menuLogo}>
            <Link to="/" className={style.logo}>
              <SVGRay />
              <span>RayWallet</span>
            </Link>
          </div>
          <div className={style.menuItems}>
            <a href="#watch">Watch</a>
            <a href="#features">Features</a>
            <a href="#download">Download</a>
            <a href="#help">Help / FAQ</a>
          </div>
          <div className={style.menuButtons}>
            <a
              href="https://app.raywallet.io"
              className="ant-btn ray__btn ray__btn--white ray__btn--round"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri ri-wallet me-2" />
              <span>Open RayWallet</span>
            </a>
            <span
              className={style.switchIcon}
              onClick={switchMegaMenu}
              onKeyPress={switchMegaMenu}
              role="button"
              tabIndex="0"
              aria-label="Open Menu"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
