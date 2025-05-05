declare module "transcrypt" {
  interface TranspileOptions {
    target?: string;
    module?: string;
    sourceMap?: boolean;
    stdlib?: string[];
  }

  export function transpile(code: string, options?: TranspileOptions): Promise<string>;
}
