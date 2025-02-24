/** @jsx jsx */

import { jsx } from '@udecode/plate-test-utils';
import { ReactEditor } from 'slate-react';
import { selectEditor } from './selectEditor';

jsx;

describe('selectEditor', () => {
  describe('when edge is end', () => {});
  it('should set the cursor at the end', () => {
    const input = ((
      <editor>
        <hp>
          hello
          <cursor />
        </hp>
        <element>
          <hp>world</hp>
        </element>
      </editor>
    ) as any) as ReactEditor;

    const output = ((
      <editor>
        <hp>hello</hp>
        <element>
          <hp>
            world
            <cursor />
          </hp>
        </element>
      </editor>
    ) as any) as ReactEditor;

    selectEditor(input, {
      edge: 'end',
    });

    expect(input.selection).toEqual(output.selection);
  });

  describe('when edge is start', () => {});
  it('should set the cursor at the start', () => {
    const input = ((
      <editor>
        <hp>
          hello
          <cursor />
        </hp>
        <element>
          <hp>world</hp>
        </element>
      </editor>
    ) as any) as ReactEditor;

    const output = ((
      <editor>
        <hp>
          <cursor />
          hello
        </hp>
        <element>
          <hp>world</hp>
        </element>
      </editor>
    ) as any) as ReactEditor;

    selectEditor(input, {
      edge: 'start',
    });

    expect(input.selection).toEqual(output.selection);
  });

  describe('when at is defined', () => {});
  it('should set the cursor at', () => {
    const input = ((
      <editor>
        <hp>
          hello
          <cursor />
        </hp>
        <element>
          <hp>world</hp>
        </element>
      </editor>
    ) as any) as ReactEditor;

    const output = ((
      <editor>
        <hp>
          h<cursor />
          ello
        </hp>
        <element>
          <hp>world</hp>
        </element>
      </editor>
    ) as any) as ReactEditor;

    selectEditor(input, {
      at: {
        anchor: { path: [0, 0], offset: 1 },
        focus: { path: [0, 0], offset: 1 },
      },
    });

    expect(input.selection).toEqual(output.selection);
  });
});
