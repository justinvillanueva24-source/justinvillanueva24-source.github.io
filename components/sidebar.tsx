import Link from "next/link"

export function Sidebar() {
  return (
    <aside className="w-full lg:w-64 shrink-0">
      {/* Horse News Section */}
      <div className="mb-8">
        <h3 className="text-[#2d4a5e] font-bold text-lg mb-4 border-b border-[#ddd] pb-2">Horse News</h3>
        <ul className="space-y-2">
          <li>
            <Link href="#galloping" className="text-[#2d4a5e] hover:underline text-sm">
              Satoshi&apos;s Daemon Galloping
            </Link>
          </li>
          <li>
            <Link href="#name-change" className="text-[#2d4a5e] hover:underline text-sm">
              Name change complete
            </Link>
          </li>
          <li>
            <Link href="#breaking-in" className="text-[#2d4a5e] hover:underline text-sm">
              Breaking in
            </Link>
          </li>
        </ul>
      </div>

      {/* Investor News Section */}
      <div>
        <h3 className="text-[#2d4a5e] font-bold text-lg mb-4 border-b border-[#ddd] pb-2">Investor News</h3>
        <ul className="space-y-2">
          <li>
            <Link href="#investing-info" className="text-[#2d4a5e] hover:underline text-sm">
              General Investing Information
            </Link>
          </li>
          <li>
            <Link href="#dividend" className="text-[#2d4a5e] hover:underline text-sm">
              Dividend Schedule (TBA)
            </Link>
          </li>
          <li>
            <Link href="#glbse" className="text-[#2d4a5e] hover:underline text-sm">
              Signed document at GLBSE
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}
