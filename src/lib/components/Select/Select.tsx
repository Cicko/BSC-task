/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 17.11.20 - 18:07
 **/
import * as React from 'react'
import { createStyles, FormControl, InputLabel, MenuItem, Select, Theme } from '@material-ui/core';
import { SelectInputProps } from '@material-ui/core/Select/SelectInput';
import { makeStyles } from '@material-ui/core/styles';

export interface SelectOptionProps {
    label: string
    value: any
}

export interface SelectProps {
    label: string
    value: any
    onChange: (any) => void
    options: Array<SelectOptionProps>
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

const SelectComponent: React.FC<SelectProps> = (props) => {
    const classes = useStyles();

    const renderOption = (opt) => <MenuItem key={opt.label} value={opt.value}>{opt.label}</MenuItem>

    return (
        <FormControl variant="filled">
            <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={props.value}
                onChange={props.onChange}
                variant="filled"
            >
                {props.options.map(renderOption)}
            </Select>
        </FormControl>
    )
}

export default SelectComponent
