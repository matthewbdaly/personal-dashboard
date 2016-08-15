import TestUtils from 'react-addons-test-utils';
import React from 'react';
import {findDOMNode} from 'react-dom';
import FeedWidget from '../../js/components/feedwidget';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithClass, Simulate} = TestUtils;

describe('Feed Widget', () => {
  it('renders the Feed widget', () => {
    const url = "http://feeds.bbci.co.uk/news/rss.xml?edition=uk"
    const component = renderIntoDocument(
      <FeedWidget feed={url} size={5} delay={60} />
    );
    const feed = findDOMNode(component.refs.feed);
    expect(feed).to.be.ok;
    expect(feed.textContent).to.contain(url);
  });
});
