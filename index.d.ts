/**
 * GJS Environment Type Definitions
 */

/// <reference path="./modules/gettext.d.ts" />
/// <reference path="./modules/system.d.ts" />
/// <reference path="./modules/console.d.ts" />

declare function log(msg: any): void;
declare function print(msg: any): void;
declare function logError(error: Error, msg?: string): void;
declare function printerr(msg: any): void;

declare var console: Console;

declare interface GjsGiImports {
    versions: {
        [key: string]: string;
    };
    [key: string]: any;
    GLib: typeof import("@gi-types/glib2");
    Gio: typeof import("@gi-types/gio2");
    GObject: typeof import("@gi-types/gobject2");
}

declare interface GjsImports {
    gi: GjsGiImports;
    system: typeof import("system");
    gettext: typeof import("gettext");
    // Legacy Modules
    byteArray: typeof import("./legacyModules/byteArray");
    mainloop: typeof import("./legacyModules/mainloop");
    package: typeof import("./legacyModules/package");
    format: typeof import("./legacyModules/format");
}

declare const imports: GjsImports;
