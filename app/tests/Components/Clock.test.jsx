var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
    it('should exist', () => {
        expect(Clock).toExist();
    });
    
    describe('render', () => {
        it('should clock to output', () => {
            let clock = TestUtils.renderIntoDocument(<Clock totalSeconds={652}/>);
            let $el = $(ReactDOM.findDOMNode(clock));
            let actualText = $el.find('.clock-text').text();

            expect(actualText).toBe('10 : 52');
        })
    })

    describe('formatSeconds', () => {
        it('should format seconds into min : sec', () => {
            let clock = TestUtils.renderIntoDocument(<Clock/>);
            let seconds = 625;
            let expected = '10 : 25';
            let actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });

        it('should format seconds into 00 : 00 format', () => {
            let clock = TestUtils.renderIntoDocument(<Clock/>);
            let seconds = 62;
            let expected = '01 : 02';
            let actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        })
    })
})