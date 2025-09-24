"use client";
import React from "react";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/Input/InputField";
import Label from "../form/Label";
import Image from "next/image";

// Icon components for better readability and reuse
const CheckIcon = () => (
  <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
  </svg>
);

const EditIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function UserMetaCard() {
  const { isOpen, openModal, closeModal } = useModal();
  const handleSave = () => {
    console.log("Saving changes...");
    closeModal();
  };

  return (
    <>
      {/* --- Main Profile Card --- */}
      {/* Changes:
        - Background: Softer, less distracting background (`bg-slate-50`).
        - Border: A very subtle border for definition.
        - Shadow: Reduced shadow for a flatter, more modern look.
        - Padding: Adjusted for better spacing.
        - Rounded: Slightly less rounded corners (`rounded-2xl`).
      */}
      <div className="p-6 border border-slate-200/80 rounded-2xl dark:border-slate-700/50 dark:bg-slate-900/80 transition-shadow duration-300 hover:shadow-lg">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-center w-full gap-4 md:flex-row md:gap-6">
            
            {/* --- Avatar --- */}
            {/* Changes:
              - Size: Slightly smaller avatar (`w-20 h-20`).
              - Border & Hover: Removed complex border and gradient hover effect for a cleaner look.
            */}
            <div className="relative w-20 h-20 overflow-hidden rounded-full shrink-0">
              <Image
                width={80}
                height={80}
                src="/images/user/gw1.jpg"
                alt="user"
                className="object-cover w-full h-full"
              />
            </div>

            {/* --- User Info --- */}
            {/* Changes:
              - Typography: Using `slate` color palette for softer text colors.
              - Layout: Better alignment and spacing for readability.
            */}
            <div className="text-center md:text-left md:flex-1">
              <h4 className="text-xl font-semibold text-slate-800 dark:text-white">
                Muhammad Zidane
              </h4>
              <div className="flex flex-col items-center gap-x-4 gap-y-1 mt-2 text-sm text-slate-500 dark:text-slate-400 md:flex-row">
                <p className="flex items-center gap-1.5">
                  <CheckIcon />
                  Staff IT Cuy
                </p>
                <div className="hidden w-px h-4 bg-slate-300 dark:bg-slate-600 md:block"></div>
                <p className="flex items-center gap-1.5">
                  <LocationIcon />
                  Malang, Indonesia
                </p>
              </div>
            </div>

            {/* --- Social Links --- */}
            {/* Changes:
              - Style: Replaced gradient buttons with subtle, icon-only buttons.
              - Hover Effect: Simple background color change on hover.
            */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/muhammadzidanefaj"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 text-slate-500 bg-slate-200/70 rounded-full hover:bg-slate-300/80 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://www.instagram.com/dann_moriarty/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 text-slate-500 bg-slate-200/70 rounded-full hover:bg-slate-300/80 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* --- Edit Button --- */}
          {/* Changes:
            - Style: Changed from gradient to a clean, outline (ghost) button.
            - Hover Effect: Simple background fill on hover for clear feedback.
          */}
          <button
            onClick={openModal}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-200/60 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700/50 transition-colors duration-200 md:w-auto shrink-0 focus:outline-none focus:ring-2 focus:ring-slate-400/50"
          >
            <EditIcon />
            Ubah Profile
          </button>
        </div>
      </div>
      
      {/* --- Edit Modal --- */}
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-2xl m-4">
        {/*
          Changes:
          - Rounded: Matched card's `rounded-2xl`.
          - Background: Cleaner background colors.
        */}
        <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-slate-800">
          <div className="p-6 lg:p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                  Edit Info Pribadi
                </h4>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Perbarui detail Anda untuk menjaga profil Anda tetap terkini.
                </p>
              </div>
              <button
                onClick={closeModal}
                className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <CloseIcon />
              </button>
            </div>
            
            <form className="space-y-6">
              {/* --- Form Inputs --- */}
              {/* Changes:
                - Style: Inputs now have a simpler border and focus ring.
                - Rounded: Consistent `rounded-lg`.
                - Colors: Using `slate` palette.
              */}
              <div className="space-y-4">
                <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</Label>
                <Input
                  type="text"
                  defaultValue="Muhammad"
                  className="w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:focus:border-blue-500"
                  placeholder="Masukkan Nama Depan"
                />
              </div>
              <div className="space-y-4">
                <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</Label>
                <Input
                  type="text"
                  defaultValue="Zidane"
                  className="w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:focus:border-blue-500"
                  placeholder="Masukkan Nama Belakang"
                />
              </div>
              {/* ... (repeat for other fields) ... */}
              
              {/* --- Action Buttons --- */}
              {/* Changes:
                - Layout: Aligned to the right, a common pattern for modal actions.
                - Cancel Button: Simple text-like button.
                - Save Button: Clear primary action button with a solid accent color (`blue`).
              */}
              <div className="flex justify-end gap-3 pt-6 border-t border-slate-200 dark:border-slate-700">
                <Button
                  size="sm"
                  // variant="ghost"
                  onClick={closeModal}
                  className="rounded-lg text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700"
                >
                  Batal
                </Button>
                <Button
                  size="sm"
                  onClick={handleSave}
                  className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Simpan
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}