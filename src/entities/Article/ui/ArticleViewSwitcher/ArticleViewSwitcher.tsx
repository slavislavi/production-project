import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListedIcon from '@/shared/assets/icons/big_view.svg';
import TiledIcon from '@/shared/assets/icons/small_view.svg';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import cls from './ArticleViewSwitcher.module.scss';
import { ArticleView } from '../../model/constants/articleConstants';

interface ArticleViewSwitcherProps {
    className?: string;
    view: ArticleView,
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListedIcon,
    },
];

export const ArticleViewSwitcher = memo((props: ArticleViewSwitcherProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.articleViewSwitcher, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    variant={ButtonVariant.CLEAR}
                    onClick={onClick(viewType.view)}
                    key={viewType.view}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                    />
                </Button>
            ))}
        </div>
    );
});
