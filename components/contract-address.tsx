"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ContractAddress() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "HCBDsCcLAefSqeeY1RDgruX2ZWiLzVAGnYhDLx9hpump"

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-[#f5f5f5] border border-[#ddd] p-4 mb-8">
      <p className="text-[#2d4a5e] font-bold mb-2">Contract Address (CA):</p>
      <div className="flex items-center justify-between gap-4">
        <code className="text-sm text-gray-700 break-all font-mono">{contractAddress}</code>
        <Button
          onClick={copyToClipboard}
          className="bg-[#2d4a5e] hover:bg-[#3a5a6e] text-white px-4 py-1 text-sm shrink-0"
        >
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>
    </div>
  )
}
