import Head from "next/head";
import Image from "next/image";
import { Poppins } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>CV TOCHLER</title>
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
                href="#about"
                className="text-xl hover:text-cyan-500 duration-500"
              >
                ABOUT
              </a>
            </li>
            {/* Line */}
            <li className="mx-5 my-6 md:my-0 grid place-items-center">
              <div className="h-7 w-[2px] bg-black"></div>
            </li>
            {/* Resume */}
            <li className="mx-4 my-6 md:my-0">
              <a
                href="#resume"
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
                href="#contact"
                className="text-xl hover:text-cyan-500 duration-500"
              >
                CONTACT
              </a>
            </li>
            <h2 className=""></h2>
          </ul>
        </nav>

        {/* about */}
        <div id="about" className="relative">
          <div className="flex justify-center">
            <div className="flex flex-row h-[80vh] w-[70%] mt-10 bg-[#F5F5DC]">
              <div>
                <img
                  className="w-[150%] h-[100%] object-cover"
                  src="assets/seklh2.jpg"
                ></img>
              </div>
              <div className="w-[50%] h-[100%] pl-9 pt-7">
                <p className="text-[45px] font-bold">Tochler Suputra</p>
                <p className="text-[35px] font-medium">PROJECT CV</p>
                <br />
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam illo quia facilis cumque perspiciatis, ducimus
                  praesentium reprehenderit dolores vitae voluptatibus alias,
                  magni impedit, autem architecto illum voluptates omnis
                  repudiandae ipsum. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Doloribus libero optio deserunt voluptatem
                  sit cumque tempora, omnis nobis facere inventore doloremque
                  blanditiis nam velit, aut temporibus, nemo labore! Cum,
                  dignissimos.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="resume" className="mt-[110px] h-[135vh]">
          <div className="flex flex-col items-center">
            <p className="text-5xl font-extrabold">Resume</p>
            <div className="bg-black w-[250px] h-1"></div>
          </div>
          <div className="ml-[50px] mt-[55px] flex flex-col gap-[20px]">
            <p className="text-3xl font-extrabold">Pendidikan</p>
            <div className="flex flex-row gap-8 ml-[60px]">
              <div className="flex flex-col items-center gap-2">
                <div className="bg-sky-800 w-[20px] h-[20px] rounded-full"></div>
                <div className="bg-sky-800 w-1 h-[20px]"></div>
                <div className="bg-sky-800 w-1 h-[20px]"></div>
                <div className="bg-sky-800 w-1 h-[20px]"></div>
                <div className="bg-sky-800 w-[20px] h-[20px] rounded-full"></div>
                <div className="bg-sky-800 w-1 h-[20px]"></div>
                <div className="bg-sky-800 w-1 h-[20px]"></div>
                <div className="bg-sky-800 w-1 h-[20px]"></div>
                <div className="bg-sky-800 w-[20px] h-[20px] rounded-full"></div>
                <div className="bg-sky-800 w-1 h-[20px]"></div>
                <div className="bg-sky-800 w-1 h-[20px]"></div>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div className="text-2xl font-medium">
                  <p className="font-bold">SDN 2 SERANGAN</p>
                  <p>Sekolah Dasar Negri di Serangan</p>
                  <p>2012-2018</p>
                </div>
                <div className="text-2xl font-medium">
                  <p className="font-bold">SMP DHARMA WIWEKA</p>
                  <p>Sekolah Menengah Dasar di Pedungan</p>
                  <p>2018-2021</p>
                </div>
                <div className="text-2xl font-medium">
                  <p className="font-bold">SMK TI GLOBAL DEPANSAR</p>
                  <p>Sekolah Menengah Kejuruaan di Citarum</p>
                  <p>2021-sekarang</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-[50px] mt-[55px] flex flex-col justify-center gap-[20px]">
            <p className="text-3xl font-extrabold">Bahasa</p>
            <div className="flex flex-col gap-8 ml-[60px]">
              <div className="flex flex-row gap-5">
                <div className="triangle self-center"></div>
                <p className="text-3xl font-semibold">Bahasa Indonesia</p>
              </div>
              <div className="flex flex-row gap-5">
                <div className="triangle self-center"></div>
                <p className="text-3xl font-semibold">Bahasa Bali</p>
              </div>
            </div>
          </div>
        </div>

        {/* contact */}
        <div id="contact" className="h-[40vh] ">
          <div className="flex flex-col items-center">
            <p className="text-5xl font-extrabold">Contact</p>
            <div className="bg-black w-[250px] h-1"></div>
          </div>
          <div className="flex flex-row justify-center gap-5 w-[100%] mt-[40px]">
            <div className="bg-red-500 w-[25%] h-[110px] flex flex-col justify-center items-center rounded-xl">
              <p className="text-xl font-bold">Email</p>
              <p className="text-lg font-semibold">tochlersuputra@gmail.com</p>
            </div>
            <div className="bg-red-500 w-[25%] h-[110px] flex flex-col justify-center items-center rounded-xl">
              <p className="text-xl font-bold">Nomer</p>
              <p className="text-lg font-semibold">088987251020</p>
            </div>
            <div className="bg-red-500 w-[25%] h-[110px] flex flex-col justify-center items-center rounded-xl">
              <p className="text-xl font-bold">Instagram</p>
              <p className="text-lg font-semibold">@aapakhe</p>
            </div>
          </div>
        </div>

        {/* footer */}
        <div class="bg-gray-200 text-center lg:text-left flex justify-center items-center">
          <div className="text-gray-700 text-center p-4">
            {" "}
            <p class="text-gray-800">made by tochler</p>
          </div>
        </div>
      </main>
    </>
  );
}
