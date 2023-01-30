export default function Projects() {
  return;
  <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="min-h-screen w-full block" style={poppins.style}>
      {/* Navbar */}
      <nav className="p-5 bg-white shadow flex justify-between items-center">
        <div>
          <span className="text-2xl">Tochler Suputra</span>

          <span className="text-3xl cursor-pointer mx-2 md:hidden block">
            <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
          </span>
        </div>

        <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
          {/* Project */}
          <li className="mx-4 my-6 md:my-0">
            <a
              href="/projects"
              className="text-xl hover:text-cyan-500 duration-500"
            >
              PROJECT
            </a>
          </li>
          {/* Line */}
          <li className="mx-5 my-6 md:my-0 grid place-items-center">
            <div className="h-7 w-[2px] bg-black"></div>
          </li>
          {/* Resume */}
          <li className="mx-4 my-6 md:my-0">
            <a
              href="/resume"
              className="text-xl hover:text-cyan-500 duration-500"
            >
              RESUME
            </a>
          </li>
          {/* Line */}
          <li className="mx-5 my-6 md:my-0 grid place-items-center">
            <div className="h-7 w-[2px] bg-black"></div>
          </li>
          {/* Contact */}
          <li className="mx-4 my-6 md:my-0">
            <a
              href="/contact"
              className="text-xl hover:text-cyan-500 duration-500"
            >
              CONTACT
            </a>
          </li>
          <h2 className=""></h2>
        </ul>
      </nav>

      <div className="flex justify-center">
        <div className="h-[80vh] w-[70%] mt-10 bg-gray-600">
          <img className="w-[50%] h-[100%]" src="assets/brow.jpg"></img>
          <div>Tochler Suputra</div>
        </div>
      </div>

      {/*hero section start */}
      <section id="home" className="pt-36">
        <div className="container"> </div>
      </section>

      {/* copyright */}
      <div class="bg-gray-200 text-center lg:text-left flex justify-center items-center">
        <div
          className="text-gray-700 text-center p-4"
          className="background-color: rgba(0,
              0, 0, 0.2);"
        >
          {" "}
          © 2021 Copyright:
          <a class="text-gray-800" href="https://tailwind-elements.com/">
            Tailwind Elements
          </a>
        </div>
      </div>
    </main>
  </>;
}
