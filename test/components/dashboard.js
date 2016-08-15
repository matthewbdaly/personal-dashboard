import TestUtils from 'react-addons-test-utils';
import React from 'react';
import {findDOMNode} from 'react-dom';
import Dashboard from '../../js/components/dashboard';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithClass, Simulate} = TestUtils;

describe('Dashboard', () => {
  it('renders the dashboard', () => {
    const component = renderIntoDocument(
      <Dashboard title="My Dashboard" />
    );
    const title = findDOMNode(component.refs.title);
    expect(title).to.be.ok;
    expect(title.textContent).to.contain('My Dashboard');
  });
});
