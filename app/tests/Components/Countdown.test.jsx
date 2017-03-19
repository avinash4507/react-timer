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

    describe('handleSetCoundown', () => {
        it('should start countdown and set state to started', (done) => {
            let countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCoundown(10);

            expect(countdown.state.countdownState).toBe('started');
            expect(countdown.state.count).toBe(10);

            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);
        });

        it('should not set count to below 0', (done) => {
            let countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCoundown(2);

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 4001);
        })
    })
})