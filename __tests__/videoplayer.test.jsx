import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoPlayer from '../components/MediaVideo/Video.component';
import ReactPlayer from '../pages/video-dinamis';
import { Provider } from 'react-redux'
import {store} from '../redux/index'

describe('Unit test video player component', () => {
  it('Video player component', () => {
    render(<VideoPlayer />)
  });
})

describe('Unit test video dinamis component', () => {
  it('Render react video player component', () =>{
    render(<Provider store={store}><ReactPlayer/></Provider>);
  })
})