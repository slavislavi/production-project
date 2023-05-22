import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    test('test render in DOM', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('with clear variant class', () => {
        render(<Button variant="clear">TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
