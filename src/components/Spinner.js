import React, { Component } from 'react';
import spinner from '../Spinner.gif';

export default class Spinner extends Component {
  render() {
    return (
      <div className='w-full h-[100dvh] flex justify-center items-center mx-auto'>
        <img src={spinner} alt="" />
      </div>
    )
  }
}
