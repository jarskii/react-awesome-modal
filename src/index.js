import React, { Component } from 'react';
import style from './style.js';

export default class Modal extends Component {
    constructor(props) {
        super(props);
        let effect = props.effect || 'fadeInDown';
        this.setSize(effect);
        this.state = {
            visible : props.visible,
            style : props.style || style[effect]
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            visible : nextProps.visible
        });
        this.setSize(nextProps.effect);
    }

    toggle() {
        this.setState({
            visible : !this.state.visible
        });
    }

    setSize(effect) {
        if(this.props && this.props.width) {
            style[effect].panel.width = this.props.width + 'px';
            style[effect].panel.marginLeft = '-' + this.props.width / 2 + 'px';
        }
        if(this.props && this.props.height) {
            style[effect].panel.height = this.props.height + 'px';
            style[effect].panel.marginTop = '-' + this.props.height / 2 + 'px';
        }
    }

    render() {
        return (
            <div>
                <div style={this.state.visible ? this.state.style.mask : this.state.style.maskHidden} />
                <div style={this.state.visible ? this.state.style.panel : this.state.style.panelHidden}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
