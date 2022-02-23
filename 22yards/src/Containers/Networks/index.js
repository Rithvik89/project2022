import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import EachNetworkCard from './components/EachNetwokCard/EachNetworkCard';
import RequstComponent from './components/RequestComponent/RequestComponent'
import { useEffect, useRef, useState } from 'react';

const footerMid=[
  {
    Title:"Card Title",
    Text:`Some quick example text to build on the card title and make up the bulk of
          the card's content.`,
    Button:"Go SomeWhere"

  },
  {
    Title:"Card Title",
    Text:`Some quick example text to build on the card title and make up the bulk of
          the card's content.`,
    Button:"Go SomeWhere"

  },
  {
    Title:"Card Title",
    Text:`Some quick example text to build on the card title and make up the bulk of
          the card's content.`,
    Button:"Go SomeWhere"

  },
  {
    Title:"Card Title",
    Text:`Some quick example text to build on the card title and make up the bulk of
          the card's content.`,
    Button:"Go SomeWhere"

  },
  {
    Title:"Card Title",
    Text:`Some quick example text to build on the card title and make up the bulk of
          the card's content.`,
    Button:"Go SomeWhere"

  },
  {
    Title:"Card Title",
    Text:`Some quick example text to build on the card title and make up the bulk of
          the card's content.`,
    Button:"Go SomeWhere"

  },
  {
    Title:"Card Title",
    Text:`Some quick example text to build on the card title and make up the bulk of
          the card's content.`,
    Button:"Go SomeWhere"

  },
  {
    Title:"Card Title",
    Text:`Some quick example text to build on the card title and make up the bulk of
          the card's content.`,
    Button:"Go SomeWhere"

  },
  {
    Title:"Card Title",
    Text:`Some quick example text to build on the card title and make up the bulk of
          the card's content.`,
    Button:"Go SomeWhere"

  },
  {
    Title:"Card Title",
    Text:`Some quick example text to build on the card title and make up the bulk of
          the card's content.`,
    Button:"Go SomeWhere"

  },
  {
    Title:"Card Title",
    Text:`Some quick example text to build on the card title and make up the bulk of
          the card's content.`,
    Button:"Go SomeWhere"

  }
]

function Networks(){
  const ref=useRef(null);
  const [widthOfDivSection,setWidthOfDivSection]=useState(300)
  const [widthOfRequestSection,setWidthOfRequestSection]=useState(300)
  const [showRequests,setShowRequest]=useState(false)

  useEffect(()=>{
     setWidthOfDivSection(ref.current.offsetWidth)
  })
  useEffect(()=>{
    if(widthOfDivSection<=420)
    {
      let w=widthOfDivSection;
      w=w-20;
      setWidthOfRequestSection(w)
    }
    else if(widthOfDivSection>=600)
    {
       let w=widthOfDivSection;
       w=w-20;
       setWidthOfRequestSection(w/2)
    }
    else{
      setWidthOfRequestSection(400)
    }
  },[widthOfDivSection])
   return (
    <div className='d-flex flex-column' style={{width:"100%"}}>
        <div className='requests-section1' ref={ref}>
            <div className='d-flex justify-content-between align-items-center' style={{width:"100%",paddingLeft:"15px",paddingRight:'15px'}}>
                <h4>Invitations</h4>
                {!showRequests && <img style={{height:"20px",cursor:"pointer"}} onClick={()=>{setShowRequest(!showRequests)}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAB90lEQVRoge3YvWoUURgG4CebGMVKk4jYiYiIQRAkVyCIEC9AbLQUItrkLkKQgAbEUrAURAULJdfgT2JcELst1ChoEY2/xezAsuzu/OzOnFPkhRe2Wp6PGT7OGXYTR2ZwBy38i7wt3MZ0ip9GMwJY0W5iahxLuDD4AUWZGewfkzySI4ExZdMawzb2hZaUzHYD66EVQ2SjgbuhFUPkHuzBe+G3StF+wGQ6ydUIQEV7pfNRjONtBKi8bWJCVy5HAMvbS914aOB1BLisvmxbe2Y+AmBWM08NzyNA9utaFh7O4E8E2O7+xdk8A8CDCMDdvZ8XD0fxIwJ02p84VmQAWI4AnnapKB4O4FME+I9tS6ksRDDAtbJ4kiPGq4D4dT2ODEVzLuAA54fFp3kcAP9oVHg4LllldeF3cGKUA8CtGgdYHjUeDqpnrW5hqooB4HoNAyxUhSdZq1XeGTYkd/RKU+Vare0L4dMK8E/qwsNJyaobFX6n/Z+1ZmUE8LQrNduRrNXPJbDd/aLjW3/duZkDmNUbtas7MoE3PVB5u6mGtZmVi8oPMB/A2zPPFMe/CCLtk1P4JT/+N04HkQ7IqvwDrAYyDswhfJWN/4bDgYyZWZQ9wGIwXY5M4p3++Cb2BtPlzBy+6/3qzAV0FcosHkpuV1vt37NBRbupKP8BNUAY48m1ZiIAAAAASUVORK5CYII="/>}
                {showRequests && <img style={{height:"20px",cursor:"pointer"}} onClick={()=>{setShowRequest(!showRequests)}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAB60lEQVRoge3YSytEYRzH8a8Zt6VbspWN6468AAty20tKykYSC94FwkJegLIRJclCeQFWSIyUjRWGWLiMsDjzF2OO55wz5zzPQ3713Umf/9QcM+B/f3ONwDqQTLcGNBgV+VgrcA+8ZXQPtBh0eVoRkOA7Xkqkf8baTeGOlyaN6RSrBG5RH3AHVBky/rgl1Hhp0ZDRdfVACu8HvABNRqQu28Y7XtoxIs2yXvzjpW4D3i8rAE4IfsApUKhd/WkTWVB+G9euTq8UuPIAVJUEKjTbAVgIgHVrXrOdOvw9NlWl0r9T27ZCxEubuvCdEeCljqjx+cBhhAcc4TyaI9tYhHhpNCp8WI9NVUmgPIoD5jTgpdmw8bXAs8YDUoT8HXpTI17aCAvfZgAvteeKjwMHBg84wnl0B96oQbw0EhRfClxacMA1UBbkgBkL8NK0X3w18GgBXHoCavwcsGIBOrNlr/gW4NUCcGavQLOXA3YswLq1q8L3WIBU1eWGjxPtZ/2w2gdi2Q7otwDntb5sr/6xBTCvJcj4iDFkAcpvg4IvAM4sAPntHCiMA8PAAL9vJcAFwB7mX82g7eUBD0BxuC+Otj3GgBvTihx2HQNWTSty2Co4XxZ+098A6RjnSxdyxALOu9o0TNUFzv+oPvD/M7l3Jh9H9518zLIAAAAASUVORK5CYII="/>}
            </div>
            { showRequests && 
              <div className='requests-section'>
                {
                  footerMid.map((each)=>
                    <RequstComponent text={each.Text} width={widthOfRequestSection}/>
                  )  
                }
              </div>
            }
        </div>
        <div className="network-mid-section">    
          {
             footerMid.map((each)=>
              <EachNetworkCard Title={each.Title} Text={each.Text} Button={each.Button}/>
              )
          }
        </div>
    </div>
   )
}
export default Networks