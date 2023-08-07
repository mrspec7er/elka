"use client";

import { Navbar } from "flowbite-react";

export default function MainNavbar() {
  return (
    <Navbar className="bg-gray-900" fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="https://www.flowbite-react.com/favicon.svg"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Elka Code
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link active className="text-white" href="/">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link className="text-white">
          <p>About</p>
        </Navbar.Link>
        <Navbar.Link href="/" className="text-white">
          Services
        </Navbar.Link>
        <Navbar.Link href="/" className="text-white">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="/" className="text-white">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
