import Image from "next/image";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full min-h-screen p-8"> 
          <a
            href="/websites/dripify"
            className="flex flex-col items-center border border-black/10 dark:border-white/20 rounded-lg p-4 hover:shadow-lg transition"
          >
            <Image
              src="/images/dripify.png"
              alt="Dripify"
              width={400}
              height={0}
              className="rounded-lg object-cover"
            />
            <span className="mt-3 font-medium text-lg">Dripify</span>
          </a>
          <a
            className="flex flex-col items-center border border-black/10 dark:border-white/20 rounded-lg p-4 hover:shadow-lg transition h-full"
            href="/websites/applestore"
          >
            <Image
              src="/images/apple.png"
              alt="Apple"
              width={300}
              height={0}
              className="rounded-lg object-cover"
            />
            <span className="mt-3 font-medium text-lg">Apple Store</span>
          </a>
          <a
            className="flex flex-col items-center border border-black/10 dark:border-white/20 rounded-lg p-4 hover:shadow-lg transition h-full"
            href="/websites/cogniai"
          >
            <Image
              src="/images/cogniAI.png"
              alt="CogniAI"
              width={300}
              height={0}
              className="rounded-lg object-cover"
            />
            <span className="mt-3 font-medium text-lg">CogniAI</span>
          </a>
          <a
            className="flex flex-col items-center border border-black/10 dark:border-white/20 rounded-lg p-4 hover:shadow-lg transition h-full"
            href="/websites/architect"
          >
            <Image
              src="/images/architect.png"
              alt="Architect"
              width={300}
              height={0}
              className="rounded-lg object-cover"
            />
            <span className="mt-3 font-medium text-lg">Architect</span>
          </a>
          <a
            className="flex flex-col items-center border border-black/10 dark:border-white/20 rounded-lg p-4 hover:shadow-lg transition h-full"
            href="/websites/clickup"
          >
            <Image
              src="/images/clickup.png"
              alt="ClickUp"
              width={300}
              height={0}
              className="rounded-lg object-cover"
            />
            <span className="mt-3 font-medium text-lg">Click Up</span>
          </a>
          <a
            className="flex flex-col items-center border border-black/10 dark:border-white/20 rounded-lg p-4 hover:shadow-lg transition h-full"
            href="/websites/freshfield"
          >
            <Image
              src="/images/freshfield.png"
              alt="Freshfield"
              width={300}
              height={0}
              className="rounded-lg object-cover"
            />
            <span className="mt-3 font-medium text-lg">Freshfield</span>
          </a>
          <a
            className="flex flex-col items-center border border-black/10 dark:border-white/20 rounded-lg p-4 hover:shadow-lg transition h-full"
            href="/websites/renewio"
          >
            <Image
              src="/images/renewio.png"
              alt="Renewio"
              width={300}
              height={0}
              className="rounded-lg object-cover"
            />
            <span className="mt-3 font-medium text-lg">Renewio</span>
          </a>
          <a
            className="flex flex-col items-center border border-black/10 dark:border-white/20 rounded-lg p-4 hover:shadow-lg transition h-full"
            href="/websites/health"
          >
            <Image
              src="/images/health.png"
              alt="Health"
              width={300}
              height={0}
              className="rounded-lg object-cover"
            />
            <span className="mt-3 font-medium text-lg">Health</span>
          </a>
          <a
            className="flex flex-col items-center border border-black/10 dark:border-white/20 rounded-lg p-4 hover:shadow-lg transition h-full"
            href="/websites/rebuild"
          >
            <Image
              src="/images/rebuild.png"
              alt="Rebuild"
              width={300}
              height={0}
              className="rounded-lg object-cover"
            />
            <span className="mt-3 font-medium text-lg">Rebuild</span>
          </a>
          <a
            className="flex flex-col items-center border border-black/10 dark:border-white/20 rounded-lg p-4 hover:shadow-lg transition h-full"
            href="/websites/ecofins"
          >
            <Image
              src="/images/ecofins.png"
              alt="Ecofins"
              width={300}
              height={0}
              className="rounded-lg object-cover"
            />
            <span className="mt-3 font-medium text-lg">Ecofins</span>
          </a>
          <a
            className="flex flex-col items-center border border-black/10 dark:border-white/20 rounded-lg p-4 hover:shadow-lg transition h-full"
            href="/websites/passionfroot"
          >
            <Image
              src="/images/passionfroot.png"
              alt="Passionfroot"
              width={300}
              height={0}
              className="rounded-lg object-cover"
            />
            <span className="mt-3 font-medium text-lg">PassionFroot</span>
          </a>
          <a
            className="flex flex-col items-center border border-black/10 dark:border-white/20 rounded-lg p-4 hover:shadow-lg transition h-full"
            href="/websites/wavespace"
          >
            <Image
              src="/images/wavespace.png"
              alt="Wavespace"
              width={300}
              height={0}
              className="rounded-lg object-cover"
            />
            <span className="mt-3 font-medium text-lg">WaveSpace</span>
          </a>
          <a
            className="flex flex-col items-center border border-black/10 dark:border-white/20 rounded-lg p-4 hover:shadow-lg transition h-full"
            href="/websites/ebook"
          >
            <Image
              src="/images/eBook.png"
              alt="eBook"
              width={300}
              height={0}
              className="rounded-lg object-cover"
            />
            <span className="mt-3 font-medium text-lg">eBook</span>
          </a>
          <a
            className="flex flex-col items-center border border-black/10 dark:border-white/20 rounded-lg p-4 hover:shadow-lg transition h-full"
            href="/websites/lyniq"
          >
            <Image
              src="/images/lyniq.png"
              alt="Lyniq"
              width={300}
              height={0}
              className="rounded-lg object-cover"
            />
            <span className="mt-3 font-medium text-lg">Lyniq</span>
          </a>
          <a
            className="flex flex-col items-center border border-black/10 dark:border-white/20 rounded-lg p-4 hover:shadow-lg transition h-full"
            href="/websites/unifi"
          >
            <Image
              src="/images/unifi.png"
              alt="Unifi"
              width={300}
              height={0}
              className="rounded-lg object-cover"
            />
            <span className="mt-3 font-medium text-lg">Unifi</span>
          </a>
          <a
            className="flex flex-col items-center border border-black/10 dark:border-white/20 rounded-lg p-4 hover:shadow-lg transition h-full"
            href="/websites/jeton"
          >
            <Image
              src="/images/jeton.png"
              alt="Jeton"
              width={300}
              height={0}
              className="rounded-lg object-cover"
            />
            <span className="mt-3 font-medium text-lg">Jeton</span>
          </a>
        </div>
      </main>
    </div>
  );
}


