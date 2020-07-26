import React from 'react';
import {action} from '@storybook/addon-actions';
import {UncontolledRating} from "./UncontolledRating";

export default {
    title: 'UncontolledRating',
    component: UncontolledRating,
};

const callback = action('rating changed inside component')

export const EmptyRating = () => <UncontolledRating defaultValue={0} onChange={callback}/>;
export const Rating1 = () => <UncontolledRating defaultValue={1} onChange={callback}/>;
export const Rating2 = () => <UncontolledRating defaultValue={2} onChange={callback}/>;
export const Rating3 = () => <UncontolledRating defaultValue={3} onChange={callback}/>;
export const Rating4 = () => <UncontolledRating defaultValue={4} onChange={callback}/>;
export const Rating5 = () => <UncontolledRating defaultValue={5} onChange={callback}/>;
