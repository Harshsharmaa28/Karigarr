
export default function Faqs() {
    return (
        <div className=" h-screen overflow-hidden bg-[url('/fbg.png')] -z-10">
            <div class="mx-auto px-5 z-10">
                <div class="flex flex-col items-center">
                    <h2 class="text-5xl mt-14 tracking-tight font-black">
                        Frequently Asked Question
                    </h2>
                    <p class="text-neutral-500 text-xl text-center mt-3 w-[70vw]">
                    A frequently asked question (FAQ) is a concise list of common inquiries and their answers, typically found on websites or documents.
                    </p>
                </div>
                <div className=" bg-white border border-black w-[60vw] mx-auto h-[60vh] rounded-xl mt-10 overflow-scroll custom-scrollbar overflow-x-hidden">
                    <div class="flex flex-col divide-neutral-300 w-[50vw] mt-8 mx-auto">
                        <div class="py-5 flex flex-col gap-5">
                            <details class="group">
                                <summary class="flex justify-between items-center font-medium cursor-pointer list-none w-[50vw]">
                                    <span className=" font-bold text-xl">Q1. How to get Work Here ?</span>
                                    <span class="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                    SAAS platform is a cloud-based software service that allows users to access
                                    and use a variety of tools and functionality.
                                </p>
                            </details>
                            <div className=" bg-gray-400 h-[1px]"></div>
                        </div>
                        <div class="py-5 flex flex-col gap-5">
                            <details class="group">
                                <summary class="flex justify-between items-center font-medium cursor-pointer list-none w-[50vw]">
                                    <span className=" font-bold text-xl">Q2. How to find the Best Possible Service ?</span>
                                    <span class="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                    SAAS platform is a cloud-based software service that allows users to access
                                    and use a variety of tools and functionality.
                                </p>
                            </details>
                            <div className=" bg-gray-400 h-[.5px]"></div>
                        </div>
                        <div class="py-5 flex flex-col gap-5">
                            <details class="group">
                                <summary class="flex justify-between items-center font-medium cursor-pointer list-none w-[50vw]">
                                    <span className=" font-bold text-xl">Q3.How this Platform Works ?</span>
                                    <span class="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                    SAAS platform is a cloud-based software service that allows users to access
                                    and use a variety of tools and functionality.
                                </p>
                            </details>
                            <div className=" bg-gray-400 h-[1px]"></div>
                        </div>
                        <div class="py-5 flex flex-col gap-5">
                            <details class="group">
                                <summary class="flex justify-between items-center font-medium cursor-pointer list-none w-[50vw]">
                                    <span className=" font-bold text-xl">Q1. What are the Benifits of using this Platform ?</span>
                                    <span class="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                    SAAS platform is a cloud-based software service that allows users to access
                                    and use a variety of tools and functionality.
                                </p>
                            </details>
                            <div className=" bg-gray-400 h-[.5px]"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
