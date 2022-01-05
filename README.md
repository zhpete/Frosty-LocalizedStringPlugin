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

### Generating an SID list for a game

The following is the method I use to get a list of all SIDs used in a game's EBX files which can be used to resolve SIDs when exporting strings.

1. Use Frosty Editor to dump the game's EBX to XML (`Tools > Export EBX to XML`)

2. Use [FileLocator](https://www.mythicsoft.com/filelocatorlite/download/) to do a Regular Expression search over the XML dump using the regex below
    ```regexp
    ([^a-zA-Z0-9][iI][dD]|ID)_[a-zA-Z0-9_]+
    ```

3. Export the results report as "Contents" in "Tabulated - Text" style

4. Open the output report text file in [Visual Studio Code](https://code.visualstudio.com/)

5. Delete the report statistics lines at the top of the file

6. Run the following regex find and replace all to isolate just the SIDs

    Find:
    ```regexp
    .*([^a-zA-Z0-9]([iI][dD]_[a-zA-Z0-9_]+)|(ID_[a-zA-Z0-9_]+))+.*
    ```
    Replace:
    ```text
    $1
    ```

7. Use some sort of script to de-duplicate the SIDs.
  I wrote a basic script in JavaScript which you can find in [`scripts/curateSIDs.js`](scripts/curateSIDs.js); it requires [Node.js](https://nodejs.org) to be installed to run it.
  Simply put a `SIDs.txt` file next to it and run the following in a terminal where the script is located.
  
    ```sh
    node curateSIDs.js
    ```

## Development

Check the first pinned comment in the `#plugin-discussion` channel on the Frosty Discord server for what you need to get started.

Check the comment in `src\LocalizedStringPlugin.csproj` for how to set up the missing dependencies.

In `src`, run

```sh
dotnet build
```

The generated `.dll` file can be found in `src\bin\Debug`.
