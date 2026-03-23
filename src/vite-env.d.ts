/// <reference types="vite/client" />

declare module 'gsap/SplitText' {
  export class SplitText {
    constructor(target: any, vars?: any);
    chars: any[];
    words: any[];
    lines: any[];
    revert(): void;
    split(vars?: any): void;
  }
}

declare module 'gsap/ScrollSmoother' {
  export class ScrollSmoother {
    static create(vars?: any): ScrollSmoother;
    static refresh(safe?: boolean): void;
    scrollTop(position?: number): number;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
    paused(value?: boolean): boolean;
  }
}
