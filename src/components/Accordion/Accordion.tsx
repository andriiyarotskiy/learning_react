import React from "react";

type ItemType = {
    title: string
    value: any
}


type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    onChange: () => void
    items: ItemType []
    onClick: (value: any) => void

}
export type AccordionCollapsed = boolean

export const Accordion = React.memo(AccordionContainer)

export function AccordionContainer(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onChange={props.onChange}
            />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}
const AccordionTitle = React.memo(AccordionTitleMemo)

function AccordionTitleMemo(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={(e) => props.onChange()}>{props.title}</h3>
    )
}

type AccordionBodyPropsType = {
    items: ItemType []
    onClick: (value: any) => void
}


const AccordionBody = React.memo(AccordionBodyMemo)

function AccordionBodyMemo(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => {
                props.onClick(i.value)
            }} key={index}>{i.title}</li>)}
        </ul>
    )
}
