import React from 'react'

function Workexp (props) {
    return (
        <div className='border ml-40 mr-40 flex flex-col border rounded-2xl mt-5'>
            <h2 className='text-1x1 font-bold'>Work Experience</h2>

            <p className='ml-30 color'>Front End Developer at Tech Corp</p>

            <p className='ml-30 color'><span className='color'>{props.date}</span>
            </p>
            <p className='ml-30 color'>Developing and maintaining the front end of the company website</p>
            <p>Web developer at Web problems
            </p>
            <p className='ml-30 color'><span className='color'>{props.date2}</span>
            </p>
            <p className='ml-30 color'>Work on various web development projects for clients.</p>
        </div>
    )
}

export default Workexp