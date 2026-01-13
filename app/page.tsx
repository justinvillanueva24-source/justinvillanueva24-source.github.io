import { Header } from "@/components/header"
import { ContractAddress } from "@/components/contract-address"
import { MainContent } from "@/components/main-content"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
        <ContractAddress />

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          <MainContent />
          <div className="hidden lg:block border-l border-gray-300" />
          <Sidebar />
        </div>
      </div>

      <Footer />
    </div>
  )
}
