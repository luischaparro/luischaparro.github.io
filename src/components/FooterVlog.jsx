import React from "react";
import logo from "../Assets/logo-icon.png";
const FooterVlog = (props) => {
  return (
    <>
      <footer class="text-white body-font bg-slate-800">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img
                className="max-w-10 rounded-full"
                src={logo}
                alt="logo del centro historico de pinchote"
              />
              <span class="ml-3 text-green-500">
                Fundación Centro Histórico De Pinchote
              </span>
            </a>
            <p class="mt-2 text-sm ">
              Página oficial del centro histórico de pinchote <strong>(en construcción)</strong>.
            </p>
          </div>
          <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            {props.children}
          </div>
        </div>
        <div class="bg-gray-100">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">
              © 2024 Fundación Centro Histórico de Pinchote — 
              <a
                href="#"
                rel="noopener noreferrer"
                class="text-gray-600 ml-1"
                target="_blank"
              >
                F&L
              </a>
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a class="text-gray-500 cursor-pointer hover:text-sky-600">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterVlog;
