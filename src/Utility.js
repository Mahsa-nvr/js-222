import React from 'react';

export const Input = (props) => {
    const {className ,...other} = props;
    return <input className={`form-control ${className || ''}`} {...other}/>
};

export function HandleChange(e) {
    const {name, value} = e.target;
    this.setState({
        [name]: value
    })
}