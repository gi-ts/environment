/* exported ByteArray, fromArray, fromGBytes, fromString, toGBytes, toString */
// SPDX-License-Identifier: MIT OR LGPL-2.0-or-later
// SPDX-FileCopyrightText: 2017 Philip Chimento <philip.chimento@gmail.com>

import * as GLib from "@gi-types/glib2";

export function fromGBytes(bytes: GLib.Bytes): Uint8Array;
export function fromString(str: string): Uint8Array;
export function toGBytes(arr: Uint8Array): GLib.Bytes;
export function toString(arr: Uint8Array, encoding?: string): string;
export function fromArray(a: Iterable<number>): ByteArray;

export class ByteArray {
    constructor(arg?: Uint8Array | ByteArray | number | Iterable<number>);

    [key: number]: number;

    length: number;

    toString(encoding?: string): string;
    toGBytes(): GLib.Bytes;
}
