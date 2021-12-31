import { Button } from "antd"
import React from "react"
import { SVGGithub } from "@/svg"
import * as style from "./style.module.scss"

const Promo = () => {
  return (
    <div className={style.container}>
      <div className="ray__block mb-0" id="watch">
        <div className={style.promo}>
          <h1>
            RayWallet <span className={style.promoBadge}>v2</span>
          </h1>
          <p>
            The most functional, lightweight, open-source non-custodial Cardano
            wallet with unique DeFi features and built-in native DApps
          </p>
          <Button className="ray__btn ray__btn--transparent ray__btn--round">
            <i className="ri ri-play_circled me-2" />
            <span>Watch Video</span>
            <span className={style.promoSoon}>SOON</span>
          </Button>
        </div>
        <div className={style.info}>
          <div>
            Ray Network is an advanced DeFi ecosystem for Cardano blockchain
            platform. Built with Cardano & Fully Open Sourced.{" "}
          </div>
          <div className="ms-4">
            <a
              href="https://github.com/ray-network"
              className="ray__btn ray__btn--transparentDark ray__btn--round"
            >
              <SVGGithub className="me-1" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promo
