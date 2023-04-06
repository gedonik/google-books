import React from 'react';
import styles from './MainSelect.module.scss';

type PropsMainSelectType = {
  options: string[];
  value: string;
  onChange: Function;
  id: string;
};

function MainSelect(props: PropsMainSelectType) {
  const { options, value, onChange, ...params } = props;

  return (
    <select
      className={styles.select}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...params}
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
