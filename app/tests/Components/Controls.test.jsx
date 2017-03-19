var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
    it('should exist', () => {
        expect(Controls).toExist();
    });

    describe('render', () => {
        it('should render Pause when countdownStatus is started', () => {
            let controls = TestUtils.renderIntoDocument(<Controls onStatusChange={() => {}} countdownStatus="started"/>);
            let $el = $(ReactDOM.findDOMNode(controls));
            let $pauseButton = $el.find('button:contains(Pause)');

            expect($pauseButton.length).toBe(1);
        })
        it('should render Start when countdownStatus is paused', () => {
            let controls = TestUtils.renderIntoDocument(<Controls onStatusChange={() => {}} countdownStatus="paused"/>);
            let $el = $(ReactDOM.findDOMNode(controls));
            let $startButton = $el.find('button:contains(Start)');

            expect($startButton.length).toBe(1);
        })
    })
})