import React from "react"
import MainLayout from "@/layouts/Main"
import Promo from "@/components/Promo"
import Stats from "@/components/Stats"
import Features from "@/components/Features"
import Download from "@/components/Download"
import Help from "@/components/Help"

const Page = () => {
  return (
    <MainLayout>
      <Promo />
      <Stats />
      <Features />
      <Download />
      <Help />
    </MainLayout>
  )
}

export default Page
