import React from 'react'

function Info(props) {
    return (
        <div className='border ml-40 mr-40 flex flex-col border rounded-2xl mt-5'>
            <h2 className='text-1x1 font-bold'>Contact Information</h2>
            <p className='ml-3'>Email: <span className='color'>{props.email}</span></p>
            <p className='ml-3'>Phone: <span className='color'>{props.phone}</span></p>
            <p className='ml-3'>Address: <span className='color'>{props.address}</span></p>
        </div>
    )
}

export default Info