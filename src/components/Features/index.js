import React, { useRef } from "react"
import AliceCarousel from "react-alice-carousel"
import * as style from "./style.module.scss"

const items = [
  {
    title: "Light Wallet",
    descr:
      "RayWallet is a web-based light wallet for Cardano available as a browser extension, mobile & desktop applications",
    icon: "ri ri-internet",
  },
  {
    title: "DeFi & DApps",
    descr:
      "Integrated DeFi features and native DApps right in RayWallet. User interface for quick access to the entire Cardano ecosystem",
    icon: "ri ri-code",
  },
  {
    title: "Non-Custodial",
    descr:
      "Wallet does not store any data or your keys on third-party servers - everything is stored on your device and encrypted using AES-256",
    icon: "ri ri-shield_check",
  },
  {
    title: "DApp Connector",
    descr:
      "MetaMask and Nami-like connector for authorization and signing transactions in decentralized applications",
    icon: "ri ri-compass",
  },
  {
    title: "XRAY ISPO",
    descr:
      "Join the distribution program to receive XRAY tokens. Stake ADA in Ray pools and get ~5% ROI with extra XRAY tokens",
    icon: "ri ri-activity",
  },
  {
    title: "Multi-Account Support",
    descr:
      "Use the ability to generate accounts from a single private key (seed phrase), for convenient separation of funds for different uses",
    icon: "ri ri-group",
  },
  {
    title: "Hardware Wallets",
    descr:
      "Ledger & Trezor give you the maximum guarantee against intruders - RayWallet fully supports these hardware wallets",
    icon: "ri ri-chip",
  },
  {
    title: "Mobile & Desktop Apps",
    descr:
      "Use any convenient format to access the decentralized world of Cardano - mobile or desktop applications are waiting for your attention",
    icon: "ri ri-crop",
  },
  {
    title: "Fast & Secure",
    descr:
      "DigitalOcean cluster provides quick access to data. Reliable and powerful servers are used for the fastest possible response to your actions",
    icon: "ri ri-check_circled",
  },
  {
    title: "Staking Center",
    descr:
      "Keep track of rewards and delegate to different pools with RayWallet without the headaches",
    icon: "ri ri-database",
  },
  {
    title: "Dark Theme",
    descr:
      "A dark theme for professional traders will help focus on the right results. Your eyes will be protected at night from bright light",
    icon: "ri ri-photos",
  },
  {
    title: "Balancer",
    descr:
      "Cloudflare Websockets Balancer will distribute the load to less loaded nodes in our ecosystem, giving fault-tolerant use of RayWallet with minimal latency",
    icon: "ri ri-dashboard",
  },
]

const Features = () => {
  const carousel = useRef(null)

  return (
    <div className="ray__block">
      <h5 className="ray__title" id="features">
        <div className={style.controls}>
          <span
            onClick={() => carousel.current.slidePrev()}
            onKeyPress={() => carousel.current.slidePrev()}
            role="button"
            tabIndex="0"
          >
            <i className="ri ri-chevron_backward" />
          </span>
          <span
            onClick={() => carousel.current.slideNext()}
            onKeyPress={() => carousel.current.slideNext()}
            role="button"
            tabIndex="0"
          >
            <i className="ri ri-chevron_forward" />
          </span>
        </div>
        DeFi Features & dApps
      </h5>
      <div className={style.slider}>
        <AliceCarousel
          ref={carousel}
          autoHeight={false}
          infinite
          disableButtonsControls
          disableDotsControls
          autoPlay
          autoPlayInterval={5000}
          mouseTracking
          autoWidth
        >
          {items.map((item, index) => (
            <div key={index} className={style.itemOuter}>
              <div className={style.item}>
                <div className={style.itemTitle}>{item.title}</div>
                <div className={style.itemDescr}>{item.descr}</div>
                <div className={style.itemIcon}>
                  <i className={item.icon} />
                </div>
              </div>
            </div>
          ))}
        </AliceCarousel>
      </div>
    </div>
  )
}

export default Features
