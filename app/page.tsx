'use client';

import { useState } from 'react';
import Tabs from '@/components/Tabs';
import ItemGrid from '@/components/ItemGrid';
import WorkspacePreview from '@/components/WorkspacePreview';
import SummaryPanel from '@/components/SummaryPanel';

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
    if (activeTab === 'chairs') setSelectedChair(item.id);
    else if (activeTab === 'desks') setSelectedDesk(item.id);
    else {
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

  const selectedItems = [
    ...chairs.filter((c) => c.id === selectedChair),
    ...desks.filter((d) => d.id === selectedDesk),
    ...accessories.filter((a) => selectedAccessories.includes(a.id)),
  ];

  const totalPrice = selectedItems.reduce((sum, i) => sum + i.price, 0);

  return (
    <main className='min-h-screen bg-neutral-100 p-6'>
      <div className='text-center mb-8'>
        <h1 className='text-4xl font-bold'>Design Your Workspace!</h1>
      </div>

      <div className='grid grid-cols-3 gap-6'>
        <div className='border rounded-xl p-4 bg-white'>
          <Tabs activeTab={activeTab} onChange={setActiveTab} />
          <ItemGrid
            items={getItems()}
            onSelect={handleSelect}
            isSelected={isSelected}
          />
        </div>

        <WorkspacePreview
          selectedChair={selectedChair}
          selectedDesk={selectedDesk}
          selectedAccessories={selectedAccessories}
        />

        <SummaryPanel items={selectedItems} total={totalPrice} />
      </div>
    </main>
  );
}
