# Class: Command<A, B, C, D, E\>

Command encapsulates piece of a CLI's logic and is executed when [Program](Program.md) instance
parses that command from the command line arguments.

## Type parameters

| Name | Type                                                    |
| :--- | :------------------------------------------------------ |
| `A`  | extends `string`                                        |
| `B`  | extends `ParametersConfig` \| `undefined` = `undefined` |
| `C`  | extends `OptionsConfig` \| `undefined` = `undefined`    |
| `D`  | extends `boolean` = `false`                             |
| `E`  | extends `boolean` = `false`                             |

## Table of contents

### Constructors

- [constructor](Command.md#constructor)

### Properties

- [action](Command.md#action)
- [allowUnknownOptions](Command.md#allowunknownoptions)
- [allowUnknownParameters](Command.md#allowunknownparameters)
- [description](Command.md#description)
- [name](Command.md#name)
- [options](Command.md#options)
- [parameters](Command.md#parameters)

### Methods

- [parseArguments](Command.md#parsearguments)
- [run](Command.md#run)

## Constructors

### constructor

• **new Command**<`A`, `B`, `C`, `D`, `E`\>(`name`, `action`, `options`)

#### Type parameters

| Name | Type                                                    |
| :--- | :------------------------------------------------------ |
| `A`  | extends `string`                                        |
| `B`  | extends `undefined` \| `ParametersConfig` = `undefined` |
| `C`  | extends `undefined` \| `OptionsConfig` = `undefined`    |
| `D`  | extends `boolean` = `false`                             |
| `E`  | extends `boolean` = `false`                             |

#### Parameters

| Name      | Type                                                                                                 | Description                                                                                                               |
| :-------- | :--------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------ |
| `name`    | `A`                                                                                                  | Command name, ie. space-separated words consisting only of letters, numbers (but not at the start of the word) or dashes. |
| `action`  | [`CommandAction`](../README.md#commandaction)<`A`, `B`, `C`, `D`, `E`\>                              | Function that runs when command is executed.                                                                              |
| `options` | [`CommandOptions`](../README.md#commandoptions)<`NonNullable`<`B`\>, `NonNullable`<`C`\>, `D`, `E`\> | Additionl command options.                                                                                                |

#### Defined in

[cli/src/program/Command.ts:37](https://github.com/jakubmazanec/js-tools/blob/e71beb3/packages/cli/src/program/Command.ts#L37)

## Properties

### action

• `Private` `Readonly` **action**: [`CommandAction`](../README.md#commandaction)<`A`, `B`, `C`, `D`,
`E`\>

#### Defined in

[cli/src/program/Command.ts:30](https://github.com/jakubmazanec/js-tools/blob/e71beb3/packages/cli/src/program/Command.ts#L30)

---

### allowUnknownOptions

• `Readonly` **allowUnknownOptions**: `D`

#### Defined in

[cli/src/program/Command.ts:28](https://github.com/jakubmazanec/js-tools/blob/e71beb3/packages/cli/src/program/Command.ts#L28)

---

### allowUnknownParameters

• `Readonly` **allowUnknownParameters**: `E`

#### Defined in

[cli/src/program/Command.ts:29](https://github.com/jakubmazanec/js-tools/blob/e71beb3/packages/cli/src/program/Command.ts#L29)

---

### description

• `Optional` `Readonly` **description**: `string`

#### Defined in

[cli/src/program/Command.ts:25](https://github.com/jakubmazanec/js-tools/blob/e71beb3/packages/cli/src/program/Command.ts#L25)

---

### name

• `Readonly` **name**: `A`

#### Defined in

[cli/src/program/Command.ts:24](https://github.com/jakubmazanec/js-tools/blob/e71beb3/packages/cli/src/program/Command.ts#L24)

---

### options

• `Readonly` **options**: `C` extends `OptionsConfig` ? `C` : `null`

#### Defined in

[cli/src/program/Command.ts:27](https://github.com/jakubmazanec/js-tools/blob/e71beb3/packages/cli/src/program/Command.ts#L27)

---

### parameters

• `Readonly` **parameters**: `B` extends `ParametersConfig` ? `B` : `null`

#### Defined in

[cli/src/program/Command.ts:26](https://github.com/jakubmazanec/js-tools/blob/e71beb3/packages/cli/src/program/Command.ts#L26)

## Methods

### parseArguments

▸ **parseArguments**(`argv`): `Arguments`<{ `allowUnknownOptions`: `D` ; `allowUnknownParameters`:
`E` ; `commands`: readonly [`A`] ; `options`: `C` ; `parameters`: `B` }\>

Parses a list of command line arguments into an arguments object. Parser is pre-configured based on
this command.

#### Parameters

| Name   | Type   |
| :----- | :----- |
| `argv` | `Argv` |

#### Returns

`Arguments`<{ `allowUnknownOptions`: `D` ; `allowUnknownParameters`: `E` ; `commands`: readonly
[`A`] ; `options`: `C` ; `parameters`: `B` }\>

#### Defined in

[cli/src/program/Command.ts:83](https://github.com/jakubmazanec/js-tools/blob/e71beb3/packages/cli/src/program/Command.ts#L83)

---

### run

▸ **run**(`parsedArgs`, `program`): `Promise`<`void`\>

Executes command action with provided parsed arguments and [Program](Program.md) instance.

#### Parameters

| Name         | Type                                                                                                                                           |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| `parsedArgs` | `Arguments`<{ `allowUnknownOptions`: `D` ; `allowUnknownParameters`: `E` ; `commands`: readonly [`A`] ; `options`: `C` ; `parameters`: `B` }\> |
| `program`    | [`Program`](Program.md)                                                                                                                        |

#### Returns

`Promise`<`void`\>

#### Defined in

[cli/src/program/Command.ts:108](https://github.com/jakubmazanec/js-tools/blob/e71beb3/packages/cli/src/program/Command.ts#L108)
