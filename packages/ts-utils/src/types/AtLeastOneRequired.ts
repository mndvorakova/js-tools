/**
 * Constructs new type from `T` so that at least one property from the set of properties `P` is required:
 *
 * ```TypeScript
 * import { AtLeastOneRequired } from '@ori/ts-utils';
 *
 * type FooOrBar = AtLeastOneRequired<{foo: string; bar: string; qux: string}, 'foo' | 'bar'>;
 *
 * const fooOrBar1: FooOrBar = {
 *   foo: 'this is required',
 *   qux: 'this always required',
 * };
 *
 * const fooOrBar2: FooOrBar = {
 *   bar: 'or this is required',
 *   qux: 'this always required',
 * };
 *
 * const fooOrBar3: FooOrBar = {
 *   foo: 'we can have foo',
 *   bar: 'and bar',
 *   qux: 'this always required',
 * };
 *
 * const fooOrBar4: FooOrBar = {
 *   // no foo nor bar
 *   qux: 'this always required',
 * }; // error TS2322: Type '{ qux: string; }' is not assignable to type 'FooOrBar'
 * ```
 *
 * @typeParam T Base for the new type
 * @typeParam P String literal or union of string literals specifying properties of `T`
 */
export type AtLeastOneRequired<T, P extends keyof T = keyof T> = {
  [K in P]-?: Partial<Pick<T, Exclude<P, K>>> & Required<Pick<T, K>>;
}[P] &
  Pick<T, Exclude<keyof T, P>>;
