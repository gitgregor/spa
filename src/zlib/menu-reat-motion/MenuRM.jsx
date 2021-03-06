import React from 'react';
import MotionMenu from 'react-motion-menu';

export default () => (
    <MotionMenu
        type="circle"
        margin={120}
    >
        <div className="button">
            <i className="fa fa-bars" />
        </div>
        <div className="button">
            <i className="fa fa-cogs" />
        </div>
        <div className="button">
            <i className="fa fa-cloud" />
        </div>
        <div className="button">
            <i className="fa fa-home" />
        </div>
    </MotionMenu>
);