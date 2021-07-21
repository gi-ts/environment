export const name: string;
export const version: string;
export const prefix: string;
export const datadir: string;
export const libdir: string;
export const pkgdatadir: string;
export const pkglibdir: string;
export const moduledir: string;
export const localedir: string;

interface PackageParams {
    name: string;
    version: string;
    prefix: string;
    datadir?: string;
    libdir?: string;
    pkgdatadir?: string;
    pkglibdir?: string;
    moduledir?: string;
    localedir?: string;
}

export function init(params: PackageParams): void;

export function start(params: PackageParams): void;

export function run(module: any): number | undefined;

export function require(libs: { [key: string]: string }): void;

export function requireSymbol(lib: string, ver?: string, symbol?: string): void;

export function checkSymbol(lib: string, ver?: string, symbol?: string): boolean;

export function initGettext(): void;

export function initFormat(): void;

export function initSubmodule(moduleName: string): void;
