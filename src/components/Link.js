import React from 'react'
import { Button } from 'reactstrap';

export const Link = ({children,active,onClick}) => {
    return (
        <Button onClick={onClick} disabled={active} >
            {children}
        </Button>
    )
}
