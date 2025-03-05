import Image from 'next/image';

export function Logo() {
  return (
    <div className="w-73 h-76 rounded-full overflow-hidden">
      <Image src="/disketsa_logo.svg" alt="Logo" width={73} height={76} />
    </div>
  );
}