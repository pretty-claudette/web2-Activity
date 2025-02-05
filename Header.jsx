import React from 'react'

const Header = (props) => {
    return (
        <div className='header flex flex-col items-center justify-center'>
            <img src="https://scontent.fcrk3-3.fna.fbcdn.net/v/t39.30808-6/449364443_943135484229924_4799371144356192945_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=oQdijv54O8gQ7kNvgEEwdbk&_nc_oc=AdjYFvFQaSg_d-jovzkwqCt5AQPVIfPw6i03AqpLl8G5YLE64aXhWozU8d6cZ9nuE1U&_nc_zt=23&_nc_ht=scontent.fcrk3-3.fna&_nc_gid=AOtIcDlMxI5R-gl5pHl0xxF&oh=00_AYDoODkQtLvLsso_EkqBOUz5CcShDuBQbmaik6O2wxBejQ&oe=67A879BB" alt="" className='w-30 h-30 round rounded-full'></img>
        <h2 className='text-1x1 font-bold'>{props.name}</h2>
        <p className='ml-5 text w-50 text-xl'>Wag mo kong subukang laruin, kasi sa laro na yan kilala ako one of the best.</p>
        </div>
    )
}

export default Header 