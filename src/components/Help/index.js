import React from "react"
import { Collapse } from "antd"
import * as style from "./style.module.scss"

const Help = () => {
  return (
    <div className="ray__block">
      <h5 className="ray__title ray__title--center" id="help">
        Help / FAQ
      </h5>
      <div className={style.help}>
        <Collapse accordion expandIcon={() => null}>
          <Collapse.Panel
            header={
              <div>
                What is RayWallet{" "}
                <i className="ri ri-chevron_down font-size-14 ms-1" />
              </div>
            }
            key="1"
          >
            <p>
              RayWallet is the most functional, lightweight, open-source
              non-custodial Cardano wallet with unique DeFi features and
              built-in dApps integrations.
            </p>
            <p>
              It's a whole Cardano DeFi ecosystem in one app - available for
              desktop and mobile.
            </p>
          </Collapse.Panel>
          <Collapse.Panel
            header={
              <div>
                Is Ray Wallet is compatible with HD wallets (Yoroi / Daedalus){" "}
                <i className="ri ri-chevron_down font-size-14 ms-1" />
              </div>
            }
            key="2"
          >
            <p>
              RayWallet will not track all addresses associated with your
              imported wallet, and might result in partial reflection of assets.
              Daedalus / Yoroi utilize the concept of multiple addresses per
              wallet, while RayWallet just uses a single address.
            </p>
            <p>
              RayWallet also allows to create sub accounts from a single private
              key. All accounts except the first one are hidden from Daedalus /
              Yoroi. We do not recommend using RayWallet and Daedalus / Yoroi
              simultaneously.
            </p>
            <p>
              We still prefer to create a new wallet for RayWallet to avoid
              confusion and keep the user experience great.
            </p>
            <p>
              If you want to migrate from Daedalus / Yoroi send all your funds
              to the address you see in RayWallet after importing the wallet.
              This is usually the very first address generated in Daedalus /
              Yoroi for you.
            </p>
          </Collapse.Panel>
          <Collapse.Panel
            header={
              <div>
                Can I stake / delegate ADA from my RayWallet{" "}
                <i className="ri ri-chevron_down font-size-14 ms-1" />
              </div>
            }
            key="3"
          >
            <p>
              Yes, you can make a delegation through the staking center{" "}
              <strong>Stake &rarr; ADA</strong>.
            </p>
          </Collapse.Panel>
          <Collapse.Panel
            header={
              <div>
                Multi Wallet / Account usage{" "}
                <i className="ri ri-chevron_down font-size-14 ms-1" />
              </div>
            }
            key="4"
          >
            <p>
              RayWallet has the ability to use multiple wallets. To add accounts
              to your wallet use{" "}
              <strong>Settings &rarr; Manage Accounts</strong>.
            </p>
          </Collapse.Panel>
          <Collapse.Panel
            header={
              <div>
                XRAY ISPO <i className="ri ri-chevron_down font-size-14 ms-1" />
              </div>
            }
            key="5"
          >
            <p className="mb-0">
              You can participate in XRAY ISPO through RayWallet - delegate ADAs
              to RAY pools and get your extra rewards. Visit{" "}
              <strong>Stake &rarr; ISPO</strong> section.
            </p>
          </Collapse.Panel>
        </Collapse>
      </div>
    </div>
  )
}

export default Help
