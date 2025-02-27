/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {expect} from 'expect';
import {
  addSerializer,
  toMatchInlineSnapshot,
  toMatchSnapshot,
  toThrowErrorMatchingInlineSnapshot,
  toThrowErrorMatchingSnapshot,
} from 'jest-snapshot';
import type {JestExpect} from './types';

export type {AsymmetricMatchers, MatcherFunction, MatcherState} from 'expect';
export type {JestExpect} from './types';

function createJestExpect(): JestExpect {
  expect.extend({
    toMatchInlineSnapshot,
    toMatchSnapshot,
    toThrowErrorMatchingInlineSnapshot,
    toThrowErrorMatchingSnapshot,
  });

  expect.addSnapshotSerializer = addSerializer;

  return expect as JestExpect;
}

export const jestExpect = createJestExpect();
