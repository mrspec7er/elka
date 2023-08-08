"use client";

import { Button, Card } from "flowbite-react";
import { FaArrowRight } from "react-icons/fa";

function ThirdSection() {
  return (
    <div className="relative">
      <div className="container mx-auto  items-center min-h-[85vh]">
        <p className="text-xl text-center font-semibold">Our Product</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Card className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>Noteworthy technology acquisitions 2021</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Button gradientDuoTone="purpleToBlue" outline>
              <div className="flex items-center gap-2">
                <p>Read more</p>
                <FaArrowRight />
              </div>
            </Button>
          </Card>
          <Card className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>Noteworthy technology acquisitions 2021</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Button gradientDuoTone="purpleToBlue" outline>
              <div className="flex items-center gap-2">
                <p>Read more</p>
                <FaArrowRight />
              </div>
            </Button>
          </Card>
          <Card className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>Noteworthy technology acquisitions 2021</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Button gradientDuoTone="purpleToBlue" outline>
              <div className="flex items-center gap-2">
                <p>Read more</p>
                <FaArrowRight />
              </div>
            </Button>
          </Card>
          <Card className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>Noteworthy technology acquisitions 2021</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Button gradientDuoTone="purpleToBlue" outline>
              <div className="flex items-center gap-2">
                <p>Read more</p>
                <FaArrowRight />
              </div>
            </Button>
          </Card>
          <Card className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>Noteworthy technology acquisitions 2021</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Button gradientDuoTone="purpleToBlue" outline>
              <div className="flex items-center gap-2">
                <p>Read more</p>
                <FaArrowRight />
              </div>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
