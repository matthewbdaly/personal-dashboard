import TestUtils from 'react-addons-test-utils';
import React from 'react';
import {findDOMNode} from 'react-dom';
import ClockWidget from '../../js/components/clockwidget';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithClass, Simulate} = TestUtils;

describe('Clock Widget', () => {
  it('renders the clock widget', () => {
    const currentTime = 1465160300530;
    const component = renderIntoDocument(
      <ClockWidget time={currentTime} />
    );
    const time = findDOMNode(component.refs.time);
    expect(time).to.be.ok;
    expect(time.textContent).to.contain('Sunday');
  });
});
