import Image from "next/image";
import QuoteForm from "@/components/QuoteForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">

      {/* NAVBAR */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#" className="text-xl font-black tracking-tight">
            HARBOUR <span className="text-red-600">VINYL </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a href="#services" className="transition hover:text-red-600">
              Services
            </a>

            <a href="#gallery" className="transition hover:text-red-600">
              Gallery
            </a>

            <a
              href="#how-it-works"
              className="transition hover:text-red-600"
            >
              How It Works
            </a>

            <a
              href="#quote"
              className="rounded-full bg-red-600 px-5 py-2.5 text-white transition hover:bg-red-700"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-black px-6 pb-28 pt-40 text-white lg:px-10">
        <div className="absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-red-600/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* HERO TEXT */}
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.32em] text-red-500">
              Custom Vinyl • Decals • Graphics
            </p>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              YOUR IDEA.
              <br />
              <span className="text-red-600">
                MADE TO STICK.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-300">
              Custom vinyl decals made for cars, windows, laptops,
              businesses and more. Designed locally in Halifax,
              Nova Scotia.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#quote"
                className="rounded-full bg-red-600 px-7 py-3.5 font-bold text-white transition hover:bg-red-700"
              >
                Order a Custom Decal
              </a>

              <a
                href="#gallery"
                className="rounded-full border border-white/20 px-7 py-3.5 font-bold transition hover:bg-white hover:text-black"
              >
                View Our Work
              </a>
            </div>
          </div>

          {/* BRAND CARD */}
          <div className="flex items-center justify-center">
            <div className="rotate-[-4deg] rounded-[2rem] bg-white p-5 shadow-2xl transition duration-500 hover:rotate-0 hover:scale-105">
              <div className="rounded-[1.5rem] border-4 border-zinc-100 px-10 py-16 text-center">

                <p className="text-4xl font-black text-black sm:text-5xl">
                  HARBOUR
                </p>

                <p className="mt-1 text-5xl font-black text-red-600 sm:text-6xl">
                  VINYL
                </p>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="bg-zinc-100 py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-600">
            What We Make
          </p>

          <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
            Custom vinyl for almost anything.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
            From simple names and quotes to business branding and
            vehicle graphics, we can turn your idea into vinyl.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* VEHICLE */}
            <div className="rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="text-4xl">
                🚗
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Vehicle Decals
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Custom names, graphics, quotes and designs for cars,
                trucks and more.
              </p>
            </div>

            {/* BUSINESS */}
            <div className="rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="text-4xl">
                🏪
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Business Graphics
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Logos, storefront decals and custom branding for
                businesses.
              </p>
            </div>

            {/* PERSONAL */}
            <div className="rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="text-4xl">
                💻
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Personal Decals
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Personalize laptops, bottles, cases, windows and
                everyday items.
              </p>
            </div>

            {/* CUSTOM */}
            <div className="rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="text-4xl">
                ✨
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Custom Designs
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Have something different in mind? Send us your idea
                and we&apos;ll help bring it to life.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
      >
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-600">
          Our Work
        </p>

        <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
          Made to stand out.
        </h2>

        <p className="mt-4 max-w-xl leading-7 text-zinc-600">
          A look at some of our custom vinyl projects. Every piece
          is made specifically for the customer.
        </p>

        <div className="mt-12 grid auto-rows-[240px] gap-5 md:grid-cols-2 lg:grid-cols-3">

          {/* IMAGE 1 */}
          <div className="group relative overflow-hidden rounded-3xl md:row-span-2">
            <Image
              src="/gallery/img1.jpg"
              alt="Custom vinyl decal by Harbour Vinyl "
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-0 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-wider text-red-400">
                Harbour Vinyl 
              </p>

              <p className="mt-1 text-xl font-bold">
                Custom Vehicle Decals
              </p>
            </div>
          </div>

          {/* IMAGE 2 */}
          <div className="group relative overflow-hidden rounded-3xl">
            <Image
              src="/gallery/img2.jpg"
              alt="Custom vinyl design by Harbour Vinyl"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* IMAGE 3 */}
          <div className="group relative overflow-hidden rounded-3xl">
            <Image
              src="/gallery/img3.jpg"
              alt="Custom decal project by Harbour Vinyl "
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* IMAGE 4 */}
          <div className="group relative overflow-hidden rounded-3xl">
            <Image
              src="/gallery/img4.jpg"
              alt="Custom vinyl graphic by Harbour Vinyl "
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* IMAGE 5 */}
          <div className="group relative overflow-hidden rounded-3xl">
            <Image
              src="/gallery/img5.jpg"
              alt="Custom vinyl decal made by Harbour Vinyl "
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="bg-black py-24 text-white"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-500">
            Simple Process
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            From idea to vinyl.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Getting your custom decal made is simple. Send us what
            you have in mind and we&apos;ll handle the rest.
          </p>

          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

            <div className="border-t border-zinc-800 pt-7">
              <span className="text-5xl font-black text-red-600">
                01
              </span>

              <h3 className="mt-5 text-xl font-bold">
                Send Your Idea
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Tell us what you want, the approximate size and
                where you&apos;ll be using it.
              </p>
            </div>

            <div className="border-t border-zinc-800 pt-7">
              <span className="text-5xl font-black text-red-600">
                02
              </span>

              <h3 className="mt-5 text-xl font-bold">
                We Design It
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                We&apos;ll prepare your custom design and make sure
                everything looks right.
              </p>
            </div>

            <div className="border-t border-zinc-800 pt-7">
              <span className="text-5xl font-black text-red-600">
                03
              </span>

              <h3 className="mt-5 text-xl font-bold">
                Approve It
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Review the design before production so you know
                exactly what you&apos;re getting.
              </p>
            </div>

            <div className="border-t border-zinc-800 pt-7">
              <span className="text-5xl font-black text-red-600">
                04
              </span>

              <h3 className="mt-5 text-xl font-bold">
                We Make It
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Your decal is cut, prepared and made ready for you.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section
        id="quote"
        className="bg-zinc-100 px-6 py-24 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.6fr]">

          {/* QUOTE INFO */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-600">
              Custom Order
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Tell us what you want to make.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-600">
              Have a finished design or just an idea? Send us the
              details and we&apos;ll get back to you with a quote.
            </p>

            <div className="mt-10 space-y-7">

              {/* STEP 1 */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600 font-bold text-white">
                  1
                </div>

                <div>
                  <h3 className="font-bold">
                    Tell us what you need
                  </h3>

                  <p className="mt-1 leading-7 text-zinc-600">
                    Select the decal type, length, width and quantity.
                  </p>
                </div>
              </div>

              {/* STEP 2 */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600 font-bold text-white">
                  2
                </div>

                <div>
                  <h3 className="font-bold">
                    Send a reference
                  </h3>

                  <p className="mt-1 leading-7 text-zinc-600">
                    Upload your logo, picture or design if you already
                    have one.
                  </p>
                </div>
              </div>

              {/* STEP 3 */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600 font-bold text-white">
                  3
                </div>

                <div>
                  <h3 className="font-bold">
                    Get your quote
                  </h3>

                  <p className="mt-1 leading-7 text-zinc-600">
                    We&apos;ll review your request and contact you
                    with pricing.
                  </p>
                </div>
              </div>

            </div>

            {/* LOCAL SERVICE */}
            <div className="mt-10 rounded-3xl bg-black p-7 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
                Local Service
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Halifax, Nova Scotia
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Local pickup and delivery options can be discussed
                when your order is confirmed.
              </p>
            </div>
          </div>

          {/* QUOTE FORM */}
          <QuoteForm />

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 text-sm text-zinc-500 md:flex-row lg:px-10">

          <div>
            <p className="text-lg font-black tracking-tight text-zinc-900">
              HARBOUR{" "}
              <span className="text-red-600">
                VINYL 
              </span>
            </p>

            <p className="mt-2">
              Custom Vinyl • Decals • Graphics
            </p>
          </div>

          <div className="md:text-right">
            <p className="font-semibold text-zinc-700">
              Halifax, Nova Scotia
            </p>

            <p className="mt-2">
              © 2026 Harbour Vinyl All rights reserved.
            </p>
          </div>

        </div>
      </footer>

    </main>
  );
}