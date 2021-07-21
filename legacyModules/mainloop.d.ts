import * as GLib from "@gi-types/glib2";

export function run(name?: string): void;

export function quit(name?: string): void;

export function idle_source(handler: (...args: any[]) => boolean, priority?: number): GLib.Source;

export function idle_add(handler: (...args: any[]) => boolean, priority?: number): number;

export function timeout_source(timeout: number, handler: (...args: any[]) => boolean, priority?: number): GLib.Source;

export function timeout_seconds_source(
  timeout: number,
  handler: (...args: any[]) => boolean,
  priority?: number
): GLib.Source;

export function timeout_add(timeout: number, handler: (...args: any[]) => boolean, priority?: number): number;

export function timeout_add_seconds(timeout: number, handler: (...args: any[]) => boolean, priority?: number): number;

export function source_remove(id: number): number;
