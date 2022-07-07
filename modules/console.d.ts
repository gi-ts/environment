interface Console {
  /**
   * Logs a critical message if the condition is not truthy.
   * {@see console.error()} for additional information.
   *
   * @param condition a boolean condition which, if false, causes
   *   the log to print
   * @param data formatting substitutions, if applicable
   */
  assert(condition: boolean, ...data: any[]): void;

  /**
   * Resets grouping and clears the terminal on systems supporting ANSI
   * terminal control sequences.
   *
   * In file-based stdout or systems which do not support clearing,
   * console.clear() has no visual effect.
   *
   */
  clear(): void;

  /**
   * Logs a message with severity equal to {@see GLib.LogLevelFlags.DEBUG}.
   *
   * @param data formatting substitutions, if applicable
   */
  debug(...data: any[]): void;

  /**
   * Logs a message with severity equal to {@see GLib.LogLevelFlags.CRITICAL}.
   * Does not use {@see GLib.LogLevelFlags.ERROR} to avoid asserting and
   * forcibly shutting down the application.
   *
   * @param data formatting substitutions, if applicable
   */
  error(...data: any[]): void;

  /**
   * Logs a message with severity equal to {@see GLib.LogLevelFlags.INFO}.
   *
   * @param data formatting substitutions, if applicable
   */
  info(...data: any[]): void;

  /**
   * Logs a message with severity equal to {@see GLib.LogLevelFlags.MESSAGE}.
   *
   * @param data formatting substitutions, if applicable
   */
  log(...data: any[]): void;

  /**
   * In GJS, `table()` is an alias for {@link Console.log}
   */
  table(tabularData: any, properties?: any): void;

  /**
   * @param data formatting substitutions, if applicable
   */
  trace(...data: any[]): void;

  /**
   * @param data formatting substitutions, if applicable
   */
  warn(...data: any[]): void;

  /**
   * @param item an item to format generically
   * @param options any additional options for the formatter. Unused
   *   in our implementation.
   */
  dir(item: object, options?: never): void;

  /**
   * @param data formatting substitutions, if applicable
   */
  dirxml(...data: any[]): void;

  /**
   * Logs how many times console.count(label) has been called with a given
   * label.
   * {@see console.countReset()} for resetting a count.
   *
   * @param  label unique identifier for this action
   */
  count(label: string): void;

  /**
   * @param label the unique label to reset the count for
   */
  countReset(label: string): void;

  /**
   * @param data formatting substitutions, if applicable
   */
  group(...data: any[]): void;

  /**
   * Alias for console.group()
   *
   * @param data formatting substitutions, if applicable
   */
  groupCollapsed(...data: any[]): void;

  /**
   */
  groupEnd(): void;

  /**
   * @param label unique identifier for this action, pass to
   *   console.timeEnd() to complete
   */
  time(label: string): void;

  /**
   * Logs the time since the last call to console.time(label) where label is
   * the same.
   *
   * @param label unique identifier for this action, pass to
   *   console.timeEnd() to complete
   * @param data string substitutions, if applicable
   */
  timeLog(label: string, ...data: any[]): void;

  /**
   * Logs the time since the last call to console.time(label) and completes
   * the action.
   * Call console.time(label) again to re-measure.
   *
   * @param label unique identifier for this action
   */
  timeEnd(label: string): void;

  // Non-standard functions which are de-facto standards.
  // Similar to Node, we define these as no-ops for now.

  /**
   * @deprecated Not implemented in GJS
   *
   * @param _label unique identifier for this action, pass to
   *   console.profileEnd to complete
   */
  profile(_label: string): void;

  /**
   * @deprecated Not implemented in GJS
   *
   * @param _label unique identifier for this action
   */
  profileEnd(_label: string): void;

  /**
   * @deprecated Not implemented in GJS
   *
   * @param _label unique identifier for this action
   */
  timeStamp(_label: string): void;
}

declare module "console" {
  export function getConsoleLogDomain(): string;
  export function setConsoleLogDomain(logDomain: string): void;
  export const DEFAULT_LOG_DOMAIN: string;
}
