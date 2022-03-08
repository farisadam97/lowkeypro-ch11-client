import React from 'react'
import { render, screen } from '@testing-library/react'
import VideoPlayer from '../components/MediaVideo/Video.component'

describe('Unit test video player component', () => {
  it('Video player component', () => {
    render(<VideoPlayer />)
  });
})