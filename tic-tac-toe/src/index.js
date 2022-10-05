import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components'
import {createFragmentContainer, graphql} from 'react-relay'
import './index.css'

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />;
    }
}

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
    }
    render() {
        return (
            <button className='square'
                onClick={() => {
                    this.setState({ value: 'X' });
                }}>
                {this.state.value}
            </button>
        )
    }
}