"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";

interface CardModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function CardModal({ isOpen, onClose,  }: CardModalProps) {

  const { onOpenChange } = useDisclosure();
  return (
    <div className="flex flex-col gap-2">
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        
        <ModalContent className="border bg-slate-600 w-full">
          <ModalBody>
          <ModalHeader>
            <h3 className="text-black justify-start font-poppins text-[30px] font-bold leading-normal">
              Navigating the Maze of Hidden Assets: Lessons from a Private Investigator's Journey
            </h3>
          </ModalHeader>
            <div className="ps-[100px] py-[80px] border ">
            <p className="tex-[16px] justify-start"></p>
            <h3 className=" text-black justify-start font-poppins text-[30px] font-bold leading-normal">
            Navigating the Maze of Hidden Assets: Lessons from a Private Investigator's Journey
              </h3>

            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
            <Button color="primary" onPress={onClose}>
              Action
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
