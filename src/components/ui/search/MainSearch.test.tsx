import { render, screen } from '@testing-library/react';
import MainSearch from './MainSearch';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';

describe('render text input', () => {
    it('render form', () => {
        render(<MainSearch/>);

        const formEl = screen.getByTestId('form');
        expect(formEl).toBeInTheDocument();
    })

    it('render search input', () => {
        render(<MainSearch/>);

        const inputEl = screen.getByTestId('input-search');
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute('type', 'text');

    });


    it('render search button', () => {
        render(<MainSearch/>);

        const inputBtn = screen.getByTestId('search-btn');
        expect(inputBtn).toBeInTheDocument();
        expect(inputBtn).toHaveAttribute('type', 'submit');
    });

    it('onChange works', () => {
        render(<MainSearch/>);

        const inputEl = screen.getByPlaceholderText('Type something...');
        userEvent.type(inputEl, 'flower');
    })
});

