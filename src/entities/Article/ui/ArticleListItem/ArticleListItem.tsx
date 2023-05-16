import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/depricated/Icon';
import { Text } from '@/shared/ui/depricated/Text';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { Article, ArticleTextBlock } from '../../model/types/article';
import { ArticleBlockType, ArticleView } from '../../model/constants/articleConstants';
import { getRouteArticleDetails } from '@/shared/constants/router';
import { AppImage } from '@/shared/ui/depricated/AppImage';
import { Skeleton } from '@/shared/ui/depricated/Skeleton';
import { Card } from '@/shared/ui/depricated/Card';
import { Avatar } from '@/shared/ui/depricated/Avatar';
import { AppLink } from '@/shared/ui/depricated/AppLink';
import { Button, ButtonVariant } from '@/shared/ui/depricated/Button';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className, article, view, target,
    } = props;
    const { t } = useTranslation();

    const articleTypes = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div
                className={classNames(cls.articleListItem, {}, [className, cls[view]])}
                data-testid="ArticleListItem"
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {articleTypes}
                    <AppImage
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                        fallback={<Skeleton width="100%" height={250} />}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <AppLink to={getRouteArticleDetails(article.id)} target={target}>
                            <Button variant={ButtonVariant.OUTLINED}>
                                {t('Читать далее', { ns: 'articles' })}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls.articleListItem, {}, [className, cls[view]])}
            data-testid="ArticleListItem"
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <AppImage
                        alt={article.title}
                        src={article.img}
                        className={cls.img}
                        fallback={<Skeleton width={200} height={200} />}
                    />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {articleTypes}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});
