var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', ()=>{
  it('should exist', ()=>{
    expect(Controls).toExist();
  })
  describe('render', ()=>{
    it('should render pause when started', ()=>{
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>)
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });
    it('should render start when paused', ()=>{
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>)
      var $el = $(ReactDOM.findDOMNode(controls));
      var $startButton = $el.find('button:contains(Start)');

      expect($startButton.length).toBe(1);
    });
  });
  describe('onStatusChange', ()=>{
    it('should be called with paused when pause button is clicked', ()=>{
      var spy = expect.createSpy();
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" onStatusChange={spy}/>);
      var pauseBtn = controls.refs.pauseBtn;

      TestUtils.Simulate.click(pauseBtn);

      expect(spy).toHaveBeenCalledWith('paused');
    });
    it('should be called with started when start button is clicked', ()=>{
      var spy = expect.createSpy();
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" onStatusChange={spy}/>);
      var startBtn = controls.refs.startBtn;

      TestUtils.Simulate.click(startBtn);

      expect(spy).toHaveBeenCalledWith('started');
    });
    it('should be called with stopped when clear button is clicked', ()=>{
      var spy = expect.createSpy();
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="stopped" onStatusChange={spy}/>);
      var stopBtn = controls.refs.stopBtn;

      TestUtils.Simulate.click(stopBtn);

      expect(spy).toHaveBeenCalledWith('stopped');
    });
    it('should return a function provided by parent component', ()=>{
        var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
        var result = controls.onStatusChange('paused');

        expect(result).toBeA('function');
    });
  });
})
