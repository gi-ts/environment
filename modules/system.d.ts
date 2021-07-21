declare module "system" {
  import * as GObject from "@gi-types/gobject2";

  export const programInvocationName: string;
  export const programPath: string | null;
  export const programArgs: string[];
  export const version: number;

  export function addressOf(object: any): string;
  export function addressOfGObject<T extends GObject.Object>(object: T): string;
  export function refcount<T extends GObject.Object>(object: T): number;
  export function breakpoint(): void;
  export function dumpHeap(filePath?: string): void;
  export function dumpMemoryInfo(): void;
  export function gc(): void;
  export function exit(): void;
  export function clearDateCaches(): void;
}
