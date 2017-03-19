var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });

    it('should start timer on started status', () => {
        let timer = TestUtils.renderIntoDocument(<Timer/>);
        timer.handleStatusChange('started');

        expect(timer.state.count).toBe(0);
        setTimeout(function() {
            expect(timer.state.timerStatus).toBe('started')
            expect(timer.state.count).toBe(1);
        }, 1001);      
    });

    it('should pause timer on paused status', () => {
        let timer = TestUtils.renderIntoDocument(<Timer/>);
        timer.handleStatusChange('paused');
        timer.setState({
            count: 5
        })
        expect(timer.state.count).toBe(5);
        setTimeout(function() {
            expect(timer.state.timerStatus).toBe('paused')
            expect(timer.state.count).toBe(5);
        }, 5001);      
    });

    it('should stop timer on stopped status', () => {
        let timer = TestUtils.renderIntoDocument(<Timer/>);
        timer.handleStatusChange('stopped');
        timer.setState({
            count: 5
        })
        expect(timer.state.count).toBe(5);
        setTimeout(function() {
            expect(timer.state.timerStatus).toBe('stopped')
            expect(timer.state.count).toBe(0);
        }, 5001);      
    });

})