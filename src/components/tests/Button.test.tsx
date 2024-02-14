import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from '../Button';
import { vi } from 'vitest'
import userEvent from '@testing-library/user-event';

describe('Button component tests', () => {
  it('renders Button component', () => {
    render(<Button text="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick handler when button is clicked', async () => {
    const mockClickHandler = vi.fn();
    render(<Button text="Click me" onClick={mockClickHandler} />);
    await userEvent.click(screen.getByText('Click me'));

    await waitFor(() => {
      expect(mockClickHandler).toHaveBeenCalledTimes(1);
    });
  });

  it('changes button styles after click', () => {
    render(<Button text="Click me" />);
    const button = screen.getByText('Click me');
    const originalStyles = window.getComputedStyle(button);

    fireEvent.click(button);
    const updatedStyles = window.getComputedStyle(button);

    expect(updatedStyles.backgroundColor).not.toBe(originalStyles.backgroundColor);
    expect(updatedStyles.color).not.toBe(originalStyles.color);
  });
})


