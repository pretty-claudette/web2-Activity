import React from 'react'

function Skill(props) {
    return (
    <div>
    <div className='border ml-40 mr-40 flex flex-col border rounded-2xl mt-5'>
        <h2 className='text-1x1 font-bold'>Skill</h2>
        <p className='ml-3 color'> {props.skill1}</p>
        <p className='ml-3 color'> {props.skill2}</p>
        <p className='ml-3 color'> {props.skill3}</p>
        <p className='ml-3 color'> {props.skill4}</p>
        <p className='ml-3 color'> {props.skill5}</p>
    </div>
    </div>

    )
}

export default Skill