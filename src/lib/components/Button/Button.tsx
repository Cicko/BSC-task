import * as React from 'react'
import { Button, PropTypes } from '@material-ui/core';

export interface ButtonProps {
    onClick?: () => any
    color?: PropTypes.Color
    children: any
}

const ButtonComponent: React.FC<ButtonProps> = (props: ButtonProps) => {
    const { children, onClick, color } = props

    return (
        <Button
            color={color || 'default'}
            variant="contained"
            onClick={onClick}>
                {children}
        </Button>
    )
}

export default ButtonComponent
