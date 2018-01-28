import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Hero from './Hero';

describe(Hero, () => {
 const component = shallow(
    <Hero />
  );

  it('renders and matches our snapshot', () => {
    const component = renderer.create(
      <Hero />
    )
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});