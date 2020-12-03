import React from 'react'
import Drawer from 'react-motion-drawer';


const DrawerRM = () => {
    return (
        <Drawer open={false} width={300} onChange={onChange}>
            { val =>
                <ul style={{ opacity: 300 / val }}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Settings</li>
                </ul>
            }
        </Drawer>
    )
}

export default DrawerRM
