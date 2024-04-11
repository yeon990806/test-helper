import { create } from "zustand"

interface TestStoreType {
  content: Array<string[]>;
  updateContent: (newValue: Array<string[]>) => void;
}

const useTestStore = create<TestStoreType>((set) => ({
  content: [],
  updateContent: (newValue: Array<string[]>) => set({ content: newValue })
}));

export default useTestStore;