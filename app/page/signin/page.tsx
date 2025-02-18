'use client';
import Image from "next/image";
import "../../_scss/carousel.scss";
import "../../_scss/testing.scss";
import { useEffect } from 'react';

export default function signin() {
   useEffect(() => {
      const switchBtn = document.getElementById('switchBtn');
      const container = document.getElementById('container');

      if (switchBtn && container) {
         switchBtn.addEventListener('click', () => {
            console.log("here");
            container.classList.toggle('switch');
         });
      }
   }, []);


   return (
      <div className="grid gap-4 col-start-1 col-end-3 row-start-1">
         <div className="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-4 gap-4 text-sm leading-6">
            <div className="flex">
               <a href="/new" className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3">
                  <svg className="group-hover:text-blue-500 mb-1 text-slate-400" width="20" height="20" fill="currentColor" aria-hidden="true">
                     <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                  </svg>
                  <Image src={"/google.png"} width={0} height={0} style={{ width: '100%', height: '100%' }} alt={"TEsting"} />
                  New project
               </a>
            </div>
            <div className="flex">
               <a href="/new" className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3">
                  <svg className="group-hover:text-blue-500 mb-1 text-slate-400" width="20" height="20" fill="currentColor" aria-hidden="true">
                     <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                  </svg>
                  New project
               </a>
            </div>
            <div className="flex">
               <a href="/new" className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dotted border-slate-700 text-sm leading-6 text-slate-900 font-medium py-3">
                  <svg className="group-hover:text-blue-500 mb-1 text-slate-400" width="20" height="20" fill="currentColor" aria-hidden="true">
                     <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                  </svg>
                  New project
               </a>
            </div>

            <div className="pot">
               <Image alt="broken" src="https://i.sstatic.net/qgNyF.png?s=328&g=1" width={100} height={100} />
            </div>

            <div className="container" id="container">
               <div className="box box1 left">Div 1</div>
               <div className="box box2 right">Div 2</div>
            </div>
            <button id="switchBtn">Switch Positions</button>
         </div>
      </div >
   )
}