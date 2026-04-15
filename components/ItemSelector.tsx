import Image from 'next/image';

export default function ItemSelector({ items, onSelect }) {
  return (
    <div className='flex gap-4'>
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect(item.id)}
          className='p-2 border rounded-lg hover:bg-gray-100'
        >
          <Image alt={item.name} src={item.image} className='w-20' />
          <p>{item.name}</p>
        </button>
      ))}
    </div>
  );
}
