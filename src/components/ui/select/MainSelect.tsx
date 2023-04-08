import React from 'react';

import styles from './MainSelect.module.scss';

type PropsMainSelectType = {
  options: string[];
  value: string;
  onChange: (value: string) => string;
  id: string;
};

function MainSelect(props: PropsMainSelectType) {
  const { options, value, onChange, id } = props;

  return (
    <select
      className={styles.select}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      id={id}
    >
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default MainSelect;
