import { useEffect } from 'react';
import { useAppContext} from '../context/index'
import { DuoSynth, Duosynth, FMSynth } from 'tone'
import Pad from './pad'
import styled from 'styled-components'


const PadGrid = styled.div `
display: grid;
grid-template-columns: repeat(6, 1fr);
grid-gap: 15px;



`



const Synth = () => {
    const { state } = useAppContext()

    const synth = state.theme === 'light'
        ? new FMSynth()
        : new DuoSynth()


    synth.toDestination()

    const playSound = () => {
        
    }


    return (
        <PadGrid>
            {state.notes.map(noteObj => <Pad {...noteObj} key={noteObj.letter}/>)}
        </PadGrid>
    )

}

export default Synth