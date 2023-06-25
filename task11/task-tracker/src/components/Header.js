import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title , onAdd, showAdd}) => {
/*     const onClick=()=>{
        console.log('click')
    } */

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'blue'} text={showAdd ? 'Close': 'Add'}  onClick={onAdd} />
            {/* <Button color='red' text='Hello There' />
            <Button color='pink' text='Hello Here' /> */}

        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

//CSS inline
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'blue'
// }

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header