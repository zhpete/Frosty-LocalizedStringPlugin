# Frosty LocalizedStringPlugin
Improved version of Frosty 1.0.6's LocalizedStringPlugin

## Installation

Download the latest DLL from the releases page.

In the `Plugins` folder in Frosty Editor, first make a backup of the original `LocalizedStringPlugin.dll` file and remove it. (I usually just rename it to `LocalizedStringPlugin.dll.bak`)

Then copy the new DLL in to that folder and it should work next time you launch Frosty.

## "Resolve SIDs and Export" Usage

Open the Localized String Explorer (`View > Localized String Explorer`), then click `Resolve SIDs and Export`.

You will be prompted to open a file containing all of the StringIDs you want to attempt to map to the exported strings.

This should be a `.txt` file where each SID is on a new line.

## Development

Check the first pinned comment in the `#plugin-discussion` channel on the Frosty Discord server for what you need to get started.

Check the comment in `src\LocalizedStringPlugin.csproj` for how to set up the missing dependencies.

In `src`, run

```sh
dotnet build
```

The generated `.dll` file can be found in `src\bin\Debug`.
