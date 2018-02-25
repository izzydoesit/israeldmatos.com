import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Slider from './Slider';

describe(Slider, () => {
 const slides = [];
 const component = shallow(
    <Slider slides={slides} />
  );

  it('renders and matches our snapshot', () => {
    const component = renderer.create(
      <Slider slides={slides} />
    )
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});