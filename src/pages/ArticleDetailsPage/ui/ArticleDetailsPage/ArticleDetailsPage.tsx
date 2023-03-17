import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { articleDetailsCommentsReducer } from '../../model/slice/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

export const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div className={classNames(cls.articleDetailsPage, {}, [className])}>
                {t('Статья не найдена', { ns: 'errors' })}
            </div>
        );
    }

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.articleDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text
                    className={cls.commentTitle}
                    title={t('Комментарии', { ns: 'articleDetails' })}
                />
                <CommentList
                    comments={[]}
                />
            </div>
        </DynamicReducerLoader>

    );
};
