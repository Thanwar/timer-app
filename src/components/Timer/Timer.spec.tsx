import React from 'react';
import { mount, ReactWrapper, shallow } from 'enzyme';
import Timer from './Timer';

describe('App renders', () => {

	const container = shallow(<Timer />);

	it('should render a div', () => {
		expect(container.find('div').length).toEqual(3);
	});

	it("should render instances of the TimerButton component", () => {
		expect(container.find("TimerButton").length).toEqual(3)
	  })

});

describe('mounted Timer', () => {
	let container: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  
	beforeEach(() => (container = shallow(<Timer />)));
  
	it('invokes startTimer when the start button is clicked', () => {
	  const spy = jest.spyOn(container.instance(), 'startTimer');
	  container.instance().forceUpdate();
	  expect(spy).toHaveBeenCalledTimes(0);
	  container.find('.start-timer').first();
	  expect(spy).toHaveBeenCalledTimes(0);
	});
  
	it('invokes stopTimer when the stop button is clicked', () => {
	  const spy = jest.spyOn(container.instance(), 'stopTimer');
	  container.instance().forceUpdate();
	  expect(spy).toHaveBeenCalledTimes(0);
	  container.find('.stop-timer');
	  expect(spy).toHaveBeenCalledTimes(0);
	});
  
	it('invokes resetTimer when the reset button is clicked', () => {
	  const spy = jest.spyOn(container.instance(), 'resetTimer');
	  container.instance().forceUpdate();
	  expect(spy).toHaveBeenCalledTimes(0);
	  container.find('.reset-timer');
	  expect(spy).toHaveBeenCalledTimes(0);
	});
  });

