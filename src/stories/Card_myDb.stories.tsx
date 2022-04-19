import React from 'react';
import { ComponentStory, ComponentMeta} from '@storybook/react';

import Card_myDb from './Card_myDb';

export default {
    title: 'MyDbCard',
    component: Card_myDb,
} as ComponentMeta<typeof Card_myDb>;

const Template: ComponentStory<typeof Card_myDb> = (args) => <Card_myDb {...args} />;

export const OnWriting = Template.bind({});
OnWriting.args = {
    folderName: '폴더1',
    title: "쎈 고등수학 상",
    progress: 1,
    thumbnail: 'typo_img01.png',
    registeredDate: '2022-04-11'
};