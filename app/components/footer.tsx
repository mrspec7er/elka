"use client";

import { Footer } from "flowbite-react";

export default function MainFooter() {
  return (
    <Footer className="bg-gray-900 rounded-none" container>
      <Footer.Copyright
        className="text-white"
        by="Elka™"
        href="/"
        year={2023}
      />
      <Footer.LinkGroup className="text-white">
        <Footer.Link href="/">About</Footer.Link>
        <Footer.Link href="/">Privacy Policy</Footer.Link>
        <Footer.Link href="/">Licensing</Footer.Link>
        <Footer.Link href="/">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
