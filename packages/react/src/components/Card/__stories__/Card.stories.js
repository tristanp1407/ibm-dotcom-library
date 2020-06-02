/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { select, text, boolean, object } from '@storybook/addon-knobs';
import ArrowRight20 from '@carbon/icons-react/es/arrow--right/20';
import { Card } from '../';
import React from 'react';
import readme from '../README.stories.mdx';

const themes = {
  white: '',
  g10: 'g10',
  g90: 'g90',
  g100: 'g100',
};

export default {
  title: 'Components|Card',

  parameters: {
    ...readme.parameters,
    knobs: {
      Card: ({ groupId }) => ({
        image:
          (boolean('image', false, groupId) && {
            defaultSrc: 'https://dummyimage.com/600x300/ee5396/161616&text=2:1',
            alt: 'Image alt text',
          }) ||
          undefined,
        eyebrow: text('eyebrow', 'eyebrow text', groupId),
        heading: text(
          'title (required)',
          'Lorem ipsum dolor sit amet',
          groupId
        ),
        copy: text('copy', '', groupId),
        cta: object(
          'cta',
          {
            type: 'local',
            copy: 'click here',
            href: 'https://example.com',
            icon: {
              src: ArrowRight20,
            },
          },
          groupId
        ),
        inverse: boolean('inverse', false, groupId),
      }),
      Other: ({ groupId }) => ({
        theme: select('theme', themes, themes.white, groupId),
      }),
    },
  },
};

export const Static = ({ parameters }) => {
  const { theme } = parameters?.props?.Other ?? {};

  return (
    <div className={`bx--card--${theme}`}>
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-sm-2 bx--col-md-3 bx--col-lg-6 bx--col-xlg-4 bx--no-gutter">
            <Card {...(parameters?.props?.Card ?? {})} type="static" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const LinkClickable = ({ parameters }) => {
  const { theme } = parameters?.props?.Other ?? {};

  return (
    <div className={`bx--card--${theme}`}>
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-sm-2 bx--col-md-3 bx--col-lg-6 bx--col-xlg-4 bx--no-gutter">
            <Card {...(parameters?.props?.Card ?? {})} type="link" />
          </div>
        </div>
      </div>
    </div>
  );
};

LinkClickable.story = {
  name: 'Link/Clickable',
};