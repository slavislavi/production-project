import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string;
}

export const ArticleEditPage = (props: ArticleEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const id = useParams<{id: string}>();
    const isEdit = Boolean(id);

    return (
        <div className={classNames(cls.articleEditPage, {}, [className])}>
            {
                isEdit
                    ? t('Редактирование статьи', { ns: 'articleEdit' })
                    : t('Создание статьи', { ns: 'articleEdit' })
            }
        </div>
    );
};
