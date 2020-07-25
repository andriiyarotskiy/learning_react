import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UncontrolledAccordion from "./components/UncontolledAccordion/UncontrolledAccordion";
import {UncontolledRating} from "./components/Rating/UncontolledRating";
import OnOff from "./components/OnOff/OnOff";
import UnControlledOnOff from './components/OnOff/UnControlledOnOff';


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


            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<UncontolledRating/>*/}


            {/*<UncontrolledAccordion titleValue="Second Accordion Title" />*/}
            {/*<Accordion titleValue="Second Accordion Title" collapse={false}/>*/}
            {/*<Rating value={0} />*/}
            {/*<Rating value={1} />*/}
            {/*<Rating value={2} />*/}
            {/*<Rating value={3} />*/}
            {/*<Rating value={4} />*/}
            {/*<Rating value={5} />*/}
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
