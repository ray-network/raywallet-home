import React from "react"
import { Link } from "gatsby"
import { Tooltip } from "antd"
import { useDispatch } from "react-redux"
import { SVGRay } from "@/svg"
import * as style from "./style.module.scss"
import imgWallet1 from "./wallet1.jpeg"
import imgWallet2 from "./wallet2.jpeg"

const MegaMenu = () => {
  const dispatch = useDispatch()

  const switchMegaMenu = () => {
    dispatch({
      type: "settings/SWITCH_MEGA_MENU",
    })
  }

  return (
    <div className={style.fixed}>
      <div className="ray__block mb-3">
        <div className={style.container}>
          <div className={style.menu}>
            <div className={style.menuLogo}>
              <Link to="/" className={style.logo}>
                <SVGRay />
                <span>Ray Network</span>
              </Link>
            </div>
            <div className={style.menuButtons}>
              <a
                href="https://app.raywallet.io"
                className="ant-btn ray__btn ray__btn--round"
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
      <div className="ray__block pt-3 mb-0">
        <div className="mb-5">
          <div>
            <div className="row">
              <div className="col-12 col-sm-8 mb-3">
                <div className={`${style.footerLists} row`}>
                  <div
                    className="col-6 col-sm-4"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="d-flex mb-4">
                      <h6 className="mb-0">
                        <strong>Cardano Solutions</strong>
                      </h6>
                    </div>
                    <ul className="list-unstyled mb-4">
                      <li>
                        <a href="https://raywallet.io">RayWallet</a>
                      </li>
                      <li>
                        <a href="https://raystake.io">RayStake</a>
                      </li>
                      <li>
                        <a href="https://rayswap.io">RaySwap</a>
                      </li>
                      <li>
                        <a href="https://raypad.io">RayPad</a>
                      </li>
                      <li>
                        <a href="https://minterr.io">Minterr.io</a>
                      </li>
                      <li>
                        <a href="https://raygraph.io">RayGraph</a>
                      </li>
                      <li>
                        <a href="https://raydata.io">RayData</a>
                      </li>
                      <li>
                        <a href="https://cardanolist.io">CardanoList.io</a>
                      </li>
                      <li>
                        <a href="https://github.com/ray-network/cardano-web3.js">
                          CardanoWeb3.js
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="col-6 col-sm-4"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="d-flex mb-4">
                      <h6 className="mb-0">
                        <strong>Information</strong>
                      </h6>
                    </div>
                    <ul className="list-unstyled mb-5">
                      <li>
                        <a href="https://raynetwork.io/xray/">XRAY Token</a>
                      </li>
                      <li>
                        <a href="https://raynetwork.io/xdiamond/">
                          XDIAMOND NFT
                        </a>
                      </li>
                      <li>
                        <a href="https://raynetwork.io/roadmap/">
                          Roadmap & Updates
                        </a>
                      </li>
                      <li>
                        <a href="https://raynetwork.io/wiki/">Wiki</a>
                      </li>
                      <li>
                        <a href="https://status.raynetwork.io/">Status</a>
                      </li>
                      <li>
                        <a href="https://raynetwork.io/about/">About</a>
                      </li>
                      <li>
                        <a href="https://raynetwork.io/whitepaper/">
                          Whitepaper
                        </a>
                      </li>
                      <li>
                        <a href="https://docs.raynetwork.io/">Docs</a>
                      </li>
                      <li>
                        <a href="https://raynetwork.io/audit/">Audit</a>
                      </li>
                      <li>
                        <a href="https://raynetwork.io/terms-of-use/">
                          Terms of Use
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="col-12 col-sm-4"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <div className="row">
                      <div className="col-6 col-sm-12">
                        <div className="d-flex mb-4">
                          <h6 className="mb-0">
                            <strong>Twitter</strong>
                          </h6>
                        </div>
                        <ul className="list-unstyled mb-5">
                          <li>
                            <a href="https://twitter.com/RayNetwork">
                              @RayNetwork
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/RayWallet">
                              @RayWallet
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/MinterrApp">
                              @MinterrApp
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/CardanoList">
                              @CardanoList
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-6 col-sm-12">
                        <div className="d-flex mb-4">
                          <h6 className="mb-0">
                            <strong>Socials</strong>
                          </h6>
                        </div>
                        <ul className="list-unstyled mb-4">
                          <li>
                            <a href="https://www.reddit.com/r/RayNetwork">
                              Reddit
                            </a>
                          </li>
                          <li>
                            <a href="https://t.me/RayNetwork">Telegram Chat</a>
                          </li>
                          <li>
                            <a href="https://t.me/RayNetworkChannel">
                              Telegram
                            </a>
                          </li>
                          <li>
                            <a href="https://discord.gg/WhZmm46APN">
                              Ray Network Discord
                            </a>
                          </li>
                          <li>
                            <a href="https://discord.gg/dDVXcthYWn">
                              Minterr Discord
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay="900">
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-6 col-sm-12">
                  <div className="mb-3">
                    <h6 className="mb-0">
                      <strong>RayWallet Apps</strong>
                    </h6>
                  </div>
                  <div className="mb-4">
                    <div>
                      <Tooltip title="Web Version">
                        <a
                          href="https://raywallet.io/#download"
                          className={style.footerApp}
                        >
                          <i className="ri ri-internet" />
                        </a>
                      </Tooltip>
                      <Tooltip title="Chrome Extension">
                        <a
                          href="https://raywallet.io/#download"
                          className={style.footerApp}
                        >
                          <i className="ri ri-chrome" />
                        </a>
                      </Tooltip>
                      <Tooltip title="macOS App">
                        <a
                          href="https://raywallet.io/#download"
                          className={style.footerApp}
                        >
                          <i className="ri ri-apple" />
                        </a>
                      </Tooltip>
                      <Tooltip title="Windows App">
                        <a
                          href="https://raywallet.io/#download"
                          className={style.footerApp}
                        >
                          <i className="ri ri-category" />
                        </a>
                      </Tooltip>
                    </div>
                    <div>
                      <Tooltip title="iOS App">
                        <a
                          href="https://raywallet.io/#download"
                          className={style.footerApp}
                        >
                          <i className="ri ri-apple" />
                        </a>
                      </Tooltip>
                      <Tooltip title="Android App">
                        <a
                          href="https://raywallet.io/#download"
                          className={style.footerApp}
                        >
                          <i className="ri ri-android" />
                        </a>
                      </Tooltip>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-12">
                  <div className="mb-3">
                    <h6 className="mb-0">
                      <strong>RayStake Apps</strong>
                    </h6>
                  </div>
                  <div className="mb-4">
                    <div>
                      <Tooltip title="Web Version">
                        <a
                          href="https://raystake.io/#download"
                          className={style.footerApp}
                        >
                          <i className="ri ri-internet" />
                        </a>
                      </Tooltip>
                      <Tooltip title="iOS App">
                        <a
                          href="https://raystake.io/#download"
                          className={style.footerApp}
                        >
                          <i className="ri ri-apple" />
                        </a>
                      </Tooltip>
                      <Tooltip title="Android App">
                        <a
                          href="https://raystake.io/#download"
                          className={style.footerApp}
                        >
                          <i className="ri ri-android" />
                        </a>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className={style.wallets}>
                <img src={imgWallet2} alt="RayWallet" />
                <img src={imgWallet1} alt="RayWallet" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <p className="mb-2 text-muted">
              Advanced Ecosystem for Cardano Blockchain Platform
            </p>
            <p className="mb-0 text-muted">
              {new Date().getFullYear()} &copy; Ray Labs DAO
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MegaMenu
