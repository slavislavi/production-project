import { render, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';

describe('Sidebar', () => {
    test('renders in DOM', () => {
        render(<Sidebar />);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
});
