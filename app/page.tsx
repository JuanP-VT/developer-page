"use client";

import PictureBlob from "./components/Greetings/PictureBlob";
import TypingAnimation from "./components/Greetings/TypingAnimation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section>
        <PictureBlob />
        <TypingAnimation />
      </section>
    </main>
  );
}
