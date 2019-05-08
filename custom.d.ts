/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />


// 导入其他资源的类型声明
declare module "*.svg" {
    const src: any;
    export default src;
  }

  declare module '*.gif' {
    const src: string;
    export default src;
  }
  
  declare module '*.jpg' {
    const src: string;
    export default src;
  }
  
  declare module '*.jpeg' {
    const src: string;
    export default src;
  }
  
  declare module '*.png' {
    const src: string;
    export default src;
  }
  
  declare module '*.webp' {
      const src: string;
      export default src;
  }