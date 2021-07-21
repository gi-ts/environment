# GJS Type Definitions

This repository provides `@gjs-types/environment` which defines the types of GJS out-of-the-box environment.

## imports.gi

To extend `imports.gi` to incorporate additional libraries...

```ts
declare global {
    interface GjsGiImports {
        Gtk: import("@gi-types/gtk3")
    }
}
```
