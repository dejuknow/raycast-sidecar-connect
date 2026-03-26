/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Default Device - iPad name for Toggle and Quick Connect (e.g. "My iPad") */
  "defaultDevice"?: string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `toggle` command */
  export type Toggle = ExtensionPreferences & {}
  /** Preferences accessible in the `manage-displays` command */
  export type ManageDisplays = ExtensionPreferences & {}
  /** Preferences accessible in the `quick-connect` command */
  export type QuickConnect = ExtensionPreferences & {}
  /** Preferences accessible in the `disconnect` command */
  export type Disconnect = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `toggle` command */
  export type Toggle = {}
  /** Arguments passed to the `manage-displays` command */
  export type ManageDisplays = {}
  /** Arguments passed to the `quick-connect` command */
  export type QuickConnect = {}
  /** Arguments passed to the `disconnect` command */
  export type Disconnect = {}
}

declare module "swift:*/swift" {
  export function discoverDevices(): Promise<any[]>;
  export function connectDevice(name: string): Promise<string>;
  export function disconnectDevice(name: string): Promise<string>;
  export function disconnectAll(): Promise<string>;

  export class SwiftError extends Error {
    stderr: string;
    stdout: string;
  }
}