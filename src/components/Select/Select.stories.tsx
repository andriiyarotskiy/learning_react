import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Select} from './Select';


export default {
    title: 'Select',
    component: Select,
};

const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")


export const WithValue = () => {
    const [value, setValue] = useState('2')
    return <Select value={value}
                   onChange={setValue}
                   items={[
                       {title: 'Dimych', value: "1"},
                       {title: 'Andriy', value: "2"},
                       {title: 'Alina', value: "3"},
                       {title: 'Alina', value: "4"},
                   ]}/>;
}


export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return <Select value={value}
                   onChange={setValue}
                   items={[
                       {title: 'Dimych', value: "1"},
                       {title: 'Andriy', value: "2"},
                       {title: 'Alina', value: "3"},
                       {title: 'Alina', value: "4"},
                   ]}/>;
}
