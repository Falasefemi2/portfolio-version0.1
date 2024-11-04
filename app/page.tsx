/* eslint-disable react/no-unescaped-entities */
'use client'
import PorfolioHeader from '@/components/Portfolio-Header'
import PortfolioContemt from '@/components/Portfolio-Content'
import PortfolioAboutMe from '@/components/Portfolio-AboutMe'
import PortfolioProject from '@/components/Portfolio-Project'
import PortfolioContact from '@/components/Portfolio-Contact'
import PortfolioFooter from '@/components/portfolio-footer'



export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Header */}
      <PorfolioHeader />

      {/* Main Content */}
      <main className="pt-20">
        <PortfolioContemt />
        <PortfolioAboutMe />
        <PortfolioProject />
        <PortfolioContact />
      </main>
      {/* Footer */}
      <PortfolioFooter />
    </div>
  )
}