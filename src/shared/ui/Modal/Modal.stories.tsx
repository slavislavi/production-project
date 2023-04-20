import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aspernatur iusto. Sit dicta voluptatem sunt doloremque quam! Doloremque, eveniet! In enim sunt et fugiat velit ea tenetur animi dicta molestias.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aspernatur iusto. Sit dicta voluptatem sunt doloremque quam! Doloremque, eveniet! In enim sunt et fugiat velit ea tenetur animi dicta molestias.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
