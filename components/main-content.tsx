import Link from "next/link"

export function MainContent() {
  return (
    <main className="flex-1 min-w-0">
      {/* Latest Updates Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#333] mb-8">Latest Updates</h2>

        {/* Main Article */}
        <article className="mb-8">
          <h3 className="text-2xl font-bold text-[#333] mb-2">$DAEMON on Solana: The Legacy Reborn</h3>
          <p className="text-gray-500 text-sm mb-4">Posted by Team — December 31, 2025</p>

          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              We are thrilled to announce the launch of <em className="font-semibold">$DAEMON</em> — a tribute token on
              Solana that revives the pioneering spirit of the original{" "}
              <Link
                href="https://bitcointalk.org/index.php?topic=78214.0"
                className="text-[#2d4a5e] underline"
                target="_blank"
              >
                Satoshi&apos;s Daemon
              </Link>{" "}
              project from the early days of Bitcoin and decentralized finance.
            </p>

            <p>
              $DAEMON is not just another meme coin. It is a cultural artifact rooted in crypto history: the first-ever
              racehorse funded via community investment on the GLBSE exchange in 2011. The original project introduced
              &quot;Bitcoin Interest Rights&quot; (BIRs)—a novel concept of shared upside without ownership—and captured
              the imagination of early Bitcoin adopters.
            </p>

            <p>
              The core team behind $DAEMON has acquired the original domain,{" "}
              <Link href="https://satoshisdaemon.com" className="text-[#2d4a5e] underline">
                satoshisdaemon.com
              </Link>
              , securing the authentic brand and lore. This move ensures that $DAEMON is the{" "}
              <strong>only legitimate continuation</strong> of the Satoshi&apos;s Daemon legacy—making it{" "}
              <em>unvampable and uncopyable</em> in spirit and identity.
            </p>

            <p>
              Built on Solana for speed, low fees, and true decentralization, $DAEMON honors its roots while embracing
              modern DeFi culture. The community is already active and growing, centered around shared values of
              authenticity, nostalgia, and innovation. Join the movement on{" "}
              <Link
                href="https://x.com/i/communities/2002777025719963956"
                className="text-[#2d4a5e] underline"
                target="_blank"
              >
                the official X Community
              </Link>
              .
            </p>

            <p>The contract address is permanently set and verified:</p>
            <p className="font-mono text-sm text-gray-600">HCBDsCcLAefSqeeY1RDgruX2ZWiLzVAGnYhDLx9hpump</p>

            <p>
              <em className="font-semibold">$DAEMON</em> is more than a token—it&apos;s a resurrection of a crypto
              legend, galloping once again into the future.
            </p>
          </div>
        </article>

        <hr className="border-t border-gray-300 my-8" />

        {/* Second Article - Addition of Satoshi's Daemon */}
        <article className="mb-8">
          <h3 className="text-2xl font-bold text-[#333] mb-2">Addition of Satoshi&apos;s Daemon</h3>
          <p className="text-gray-500 text-sm mb-4">Written by Administrator — October 2011</p>

          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              We are excited about the addition of{" "}
              <Link
                href="https://bitcointalk.org/index.php?topic=78214.0"
                className="text-[#2d4a5e] underline italic"
                target="_blank"
              >
                Satoshi&apos;s Daemon
              </Link>{" "}
              to our racing stable.
            </p>

            <p>
              She is a Louisiana-bred filly by Southern States (father), who is the son of stakes-placed winner Southern
              Halo (her grandfather), the leading sire in Argentina seven times while siring 170 stakes winners and 19
              champions.
            </p>

            <p>
              The dam (mother) of our new prospect is Honalua Honey, who broke her maiden on the turf with Maiden
              Special Weight company. She has produced four other foals of racing age, all of which became winners.
            </p>

            <p>
              Honalua Honey&apos;s sire is{" "}
              <Link
                href="https://en.wikipedia.org/wiki/Manila_(horse)"
                className="text-[#2d4a5e] underline"
                target="_blank"
              >
                Manila
              </Link>
              , a multiple stakes winner and the 1986 Eclipse Champion Turf Male (USA), inducted into the National
              Museum of Racing Hall of Fame in 2008.
            </p>

            <p>
              <strong>Satoshi&apos;s Daemon</strong> is a versatile, well-bred prospect with a bright racing future.
            </p>
          </div>
        </article>
      </section>
    </main>
  )
}
