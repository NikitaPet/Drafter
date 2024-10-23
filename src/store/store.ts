import { create } from 'zustand'

const useStore = create<State>()((set) => ({
    name: '',
    setName: (newName) =>
        set((state) => {
            state.name = newName
            return { ...state }
        }),
}))

interface State {
    name: string
    setName: (newName: string) => void
}

export default useStore
