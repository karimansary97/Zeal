import {create} from 'zustand';
import {LocationDataType} from '../types/Locations.type';

type TempLocationStore = {
  items: LocationDataType[];
  addItem: (item: any) => void;
  removeItem: (id: number) => void;
  resetState: () => void;
};

const useTempLocationStore = create<TempLocationStore>(set => ({
  items: [],
  addItem: item =>
    set(state => ({items: [...state.items, {id: Date.now(), ...item}]})),
  removeItem: id =>
    set(state => ({items: state.items.filter(item => item.id !== id)})),
  resetState: () => set({items: []}),
}));

export default useTempLocationStore;
