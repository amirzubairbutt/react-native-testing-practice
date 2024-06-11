import React from "react";
import renderer from 'react-test-renderer'
import App from "../App";
import { expect, jest } from "@jest/globals";

test('render correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});

// jest.mock('Test', () => {
//     const RealCopmonent = jest.requireActual('Test');
//     const React = require('react');
//     class Text extends React.Component {
//         render() {
//             return React.createElement('Text', this.props, this.props.childern);
//         }
//     }
//     Text.propTypes = RealCopmonent.propTypes;
//     return Text
// })