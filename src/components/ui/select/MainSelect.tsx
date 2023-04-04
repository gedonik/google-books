import React from 'react';
import styles from './MainSelect.module.scss';

type PropsMainSelectType = {
    options: string[],
    value: string,
    onChange: Function,
    id: string
}

const MainSelect = ({ options, value, onChange, ...props }: PropsMainSelectType) => {
    return (
        <select
            className={styles.select}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            {...props}
        >
            {options.map(option =>
            <option value={option} key={option}>
                {option}
            </option>
            )}
        </select>
    );
};

export default MainSelect;