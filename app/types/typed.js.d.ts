declare module "typed.js" {
  export default class Typed {
    constructor(element: Element, options: TypedOptions);
    destroy(): void;
  }

  export interface TypedOptions {
    strings: string[];
    typeSpeed: number;
    startDelay: number;
    backSpeed: number;
    backDelay: number;
    loop: boolean;
  }
}
