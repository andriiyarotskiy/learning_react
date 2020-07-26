import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';

export default {
    title: 'input'
    // component: input,
};

export const UncontolledInput = () => <input/>;
export const TrackValueOfUncontolledInput = () => {
    const [value, setValue] = useState<string>('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return <><input
        value={value}
        onChange={onChange}
    /> - {value} </>
};
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null) // хук => UseRef
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <><input ref={inputRef}/>
        <button onClick={save}>save</button> - actual value :{value} </>
};
export const ControlledInputFixedValue = () => <input value={"it-incubator"}/>;
