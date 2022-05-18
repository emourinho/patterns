import React from 'react'
import Header from '../../organisms/header'

const MainTemplate = (props) => {
    return (
        <div>
            <Header />
            <main>
                {props.children}
            </main>
        </div >

    )
}

export default MainTemplate