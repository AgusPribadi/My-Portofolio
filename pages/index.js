import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillGithub, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import Image from "next/image";
import agus from "../public/Agus Pribadi.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import web7 from "../public/web7.png";
import { useState } from "react";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <>
            <div className={darkMode ? "dark" : ""}>
                <Head>
                    <title>Agus Pribadi | Portofolio</title>
                    <meta name="description" content="Generated by create next app" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
                    <section className="min-h-screen">
                        <nav className="py-10 mb-12 flex justify-between">
                            <h1 className="text-xl dark:text-white">Agus Pribadi</h1>
                            <ul className="flex items-center">
                                <li>
                                    <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white" />
                                </li>
                                <li>
                                    <a href="CV - Agus Pribadi.pdf" download="CV - Agus Pribadi.pdf" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">
                                        Resume
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="text-center p-10">
                            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">Agus Pribadi</h2>
                            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">Backend Developer & Data Analyst</h3>
                            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                                Saya Adalah Mahasiswa Akhir Teknik Informatika di Universitas Muhammadiyah Pontianak, Saya Mengerjakan Web dan Aplikasi Machine Learning
                            </p>
                        </div>
                        <div className="text-5xl flex flex-col justify-center items-center gap-16 py-3 text-gray-600 dark:text-gray-400 sm:flex-row sm:justify-between sm:items-center sm:py-6">
                            <a href="https://twitter.com/ag_prbd339" target="_blank">
                                <AiFillTwitterCircle />
                            </a>
                            <a href="https://www.linkedin.com/in/agus-pribadi-2923b7162/" target="_blank">
                                <AiFillLinkedin />
                            </a>
                            <a href="https://www.youtube.com/@ag_prbd339" target="_blank">
                                <AiFillYoutube />
                            </a>
                            <a href="https://github.com/AgusPribadi" target="_blank">
                                <AiFillGithub />
                            </a>
                            <a href="https://www.instagram.com/ag_prbd339/" target="_blank">
                                <AiFillInstagram />
                            </a>
                            <a href="https://www.facebook.com/agprbd339/" target="_blank">
                                <AiFillFacebook />
                            </a>
                        </div>
                        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
                            <Image src={agus} layout="fill" objectFit="cover" />
                        </div>
                    </section>

                    <section>
                        <div className="lg:flex gap-10">
                            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                                <Image class="mx-auto" src={design} width={100} height={100} />
                                <h3 className="text-lg font-medium pt-8 pb-2">Website</h3>
                                <p className="py-2"> Membuat Website Yang Cantik dan Powerful</p>
                                <h4 className="py-4 text-teal-600">Teknologi yang saya gunakan</h4>
                                <p className="text-gray-800 py-1">Django</p>
                                <p className="text-gray-800 py-1">Laravel</p>
                                <p className="text-gray-800 py-1">Tailwind CSS</p>
                            </div>
                            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                                <Image class="mx-auto" src={code} width={100} height={100} />
                                <h3 className="text-lg font-medium pt-8 pb-2">Machine Learning</h3>
                                <p className="py-2"> Membuat Analisis Data Yang Tepat Untuk Perusahaan Anda</p>
                                <h4 className="py-4 text-teal-600">Teknologi Yang Saya Gunakan</h4>
                                <p className="text-gray-800 py-1">Python</p>
                                <p className="text-gray-800 py-1">Jupyter Notebook</p>
                                <p className="text-gray-800 py-1">Django</p>
                                <p className="text-gray-800 py-1">BI</p>
                            </div>
                            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                                <Image class="mx-auto" src={consulting} width={100} height={100} />
                                <h3 className="text-lg font-medium pt-8 pb-2">Manajer Proyek</h3>
                                <p className="py-2"> Manajemen Proyek Aplikasi Agar Dikerjakan Secara Optimal</p>
                                <h4 className="py-4 text-teal-600">Teknologi Yang Saya Gunakan</h4>
                                <p className="text-gray-800 py-1">Github</p>
                                <p className="text-gray-800 py-1">Trello</p>
                                <p className="text-gray-800 py-1">Microsoft Project</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div>
                            <h3 className="text-3xl py-1 dark:text-white">Portofolio</h3>
                            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">Berikut adalah portofolio yang pernah saya kerjakan</p>
                        </div>
                        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap ">
                            <div className="basis-1/3 flex-1">
                                <Image src={web1} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" />
                            </div>
                            <div className="basis-1/3 flex-1">
                                <Image src={web2} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" />
                            </div>
                            <div className="basis-1/3 flex-1">
                                <Image src={web3} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" />
                            </div>
                            <div className="basis-1/3 flex-1">
                                <Image src={web4} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" />
                            </div>
                            <div className="basis-1/3 flex-1">
                                <Image src={web5} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" />
                            </div>
                            <div className="basis-1/3 flex-1">
                                <Image src={web6} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" />
                            </div>
                            <div className="basis-1/3 flex-1">
                                <Image src={web7} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" />
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
