'use client';

type TabType = 'chairs' | 'desks' | 'accessories';

type Tab = {
  label: string;
  value: TabType;
};

type TabsProps = {
  activeTab: TabType;
  onChange: (tab: TabType) => void;
};

const tabs: Tab[] = [
  { label: 'Chairs', value: 'chairs' },
  { label: 'Desks', value: 'desks' },
  { label: 'Accessories', value: 'accessories' },
];

export default function Tabs({ activeTab, onChange }: TabsProps) {
  return (
    <div className='flex border-b'>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.value;

        return (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 ${
              isActive ? 'text-black' : 'text-neutral-400 hover:text-black'
            }`}
          >
            {tab.label}

            {/* underline */}
            {isActive && (
              <span className='absolute left-0 bottom-0 w-full h-0.5 bg-black rounded-full' />
            )}
          </button>
        );
      })}
    </div>
  );
}
