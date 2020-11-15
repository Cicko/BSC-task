/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 15.11.20 - 19:18
 **/
import * as React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { MouseEventHandler } from 'react';

interface AppBarProps {
    onCreate: MouseEventHandler
}


const AppBarComponent: React.FC<AppBarProps> = (props: AppBarProps) => {
    const { onCreate } = props
    return (
        <AppBar position="relative">
            <Toolbar>
                <Button variant="contained" onClick={onCreate}>Create note</Button>
            </Toolbar>
        </AppBar>
    )
}

export default AppBarComponent
