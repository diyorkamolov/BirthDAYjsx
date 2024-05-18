import React from 'react'

function RouteBirthday(props) {
    const {params} = props.match;
    const {name, day, month} = params;
   return (
    <div>
      <Birthday name={name} month={month} day={day} />
    </div>
  )
}

export default RouteBirthday
