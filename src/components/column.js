import React from 'react';

export default function(props) {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  )
}