import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from './Nav';
import { getMaxListeners } from 'cluster';

describe('Nav', () => {

  let wrapper;

  let user = { name: 'Zeus' }

  beforeEach(() => {
    wrapper = shallow( <Nav user={user} /> )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();

    user.email = 'godofolympus@gmail.com';

    expect(wrapper).toMatchSnapshot();
  });
  
});