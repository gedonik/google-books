import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import MainSearch from './MainSearch';

describe('MainSearch', () => {
  it('input render', () => {
    render(<MainSearch />);
    expect(screen.getByTestId('input-search'));
  });
});
