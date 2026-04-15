'use client';

import type { WorkspaceItem } from '@/data/products';

type Props = {
  items: WorkspaceItem[];
  total: number;
};

export default function SummaryPanel({ items, total }: Props) {
  return (
    <div>
      <div className='max-w-md mx-auto bg-white border rounded-xl p-5'>
        <h2 className='font-semibold text-lg mb-4'>Your Setup</h2>

        {items.length === 0 ? (
          <p className='text-neutral-400 text-sm'>No items selected yet</p>
        ) : (
          <div className='space-y-3'>
            {items.map((item) => (
              <div key={item.id} className='flex justify-between text-sm'>
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
            ))}
          </div>
        )}

        <div className='border-t mt-4 pt-4 flex justify-between font-semibold'>
          <span>Total</span>
          <span>${total}/day</span>
        </div>

        <button
          disabled={items.length === 0}
          className={`w-full mt-4 py-2 rounded-lg transition ${
            items.length === 0
              ? 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
              : 'bg-black text-white hover:opacity-90'
          }`}
        >
          Rent Your Setup 🚀
        </button>
      </div>
    </div>
  );
}
