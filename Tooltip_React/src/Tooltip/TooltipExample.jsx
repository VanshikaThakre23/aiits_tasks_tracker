import React from 'react'
// import "./Tooltip.css"
import { Tooltip } from "react-tooltip";

import 'react-tooltip/dist/react-tooltip.css'

const TooltipExample = () => {
    return (
      
        <>
            <button
                data-tooltip-id="my-tooltip"
                data-tooltip-content="I am the content">
                Hover Me</button>

            <Tooltip id="my-tooltip" />
        </>

    )
}

export default TooltipExample