import Image from "next/image"

export default function ComingSoon() {
  return (
    <main className="container mx-auto h-screen flex justify-center items-center">
      <section className="px-4 w-full flex flex-col lg:flex-row justify-between items-center text-black">
        <aside className="w-full lg:w-1/2">
          <h1 className="text-6xl lg:text-7xl xl:text-8xl mb-5">
            <small className="text-3xl font-semibold">Our website is</small>
            <br />
            <span>Coming soon...</span>
          </h1>
          <h2>
            We&apos;re <span className="text-blue bg-white px-2 py-1 font-semibold rounded shadow-md">Under Construction
            </span>{" "}
          </h2>
          <h3 className="text-blue bg-white font-semibold text-2xl uppercase px-2 py-1 inline-block rounded shadow-md mt-5">Stay Tuned!</h3>
        </aside>
        <aside className="w-full lg:w-1/2 flex justify-center pl-4 mt-5">
          <Image src={"/h3vel-logo.png"} alt="H3vel-logo" width={550} height={450} className="w-full max-w-[550px] h-auto"/>
        </aside>
      </section>
    </main>
  )
}
