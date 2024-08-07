import React from 'react'

const WorkProductTopLeftList = ({data}) => {
  return (
    <ul className="space-y-2 mb-4">
      {data.map((item, index) => (
        <li className="text-base" key={index}>
          - {item}
        </li>
      ))}
    </ul>
  );
}

export default WorkProductTopLeftList