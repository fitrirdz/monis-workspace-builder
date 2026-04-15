'use client';

import Image from 'next/image';
import type { WorkspaceItem } from '@/data/products';

type Props = {
  items: WorkspaceItem[];
  onSelect: (item: WorkspaceItem) => void;
  isSelected: (item: WorkspaceItem) => boolean;
};

export default function ItemGrid({ items, onSelect, isSelected }: Props) {
  return (
    <div className='mt-4 grid grid-cols-2 gap-3'>
      {items.map((item) => {
        const active = isSelected(item);

        return (
          <button
            key={item.id}
            onClick={() => onSelect(item)}
            className={`border rounded-lg p-3 text-left transition ${
              active ? 'border-black bg-neutral-100' : 'hover:bg-neutral-50'
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
                <p className='text-xs text-neutral-500'>${item.price}/day</p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
