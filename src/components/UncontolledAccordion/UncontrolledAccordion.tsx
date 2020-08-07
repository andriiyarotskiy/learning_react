import React, {useReducer} from "react";
import {reducer} from "./reducer";


type AccordionPropsType = {
    titleValue: string,
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    let state = {
        collapsed: false
    }

    let [initialState, setInitialState] = useReducer(reducer, state)

    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onClick={() => setInitialState({type: 'TOGGLE'})}/>
            {!initialState.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => props.onClick()}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
