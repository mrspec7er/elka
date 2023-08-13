"use client";

import {
  Button,
  Label,
  Modal,
  Spinner,
  TextInput,
  Textarea,
} from "flowbite-react";
import { useState } from "react";

export default function ContactModal({
  openModal,
  setOpenModal,
}: {
  openModal: string | undefined;
  setOpenModal: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const props = { openModal, setOpenModal, email, setEmail };

  async function handleSubmit() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      props.setOpenModal(undefined);
    }, 1000);
  }

  return (
    <>
      <Modal
        show={props.openModal === "contact-us"}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Describe your needs
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput id="email" placeholder="name@company.com" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Description" />
              </div>
              <Textarea id="password" required />
            </div>

            <div className="w-full">
              {!isLoading ? (
                <Button className="w-32" onClick={handleSubmit}>
                  Submit
                </Button>
              ) : (
                <Button className="w-32">
                  <Spinner aria-label="Spinner button example" />
                  <span className="pl-3">Loading...</span>
                </Button>
              )}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
