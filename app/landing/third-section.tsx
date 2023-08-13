"use client";

import { Button, Card } from "flowbite-react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import ContactModal from "../components/contact-modal";
const products = [1, 2, 3, 4, 5];

export default function ThirdSection() {
  const [openModal, setOpenModal] = useState<string | undefined>();
  return (
    <>
      <div className="relative bg-gray-500">
        <div className="container mx-auto  items-center min-h-[85vh] p-3">
          <img
            className="absolute -top-20 lg:-top-[25%] right-0 z-0 lg:w-[15vw] w-[30vw] opacity-70"
            src="/corner1.png"
            alt="cornericon"
          />
          <p className="text-2xl text-center font-semibold p-5">Our Product</p>
          <div className="flex flex-wrap justify-center gap-7 relative z-10">
            {products.map((prod) => (
              <Card key={prod} className="max-w-sm hover:scale-110">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Noteworthy technology acquisitions 2021</p>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <Button gradientDuoTone="purpleToBlue" outline>
                  <div className="flex items-center gap-2">
                    <p>Read more</p>
                    <FaArrowRight />
                  </div>
                </Button>
              </Card>
            ))}
          </div>
          <img
            className="absolute lg:left-32 bottom-0 -z-0 lg:w-[25vw] w-[50vw]"
            src="/corner2.png"
            alt="cornericon"
          />
          <div className="flex justify-center py-7">
            <Button
              className="px-32"
              onClick={() => setOpenModal("contact-us")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      <ContactModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
}
