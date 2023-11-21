interface AllocatorInitOpts {
  size: number;
  start: number;
  end: number;
}

interface AllocatorState {
  size: number;
  start: number;
  end: number;
}

export { AllocatorInitOpts, AllocatorState };
