'use client';

import Image from 'next/image';
import { chairs, desks } from '@/data/products';

type Props = {
  selectedChair: string | null;
  selectedDesk: string | null;
  selectedAccessories: string[];
};

export default function WorkspacePreview({
  selectedChair,
  selectedDesk,
  selectedAccessories,
}: Props) {
  return (
    <div className='relative h-100 bg-white rounded-xl border overflow-hidden'>
      <div className='absolute inset-0 bg-linear-to-b from-neutral-50 to-neutral-200' />

      {/* DESK */}
      {selectedDesk && (
        <Image
          src={desks.find((d) => d.id === selectedDesk)!.image}
          alt='desk'
          width={300}
          height={200}
          className='absolute bottom-0 left-1/2 -translate-x-1/2 z-10'
        />
      )}

      {/* CHAIR */}
      {selectedChair && (
        <Image
          src={chairs.find((c) => c.id === selectedChair)!.image}
          alt='chair'
          width={150}
          height={150}
          className='absolute bottom-0 left-[30%] z-20'
        />
      )}

      {/* ACCESSORIES */}
      {selectedAccessories.includes('monitor') && (
        <Image
          src='/accessories/monitor.png'
          alt='monitor'
          width={120}
          height={100}
          className='absolute bottom-30 left-1/2 -translate-x-1/2 z-30'
        />
      )}

      {selectedAccessories.includes('lamp') && (
        <Image
          src='/accessories/lamp.png'
          alt='lamp'
          width={80}
          height={100}
          className='absolute bottom-30 left-[65%] z-30'
        />
      )}

      {selectedAccessories.includes('plant') && (
        <Image
          src='/accessories/plant.png'
          alt='plant'
          width={80}
          height={100}
          className='absolute bottom-27.5 left-[20%] z-30'
        />
      )}

      {/* EMPTY */}
      {!selectedDesk && !selectedChair && selectedAccessories.length === 0 && (
        <div className='absolute inset-0 flex items-center justify-center'>
          <p className='text-neutral-400'>Start building your workspace ✨</p>
        </div>
      )}
    </div>
  );
}
