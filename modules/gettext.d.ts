declare module "gettext" {
    export enum LocaleCategory {
        CTYPE,
        NUMERIC,
        TIME,
        COLLATE,
        MONETARY,
        MESSAGES,
        ALL,
    }

    export function setlocale(category: LocaleCategory, locale: string): string;

    export function textdomain(dom: string): string;

    export function bindtextdomain(dom: string, location: string): string;

    export function gettext(msgid: string): string;

    export function dgettext(dom: string, msgid: string): string;

    export function dcgettext(dom: string, msgid: string, category: LocaleCategory): string;

    export function ngettext(msgid1: string, msgid2: string, n: number): string;

    export function dngettext(dom: string, msgid1: string, msgid2: string, n: number): string;

    export function pgettext(context: string, msgid: string): string;

    export function dpgettext(dom: string, context: string, msgid: string): string;

    export function domain(domainName: string): {
        gettext(msgid: string): string;
        ngettext(msgid1: string, msgid2: string, n: number): string;
        pgettext(context: string, msgid: string): string;
    };
}