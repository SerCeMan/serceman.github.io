import React from 'react';
import { JSX } from 'react/jsx-runtime';

const TimeQuizChooser = ({id}: {id: string}): JSX.Element => {
  return (
    <div className="btn-group btn-group-toggle btn-group-justified text-slate-100" data-toggle="buttons">
      <div className="flex justify-between">
        <label className="bg-green-500 w-6/12	rounded-full p-2">
          <input type="radio" name={id} id="yes" autoComplete="off" value="yes"/>Yes
        </label>
        <label className="bg-red-500 w-6/12	rounded-full p-2">
          <input type="radio" name={id} id="no" autoComplete="off" value="no"/>No
        </label>
      </div>
    </div>
  );
};

export default TimeQuizChooser;
