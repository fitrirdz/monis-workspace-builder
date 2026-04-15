import { useWorkspaceStore } from '@/store/useWorkspaceStore';

export default function SummaryPanel() {
  const { desk, chair, accessories } = useWorkspaceStore();

  return (
    <div className='p-4 border rounded-xl'>
      <h2>Your Setup</h2>
      <p>Desk: {desk}</p>
      <p>Chair: {chair}</p>
      <p>Accessories: {accessories.join(', ')}</p>

      <button className='mt-4 bg-black text-white px-4 py-2 rounded'>
        Rent Now 🚀
      </button>
    </div>
  );
}
