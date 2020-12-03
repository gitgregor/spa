import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom';
import './grid.css'

import img2 from '../../../images/header2.jpg';

const items = [
    {
        id: 1,
        title: "item1",
        content: "111 Lorem ipsum dolor sit amet consectetur"
    },
    {
        id: 2,
        title: "item2",
        content: "222 Lorem ipsum dolor sit amet consectetur,s ad?"
    },
    {
        id: 3,
        title: "item3",
        content: "333 Lorem ipsuut commodi quae expedita corrupti, dignissimos architecto. Eius, maiores ad?"
    },

]


const grid = () => {

    const handleClick = () => {
        return (
            <Switch>
                <Route path="/image" render={() => (
                    <img src={img2} alt="miasto" />
                )} />
            </Switch>

        )
    }

    const menuTop = items.map(item => (<div key={item.id}>{item.content}</div>))

    console.log(NavLink)
    return (
        <NavLink
            to="image"
            class="grid"
            onClick={handleClick}
        >
            {menuTop}
        </NavLink>
    )
}

export default grid
