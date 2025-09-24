"use client";
// Menambahkan ReactNode untuk typing props yang berisi komponen lain
import React, { ReactNode } from "react"; 
import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/Input/InputField";
import Label from "../form/Label";

// --- Type Definition untuk Props ---
// Tipe ini akan kita gunakan untuk semua komponen ikon
type IconProps = {
  className: string;
};

// Tipe untuk props komponen InfoRow
type InfoRowProps = {
  icon: ReactNode; // ReactNode adalah tipe untuk semua hal yang bisa di-render React
  label: string;
  value: string;
  isCopyable?: boolean; // Tanda '?' berarti prop ini opsional
};


// --- Helper Icon Components with Types ---
const UserIcon = ({ className }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);
const EnvelopeIcon = ({ className }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);
const PhoneIcon = ({ className }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.211-.998-.552-1.348l-5.116-5.116a1.125 1.125 0 00-1.591 0L10.5 11.25H9.75a7.5 7.5 0 01-7.5-7.5V3.75c0-.621.504-1.125 1.125-1.125H4.5" />
  </svg>
);
const BioIcon = ({ className }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
  </svg>
);
const EditIcon = ({ className }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>
);
const CopyIcon = ({ className }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375V9.375m0-3.375A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v3.375" />
  </svg>
);

// --- Component for each info row with Types ---
const InfoRow = ({ icon, label, value, isCopyable = false }: InfoRowProps) => (
  <div className="group flex items-center justify-between py-4">
    <div className="flex items-center gap-4">
      {icon}
      <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
    </div>
    <div className="relative flex items-center gap-2">
      <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 transition-opacity duration-200 lg:group-hover:opacity-0">
        {value}
      </p>
      {isCopyable && (
        <button
          onClick={() => navigator.clipboard.writeText(value)}
          className="absolute right-0 flex items-center gap-1.5 rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-slate-700 dark:text-slate-200"
        >
          <CopyIcon className="h-3.5 w-3.5" />
          Salin
        </button>
      )}
    </div>
  </div>
);


export default function UserInfoCard() {
  const { isOpen, openModal, closeModal } = useModal();
  
  const handleSave = () => {
    console.log("Saving changes...");
    closeModal();
  };

  const userInfo = {
    firstName: "Muhammad",
    lastName: "Zidane",
    email: "helloitszidane@gmail.com",
    phone: "+62 812 3456 7890",
    bio: "Seorang profesional IT yang bersemangat dalam pengembangan web dan teknologi cloud. Saat ini bekerja dan berdomisili di Malang.",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70 sm:p-8">
      <div className="flex items-center justify-between pb-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Informasi Pribadi
        </h3>
        <button
          onClick={openModal}
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
        >
          <EditIcon className="h-4 w-4" />
          Ubah
        </button>
      </div>
      <div className="divide-y divide-slate-200/80 dark:divide-slate-700/60">
        <InfoRow
          icon={<UserIcon className="h-6 w-6 text-slate-400 dark:text-slate-500" />}
          label="Nama Lengkap"
          value={`${userInfo.firstName} ${userInfo.lastName}`}
        />
        <InfoRow
          icon={<EnvelopeIcon className="h-6 w-6 text-slate-400 dark:text-slate-500" />}
          label="Alamat Email"
          value={userInfo.email}
          isCopyable={true}
        />
        <InfoRow
          icon={<PhoneIcon className="h-6 w-6 text-slate-400 dark:text-slate-500" />}
          label="Nomor Telepon"
          value={userInfo.phone}
          isCopyable={true}
        />
        <div className="flex flex-col items-start gap-4 py-4">
          <div className="flex items-center gap-4">
            <BioIcon className="h-6 w-6 text-slate-400 dark:text-slate-500" />
            <p className="text-sm text-slate-500 dark:text-slate-400">Bio</p>
          </div>
          <p className="pl-10 text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300">
            {userInfo.bio}
          </p>
        </div>
      </div>
      
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-xl mx-auto">
        <div className="w-full overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-xl">
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                Ubah Informasi Pribadi
              </h4>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Pastikan informasi Anda selalu yang terbaru.
              </p>
            </div>

            <form className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="firstName" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Nama Depan
                  </Label>
                  <Input id="firstName" type="text" defaultValue={userInfo.firstName} className="w-full rounded-lg" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Nama Belakang
                  </Label>
                  <Input id="lastName" type="text" defaultValue={userInfo.lastName} className="w-full rounded-lg" />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Alamat Email
                </Label>
                <Input id="email" type="email" defaultValue={userInfo.email} className="w-full rounded-lg" />
              </div>
               <div>
                <Label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Nomor Telepon
                </Label>
                <Input id="phone" type="tel" defaultValue={userInfo.phone} className="w-full rounded-lg" />
              </div>
              <div>
                <Label htmlFor="bio" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Bio
                </Label>
                <textarea 
                  id="bio"
                  defaultValue={userInfo.bio}
                  rows={4}
                  className="w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:focus:border-blue-500"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                <Button 
                // variant="ghost" 
                onClick={closeModal} className="rounded-lg">
                  Batal
                </Button>
                <Button onClick={handleSave} className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white">
                  Simpan Perubahan
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}