// declare module '*.module.scss' {
//   const classes: { [key: string]: string };
//   export default classes;
// }

// declare module 'lodash.debounce' {
//   import { DebouncedFunc } from 'lodash';
//   function debounce(func: Function, wait?: number, options?: object): DebouncedFunc<Function>;
//   export = debounce;
// }


declare module '*.scss' {
  const content: any;
  export default content;
}
declare module '*.svg' {
  const content: any;
  export default content;
}
declare module '*.png' {
  const content: any;
  export default content;
}
// declare module '*.jpg' {
//   const src: string;
//   export default src;
// }

// declare module '*.png' {
//   const src: string;
//   export default src;
// }

// declare module '*.svg' {
//   import * as React from 'react';

//   export const ReactComponent: React.FunctionComponent<React.SVGProps<
//       SVGSVGElement
//       > & { title?: string }>;

//   const src: string;
//   export default src;
// }

// declare module '*.module.css' {
//   const classes: { readonly [key: string]: string };
//   export default classes;
// }