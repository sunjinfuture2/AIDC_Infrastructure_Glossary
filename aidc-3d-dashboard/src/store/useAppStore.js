import { create } from 'zustand'

/**
 * Shared state between the React UI (header/toolbar/sidebar) and the
 * imperative three.js viewport. Mirrors the reference implementation's
 * globals: activeFilter, activeFloor, flowState/flowOn, selected.
 */
export const useAppStore = create((set) => ({
  /** 계통 필터: all | cooling | power | it | mgmt */
  filter: 'all',
  setFilter: (filter) => set({ filter }),

  /** 층 필터: all | b1 | f1 | f2 | roof */
  floor: 'all',
  setFloor: (floor) => set({ floor }),

  /** Flow 표시 상태 (레퍼런스와 동일한 5계통) */
  flowState: { condensate: true, chilled: true, heat: true, tcs: true, power: true },
  toggleFlow: (key) =>
    set((s) => ({ flowState: { ...s.flowState, [key]: !s.flowState[key] } })),
  flowOn: true,
  toggleFlowMaster: () =>
    set((s) => {
      const on = !s.flowOn
      const flowState = { ...s.flowState }
      Object.keys(flowState).forEach((k) => (flowState[k] = on))
      return { flowOn: on, flowState }
    }),

  /** 선택된 용어 id (null = 선택 없음) */
  selected: null,
  setSelected: (selected) => set({ selected }),

  /** 장비 라벨(리더라인 포함) 표시 여부 */
  labelsOn: true,
  toggleLabels: () => set((s) => ({ labelsOn: !s.labelsOn })),

  /** 카메라 리셋 트리거 (증가 카운터) */
  resetTick: 0,
  requestReset: () => set((s) => ({ resetTick: s.resetTick + 1 })),

  /** 사이드바 검색어 */
  query: '',
  setQuery: (query) => set({ query }),
}))
