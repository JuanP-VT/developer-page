import React, { Dispatch, SetStateAction, useState } from "react";

import Image from "next/image";
type Props = {
  currentLanguage: "es" | "en";
  setCurrentLanguage: Dispatch<SetStateAction<"es" | "en">>;
};

export default function LanguageButton({
  currentLanguage,
  setCurrentLanguage,
}: Props) {
  return (
    <div
      className=" relative flex cursor-pointer gap-3 rounded-full border border-gray-700  "
      onClick={() => setCurrentLanguage(currentLanguage === "es" ? "en" : "es")}
    >
      <button
        className={`absolute  h-4 w-4  rounded-full border-2 border-slate-500 bg-teal-300 transition-all duration-300 sm:h-6 sm:w-6 ${
          currentLanguage === "en" ? "translate-x-7 sm:translate-x-9" : ""
        }`}
      ></button>
      <Image
        className=" h-4 w-4 rounded-full sm:h-6 sm:w-6"
        src="/en.png"
        alt="us flag"
        width={25}
        height={25}
      />
      <Image
        className="h-4 w-4 rounded-full sm:h-6  sm:w-6"
        src="/es.png"
        alt="mx flag"
        width={25}
        height={25}
      />
    </div>
  );
}

//Buttons
