import React from 'react';
import { shallow } from 'enzyme';

import dummyData from '../dummyData';
import App from '../client/components/App.jsx';
import MainView from '../client/components/MainView.jsx';
import LeftArrow from '../client/components/LeftArrow.jsx';
import RightArrow from '../client/components/RightArrow.jsx';
import NavBar from '../client/components/NavBar.jsx';

describe('<App />', () => {
  it('renders one <MainView /> component', () => {
    const wrapper = shallow(<App data={dummyData}/>);
    expect(wrapper.find(MainView)).toHaveLength(1);
  });

  it('renders one <LeftArrow /> component', () => {
    const wrapper = shallow(<App data={dummyData}/>);
    expect(wrapper.find(LeftArrow)).toHaveLength(1);
  });

  it('renders one <RightArrow /> component', () => {
    const wrapper = shallow(<App data={dummyData}/>);
    expect(wrapper.find(RightArrow)).toHaveLength(1);
  });

  it('renders one <NavBar /> component', () => {
    const wrapper = shallow(<App data={dummyData}/>);
    expect(wrapper.find(NavBar)).toHaveLength(1);
  });

  // eslint-disable-next-line jest/no-commented-out-tests
  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick).to.have.property('callCount', 1);
  // });
});
