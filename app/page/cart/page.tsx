import Image from "next/image";
import Link from 'next/link';
import EmblaCarousel from "../../components/carousel";
import { EmblaOptionsType } from 'embla-carousel'

export default function Home() {
    const OPTIONS: EmblaOptionsType = { loop: true }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    return (
        <div className="">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
                <div id="pot">
                    <Image alt="broken" src="https://i.sstatic.net/qgNyF.png?s=328&g=1"  width={100} height={100} />
                </div>
            </main>
        </div>
    );
}
