import React from "react"
import { Helmet } from "react-helmet"
import { useSelector } from "react-redux"
import Head from "@/components/Head"
import Menu from "@/components/Menu"
import MegaMenu from "@/components/MegaMenu"
import Footer from "@/components/Footer"
import Cookies from "@/components/Cookies"
import InstallModal from "@/components/Modals/InstallModal"
import * as style from "./style.module.scss"

const MainLayout = ({ children }) => {
  const megaMenuVisible = useSelector((state) => state.settings.megaMenu)

  return (
    <div className={style.layout}>
      <Helmet
        titleTemplate="RayWallet — %s"
        title="Cardano ADA Light Wallet with DeFi features"
      >
        <link
          rel="stylesheet"
          type="text/css"
          href="/resources/font/satoshi.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/resources/font/ray-icons.css"
        />
        <meta property="og:url" content="https://raywallet.io" />
        <meta
          name="description"
          content="Cardano ADA Advanced Light Wallet for Cardano Blockchain Platform. All about ADA finances (DeFi) in one place."
        />
      </Helmet>
      <div>
        <InstallModal />
        <Head />
        <Menu />
        {megaMenuVisible && <MegaMenu />}
        {children}
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
      <Cookies />
    </div>
  )
}

export default MainLayout
