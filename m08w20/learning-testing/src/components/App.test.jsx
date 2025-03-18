import { describe, it, expect, beforeEach } from 'vitest';
import { render } from 'vitest-browser-react';
import App from './App';

describe('App Integration Tests', () => {
  it('renders the header and product list', async () => {
    const screen = render(<App />);

    await expect.element(screen.getByText('My products')).toBeInTheDocument();
    await expect.element(screen.getByText('This is my amazing e-commerce!')).toBeInTheDocument();
    await expect.element(screen.getByText('Sort by price')).toBeInTheDocument();
  });

  it('renders all products', async () => {
    const screen = render(<App />);

    await expect.element(screen.getByText('ipad - $300')).toBeInTheDocument();
    await expect.element(screen.getByText('iphone - $500')).toBeInTheDocument();
    await expect.element(screen.getByText('apple mouse - $100')).toBeInTheDocument();
  });

  it('sorts products by price when clicking the button', async () => {
    const screen = render(<App />);

    await screen.getByText('Sort by price').click();

    // const firstListItem = await screen.getByRole('listitem').nth(0)
    const firstListItem = await screen.getByRole('listitem').first(0)
    await expect.element(firstListItem).toHaveTextContent('apple mouse')

    // Button text should change
    await expect.element(screen.getByText('Sorted!')).toBeInTheDocument();
  });
});
