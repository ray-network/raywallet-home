import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Input, message, Tooltip } from "antd"
import { SVGRay, SVGCardano } from "@/svg"
import * as style from "./style.module.scss"

const Footer = () => {
  const networkState = useSelector((state) => state.settings.networkState)
  const [email, setEmail] = useState()
  const [loading, setLoading] = useState(false)

  const subscribe = async () => {
    const validEmail = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )

    if (validEmail) {
      let formData = new FormData()
      formData.append("EMAIL", email)
      setLoading(true)
      await fetch(
        "https://raynetwork.us20.list-manage.com/subscribe/post?u=630230660ec54c50b0c34762c&id=844a6bbde0",
        {
          method: "post",
          mode: "no-cors",
          body: formData,
        }
      )
      setLoading(false)
      setEmail()
      message.success("You have successfully subscribed!")
    } else {
      message.error("Please enter a valid email address.")
    }
  }

  return (
    <div className={style.outer}>
      <div className="ray__block mb-0">
        <div className="pb-5">
          <div className={style.footerTop}>
            <div className="row">
              <div className="col-12 col-sm-8 mb-3">
                <div className={`${style.footerLists} row`}>
                  <div className="col-6 col-sm-4 ">
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
                  <div className="col-6 col-sm-4">
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
                  <div className="col-12 col-sm-4">
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
                          <li>
                            <a href="https://twitter.com/PigzMetaverse">
                              @PigzMetaverse
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
              <div className="col-12 col-sm-4">
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
                <div className="mb-3">
                  <h6 className="mb-0">
                    <strong>Newsletter</strong>
                  </h6>
                </div>
                <div className="mb-4">
                  <Input.Search
                    placeholder="Enter your email"
                    allowClear
                    enterButton="Subscribe"
                    size="large"
                    value={email}
                    type="email"
                    onSearch={() => subscribe()}
                    onChange={(e) => setEmail(e.target.value)}
                    loading={loading}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-2">
              <a
                className={style.footerRay}
                href="https://raynetwork.io/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <SVGRay />
                <span>
                  <strong>Ray Network</strong>
                </span>
              </a>
            </div>
            <p className="mb-2 text-muted">
              Advanced Ecosystem for Cardano Blockchain Platform.{" "}
              <span>
                <span>Powered with</span>{" "}
                <a
                  href="https://cardano.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className={style.footerCardano}>
                    <SVGCardano />
                  </span>
                  <strong>Cardano</strong>
                </a>
              </span>
            </p>
            <p className="mb-2 text-muted">
              <span className="me-2 text-capitalize">
                Cardano Mainnet Status: Epoch{" "}
                {networkState?.currentEpoch?.number || 0}, Block{" "}
                {networkState?.tip?.number || 0}, Slot{" "}
                {networkState?.tip?.slotNo || 0}
              </span>
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

export default Footer
