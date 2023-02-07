import React from "react";
import ReactDOM from "react-dom/client";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const RenderAudioPanel = (props) => {

    let path = "./assets/audios/"

    return (
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    <h1>{props.title}</h1>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>BPM - {props.bpm}</p>
                <p>Bit Rate - {props.bitrate} kbps</p>
                <audio controls>
                    <source src={path + props.src} type="audio/mpeg" />
                </audio>
            </AccordionItemPanel>
        </AccordionItem>
    )
}

const ProducedBeatsPage = () => {
    return (
        <div className="beats-container">
            <h1>Beats</h1>
            <Accordion allowMultipleExpanded allowZeroExpanded>
                <RenderAudioPanel src="aaliyah 2.mp3" title="aaliyah." bpm="114" bitrate="192" />
                <RenderAudioPanel src="affection.mp3" title="affection." bpm="100" bitrate="256" />
                <RenderAudioPanel src="pharrell inspired.mp3" title="jug?" bpm="90" bitrate="256" />
                <RenderAudioPanel src="r&b inspired.mp3" title="hmmm?" bpm="79" bitrate="256" />
                <RenderAudioPanel src="327 inspired.mp3" title="one two six." bpm="79" bitrate="256" />
                <RenderAudioPanel src="i can't stand the pain.mp3" title="i can't stand the pain." bpm="79" bitrate="256" />
                <RenderAudioPanel src="keep yourself from me.mp3" title="keep yourself from me." bpm="120" bitrate="192" />
                <RenderAudioPanel src="love love me.mp3" title="love me?" bpm="60" bitrate="256" />
                <RenderAudioPanel src="seen.mp3" title="seen?" bpm="100" bitrate="256" />
                <RenderAudioPanel src="tabula rasa #2 inspired.mp3" title="clean slate?" bpm="100" bitrate="256" />
                <RenderAudioPanel src="90s hiphop.mp3" title="help me?" bpm="96" bitrate="256" />
                <RenderAudioPanel src="just kickin it sample.mp3" title="kick it with me" bpm="91" bitrate="256" />
                <RenderAudioPanel src="lovingggggg.mp3" title="lovin me?" bpm="111" bitrate="256" />
                <RenderAudioPanel src="me in you.mp3" title="me in you?" bpm="119" bitrate="256" />
                <RenderAudioPanel src="runaway inspired.mp3" title="run on me." bpm="121" bitrate="256" />
                <RenderAudioPanel src="yea yea yea.mp3" title="yeah?" bpm="100" bitrate="256" />
                <RenderAudioPanel src="you have always been enough (bass).mp3" title="always been enough" bpm="135" bitrate="320" />
                <RenderAudioPanel src="you you you you.mp3" title="you?" bpm="114" bitrate="320" />
                <RenderAudioPanel src="titanic inspired.mp3" title="trite." bpm="114" bitrate="320" />
            </Accordion>
        </div>
    );
}

export default ProducedBeatsPage;