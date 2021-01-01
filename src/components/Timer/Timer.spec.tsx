import React from 'react';
import { mount, shallow } from 'enzyme';
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