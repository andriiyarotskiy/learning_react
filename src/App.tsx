import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontolledRating} from "./components/UncontrolledRating/UncontolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledOnOff} from "./components/UncontrolledOnOff/UnControlledOnOff";
import {UncontrolledAccordion} from "./components/UncontolledAccordion/UncontrolledAccordion";


function App(props: any) {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    return (
        <div className={"App"}>
            {/*<OnOff // Контролируемый*/}
            {/*    on={switchOn}*/}
            {/*    onChange={setSwitchOn}*/}
            {/*/>*/}

            <UnControlledOnOff onChange={setSwitchOn}/> {/*Неконтролируемый*/}
            {switchOn.toString()}
            <Accordion
                titleValue="Controlled Accordion"
                collapsed={accordionCollapsed}
                onChange={() => {
                    setAccordionCollapsed(!accordionCollapsed)
                }}
            />
            <UncontrolledAccordion titleValue="Uncontrolled Accordion"/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
