import { useWorkspaceStore } from '@/store/useWorkspaceStore';
import Image from 'next/image';

export default function WorkspaceCanvas() {
  const { desk, chair, accessories } = useWorkspaceStore();

  return (
    <div className='relative w-full h-100 bg-gray-100 rounded-xl'>
      {desk && (
        <Image
          alt='desk-image'
          src={`/assets/${desk}.png`}
          className='absolute bottom-0'
        />
      )}
      {chair && (
        <Image
          alt='chair-image'
          src={`/assets/${chair}.png`}
          className='absolute bottom-0 left-10'
        />
      )}

      {accessories.includes('monitor') && (
        <Image
          alt='accessory-image'
          src='/assets/monitor.png'
          className='absolute bottom-20 left-20'
        />
      )}
    </div>
  );
}
