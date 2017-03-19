var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var Countdown = require('Countdown');

describe('Countdown', () => {
    it('should exist', () => { 
        expect(Countdown).toExist();
    });

    describe('handleSetCountdown', () => {
        it('should start countdown and set state to started', (done) => {
            let countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(10);

            expect(countdown.state.countdownStatus).toBe('started');
            expect(countdown.state.count).toBe(10);

            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);
        });

        it('should not set count to below 0', (done) => {
            let countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(2);

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 4001);
        });

        it('should pause countdown on paused status', (done) => {
            let countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('paused');

            setTimeout(() => {
                expect(countdown.state.countdownStatus).toBe('paused');
                expect(countdown.state.count).toBe(3);
                done();
            }, 1001);
        });

        it('should reset countdown on stopped status', (done) => {
            let countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('stopped');

            setTimeout(() => {
                expect(countdown.state.countdownStatus).toBe('stopped');
                expect(countdown.state.count).toBe(0);
                done();
            }, 1001);
        })
    })
})