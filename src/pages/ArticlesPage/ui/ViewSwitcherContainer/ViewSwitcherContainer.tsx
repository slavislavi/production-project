import { memo } from 'react';
import { ArticleViewSwitcher } from '@/features/ArticleViewSwitcher';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ViewSelectorContainerProps {
    className?: string;
}

export const ViewSwitcherContainer = memo(
    (props: ViewSelectorContainerProps) => {
        const { className } = props;
        const { view, onChangeView } = useArticleFilters();

        return (
            <ArticleViewSwitcher
                className={className}
                view={view}
                onViewClick={onChangeView}
            />
        );
    },
);
