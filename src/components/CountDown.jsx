import React from 'react' 

function CountDown({ countdownData, name}) {
    if(!countdownData.isItBday){
        return (
            <div>
                <h1>{name} Birthday</h1>
                <div>
                    {countdownData.days}
                    <span>Days</span>
                </div>
                <div>
                    {countdownData.hours}
                    <span>Hours</span>
                </div>
                <div>
                    {countdownData.minuts}
                    <span>Minutes</span>
                </div>
                <div>
                    {countdownData.seconds}
                    <span>Seconds</span>
                </div>
            </div>
        )
        }else{
            <h1>Test</h1>
    }


  return (
    <div>
      
    </div>
  )
}

export default CountDown
