import {jest} from '@jest/globals';
import {render} from 'ink-testing-library';
import {useState} from 'react';

import {TextInput} from '../../src/ui/form/TextInput.js';
import {DELETE, ENTER, LEFT_ARROW, NOOP, RIGHT_ARROW, SHIFT_PLUS_TAB, TAB} from '../constants.js';
import {sleep} from '../sleep.js';

describe('TextInput', () => {
  test('empty string', () => {
    let {lastFrame} = render(<TextInput label="Test" value="" onChange={NOOP} />);

    expect(lastFrame()).toMatchInlineSnapshot(`
      "[35m?[39m [97mTest[39m
        [97m[7m [27m[39m"
    `);
  });

  test('some value, no cursor', () => {
    let {lastFrame} = render(
      <TextInput label="Test" value="foo" showCursor={false} onChange={NOOP} />,
    );

    expect(lastFrame()).toMatchInlineSnapshot(`
      "[35m?[39m [97mTest[39m
        [97mfoo[39m"
    `);
  });

  test('some value', () => {
    let {lastFrame} = render(<TextInput label="Test" value="foo" onChange={NOOP} />);

    expect(lastFrame()).toMatchInlineSnapshot(`
      "[35m?[39m [97mTest[39m
        [97mfoo[7m [27m[39m"
    `);
  });

  test('display placeholder', () => {
    let {lastFrame} = render(
      <TextInput label="Test" value="" placeholder="Write something" onChange={NOOP} />,
    );

    expect(lastFrame()).toMatchInlineSnapshot(`
      "[35m?[39m [97mTest[39m
        [97m[7mW[27m[90mrite something[39m[97m[39m"
    `);
  });

  test('display placeholder, no cursor', () => {
    let {lastFrame} = render(
      <TextInput
        label="Test"
        value="foo"
        showCursor={false}
        placeholder="Write something"
        onChange={NOOP}
      />,
    );

    expect(lastFrame()).toMatchInlineSnapshot(`
      "[35m?[39m [97mTest[39m
        [97mfoo[39m"
    `);
  });

  test('masked value', () => {
    let {lastFrame} = render(<TextInput label="Test" value="foo" mask="*" onChange={NOOP} />);

    expect(lastFrame()).toMatchInlineSnapshot(`
      "[35m?[39m [97mTest[39m
        [97m***[7m [27m[39m"
    `);
  });

  test('accept input', async () => {
    function App() {
      let [value, setValue] = useState('');

      return <TextInput label="Test" value={value} onChange={setValue} />;
    }

    let {stdin, lastFrame} = render(<App />);

    expect(lastFrame()).toMatchInlineSnapshot(`
      "[35m?[39m [97mTest[39m
        [97m[7m [27m[39m"
    `);

    await sleep(100);

    stdin.write('x');

    await sleep(100);

    expect(lastFrame()).toMatchInlineSnapshot(`
      "[35m?[39m [97mTest[39m
        [97mx[7m [27m[39m"
    `);
  });

  test('ignore input when not in focus', async () => {
    function App() {
      let [value, setValue] = useState('');

      return <TextInput label="Test" focus={false} value={value} onChange={setValue} />;
    }

    let {stdin, lastFrame} = render(<App />);

    expect(lastFrame()).toMatchInlineSnapshot(`"[35m?[39m [97mTest[39m"`);

    await sleep(100);

    stdin.write('x');

    await sleep(100);

    expect(lastFrame()).toMatchInlineSnapshot(`"[35m?[39m [97mTest[39m"`);
  });

  test('ignore input for Tab and Shift+Tab', async () => {
    function App() {
      let [value, setValue] = useState('');

      return <TextInput label="Test" value={value} onChange={setValue} />;
    }

    let {stdin, lastFrame} = render(<App />);

    await sleep(100);

    stdin.write(TAB);

    await sleep(100);

    expect(lastFrame()).toMatchInlineSnapshot(`
      "[35m?[39m [97mTest[39m
        [97m[7m [27m[39m"
    `);

    stdin.write(SHIFT_PLUS_TAB);

    await sleep(100);

    expect(lastFrame()).toMatchInlineSnapshot(`
      "[35m?[39m [97mTest[39m
        [97m[7m [27m[39m"
    `);
  });

  test('onSubmit', async () => {
    let onSubmit = jest.fn();

    function App() {
      let [value, setValue] = useState('');

      return <TextInput label="Test" value={value} onChange={setValue} onSubmit={onSubmit} />;
    }

    let {stdin, lastFrame} = render(<App />);

    expect(lastFrame()).toMatchInlineSnapshot(`
      "[35m?[39m [97mTest[39m
        [97m[7m [27m[39m"
    `);

    await sleep(100);

    stdin.write('x');

    await sleep(100);

    stdin.write(ENTER);

    await sleep(100);

    expect(lastFrame()).toMatchInlineSnapshot(`
      "[35m?[39m [97mTest[39m
        [97mx[7m [27m[39m"
    `);
    expect(onSubmit).toHaveBeenCalledWith('x');
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  test('move cursor and write', async () => {
    function App() {
      let [value, setValue] = useState('');

      return <TextInput label="Test" value={value} onChange={setValue} />;
    }

    let {stdin, lastFrame} = render(<App />);

    await sleep(100);

    stdin.write('1');

    await sleep(100);

    stdin.write('3');

    await sleep(100);

    expect(lastFrame()).toMatchInlineSnapshot(`
      "[35m?[39m [97mTest[39m
        [97m13[7m [27m[39m"
    `);

    stdin.write(LEFT_ARROW);

    await sleep(100);

    expect(lastFrame()).toMatchInlineSnapshot(`
      "[35m?[39m [97mTest[39m
        [97m1[7m3[27m[39m"
    `);

    stdin.write('2');

    await sleep(100);

    expect(lastFrame()).toMatchInlineSnapshot(`
      "[35m?[39m [97mTest[39m
        [97m12[7m3[27m[39m"
    `);

    stdin.write(RIGHT_ARROW);

    await sleep(100);

    expect(lastFrame()).toMatchInlineSnapshot(`
      "[35m?[39m [97mTest[39m
        [97m123[7m [27m[39m"
    `);
  });

  test('move cursor and delete', async () => {
    function App() {
      let [value, setValue] = useState('');

      return <TextInput label="Test" value={value} onChange={setValue} />;
    }

    let {stdin, lastFrame} = render(<App />);

    await sleep(100);

    stdin.write('0');

    await sleep(100);

    stdin.write('1');

    await sleep(100);

    stdin.write('2');

    await sleep(100);

    stdin.write('3');
    stdin.write(LEFT_ARROW);

    await sleep(100);

    stdin.write(LEFT_ARROW);

    await sleep(100);

    stdin.write(LEFT_ARROW);

    await sleep(100);

    stdin.write(LEFT_ARROW);

    await sleep(100);

    stdin.write(DELETE);

    await sleep(100);

    expect(lastFrame()).toMatchInlineSnapshot(`
      "[35m?[39m [97mTest[39m
        [97m[7m0[27m123[39m"
    `);
  });
});
