import React from 'react'
import ShiftCard from './ShiftCard'
import AddShift from './AddShift'
import '../App.css'

type Props = {}

const ShiftColumn = (props: Props) => {
  return (
    <div className='shift-column'>
        <ShiftCard />
        <ShiftCard />
        <ShiftCard />
        <AddShift />
    </div>
  )
}

export default ShiftColumn