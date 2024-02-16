import React, {useState}  from 'react'
import EarlyLife from './EarlyLife'
import HighSchool from './HighSchool'
import College from './College'
import Now from './Now'
import Future from './Future'
import {Row} from 'react-bootstrap'
import { Button, Collapse } from 'react-bootstrap'
function Story (){
        const [openEarlyLife, showEarlyLIfe] = useState(false);
        const [openHighSchool, showHighSchool] = useState(false);
        const [openCollege, showCollege] = useState(false);
        const [openNow, showNow] = useState(false);
        const [openFuture, showFuture] = useState(false);
    return (
        <Row>
        <div className="biography">
            <nav className="timeline"> 

            <Button className="early" onClick={() => showEarlyLIfe(!openEarlyLife)} 
            aria-controls="example-collapse-text"
            aria-expanded={openEarlyLife}>Early Life</Button>

            <Button className="high" onClick={() => showHighSchool(!openHighSchool)} 
            aria-controls="example-collapse-text"
            aria-expanded={openHighSchool}>High School</Button> 

            <Button className="college" onClick={() => showCollege(!openCollege)} 
            aria-controls="example-collapse-text"
            aria-expanded={openCollege}>College</Button> 

            <Button className="now" onClick={() => showNow(!openNow)} 
            aria-controls="example-collapse-text"
            aria-expanded={openNow}>Now</Button> 

            <Button className="future" onClick={() => showFuture(!openFuture)} 
            aria-controls="example-collapse-text"
            aria-expanded={openFuture}>Future</Button>
                
            </nav>
        </div>
            <Collapse in={openEarlyLife}>
                <div>
                    <EarlyLife/>
                </div>
            </Collapse>
            <Collapse in={openHighSchool}>
                <div>
                    <HighSchool/>
                </div>
            </Collapse>
            <Collapse in={openCollege}>
                <div>
                    <College/>
                </div>
            </Collapse>
            <Collapse in={openNow}>
                <div>
                    <Now/>
                </div>
            </Collapse>
            <Collapse in={openFuture}>
                <div>
                    <Future/>
                </div>
            </Collapse>
          </Row>
    );
}
export default Story;