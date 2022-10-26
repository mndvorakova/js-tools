# Class: AssertionError

A subclass of `Error` that indicates an assertion failure.

## Hierarchy

- `Error`

  ↳ **`AssertionError`**

## Table of contents

### Constructors

- [constructor](AssertionError.md#constructor)

### Properties

- [cause](AssertionError.md#cause)
- [message](AssertionError.md#message)
- [name](AssertionError.md#name)
- [stack](AssertionError.md#stack)
- [prepareStackTrace](AssertionError.md#preparestacktrace)
- [stackTraceLimit](AssertionError.md#stacktracelimit)

### Methods

- [captureStackTrace](AssertionError.md#capturestacktrace)

## Constructors

### constructor

• **new AssertionError**(`message?`)

#### Parameters

| Name       | Type     | Description                                |
| :--------- | :------- | :----------------------------------------- |
| `message?` | `string` | Message added to the default error message |

#### Overrides

Error.constructor

## Properties

### cause

• `Optional` **cause**: `Error`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:26

---

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1029

---

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1028

---

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1030

---

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name          | Type         |
| :------------ | :----------- |
| `err`         | `Error`      |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

---

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name              | Type       |
| :---------------- | :--------- |
| `targetObject`    | `object`   |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace