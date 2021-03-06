import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Toggle from './Toggle';

export default {
    title: 'Toggle',
    component: Toggle
} as ComponentMeta<typeof Toggle>

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const On = Template.bind({});
On.args = {
    state: true
}