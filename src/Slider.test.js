import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Slider from './Slider';

describe(Slider, () => {
 const component = shallow(
    <Slider />
  );

  it('renders and matches our snapshot', () => {
    const component = renderer.create(
      <Slider />
    )
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});