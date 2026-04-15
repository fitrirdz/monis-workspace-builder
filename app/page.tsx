'use client';

import { useState } from 'react';
import Tabs from '@/components/Tabs';
import Image from 'next/image';
import {
  chairs,
  desks,
  accessories,
  type WorkspaceItem,
} from '@/data/products';

type TabType = 'chairs' | 'desks' | 'accessories';

export default function Page() {
  const [activeTab, setActiveTab] = useState<TabType>('chairs');

  const [selectedChair, setSelectedChair] = useState<string | null>(null);
  const [selectedDesk, setSelectedDesk] = useState<string | null>(null);
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);

  const getItems = (): WorkspaceItem[] => {
    if (activeTab === 'chairs') return chairs;
    if (activeTab === 'desks') return desks;
    return accessories;
  };

  const handleSelect = (item: WorkspaceItem) => {
    if (activeTab === 'chairs') {
      setSelectedChair(item.id);
    } else if (activeTab === 'desks') {
      setSelectedDesk(item.id);
    } else {
      setSelectedAccessories((prev) =>
        prev.includes(item.id)
          ? prev.filter((i) => i !== item.id)
          : [...prev, item.id],
      );
    }
  };

  const isSelected = (item: WorkspaceItem) => {
    if (activeTab === 'chairs') return selectedChair === item.id;
    if (activeTab === 'desks') return selectedDesk === item.id;
    return selectedAccessories.includes(item.id);
  };

  return (
    <main className='min-h-screen bg-neutral-100 p-6'>
      {/* Header */}
      <div className='text-center mb-8'>
        <h1 className='text-4xl font-bold'>Design Your Workspace!</h1>
        <p className='text-neutral-600 mt-2'>— Create Your Perfect Setup! —</p>
      </div>

      <div className='grid grid-cols-3 gap-6 items-start'>
        {/* LEFT */}
        <div className='border rounded-xl p-4 bg-white'>
          <Tabs activeTab={activeTab} onChange={setActiveTab} />

          <div className='mt-4 grid grid-cols-2 gap-3'>
            {getItems().map((item) => {
              const active = isSelected(item);

              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className={`border rounded-lg p-3 text-left transition ${
                    active
                      ? 'border-black bg-neutral-100'
                      : 'hover:bg-neutral-50'
                  }`}
                >
                  <div className='flex items-center gap-3'>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                      className='object-contain'
                    />
                    <div>
                      <p className='text-sm font-medium'>{item.name}</p>
                      <p className='text-xs text-neutral-500'>
                        ${item.price}/mo
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* CENTER */}
        <div className='relative h-100 bg-white rounded-xl border flex items-center justify-center'>
          <p className='text-neutral-400'>Workspace Preview</p>
        </div>

        {/* RIGHT */}
        <div className='space-y-4'>
          <button className='w-full border-2 border-dashed rounded-xl p-4 hover:bg-neutral-50'>
            + Add Monitor
          </button>
          <button className='w-full border-2 border-dashed rounded-xl p-4 hover:bg-neutral-50'>
            + Add Lamp
          </button>
          <button className='w-full border-2 border-dashed rounded-xl p-4 hover:bg-neutral-50'>
            + Place a Plant
          </button>
        </div>
      </div>
    </main>
  );
}
