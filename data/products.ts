export type WorkspaceItem = {
  id: string;
  name: string;
  image: string;
  price: number;
};

export const chairs: WorkspaceItem[] = [
  {
    id: 'chair-1',
    name: 'Ergo Chair',
    image: '/chairs/chair1.png',
    price: 15,
  },
  {
    id: 'chair-2',
    name: 'Minimal Chair',
    image: '/chairs/chair2.png',
    price: 10,
  },
];

export const desks: WorkspaceItem[] = [
  {
    id: 'desk-1',
    name: 'Wood Deskkkk',
    image: '/desks/desk1.png',
    price: 20,
  },
  {
    id: 'desk-2',
    name: 'Standing Desk',
    image: '/desks/desk2.png',
    price: 30,
  },
];

export const accessories: WorkspaceItem[] = [
  {
    id: 'monitor',
    name: 'Monitor',
    image: '/accessories/monitor.webp',
    price: 10,
  },
  {
    id: 'lamp',
    name: 'Lamp',
    image: '/accessories/lamp.png',
    price: 5,
  },
  {
    id: 'plant',
    name: 'Plant',
    image: '/accessories/plant.png',
    price: 3,
  },
];
