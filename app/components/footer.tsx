"use client";

import { Footer } from "flowbite-react";

export default function MainFooter() {
  return (
    <Footer
      className="bg-[url('/bg.png')] bg-cover bg-gray-900 rounded-none h-[7.5vh]"
      container
    >
      <Footer.Copyright
        className="relative z-10 text-white"
        by="Elka™"
        href="/"
        year={2023}
      />
      <Footer.LinkGroup className="relative z-10 text-white">
        <Footer.Link href="/">About</Footer.Link>
        <Footer.Link href="/">Privacy Policy</Footer.Link>
        <Footer.Link href="/">Licensing</Footer.Link>
        <Footer.Link href="/">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
