import { MEM_POOL_BOTTOM, MEM_POOL_TOP } from './const';
import { AllocatorInitOpts, AllocatorState } from './type';

class Allocator {
  private _allocatorState: AllocatorState;
  constructor(opts: AllocatorInitOpts) {
    const size = opts.size !== undefined ? opts.size : 1024;
    this._allocatorState = this._allocatorInit({
      size: size,
      start: MEM_POOL_TOP,
      end: MEM_POOL_BOTTOM,
    });
  }
  private _allocatorInit(options: AllocatorInitOpts) {
    const buf = new SharedArrayBuffer(options.size);

    return {
      ...options,
    };
  }
}
