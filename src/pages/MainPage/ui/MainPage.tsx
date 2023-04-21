import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { StarRating } from '@/shared/ui/StarRating/StarRating';

export const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('Главная страница', { ns: 'main' })}
            <StarRating />
        </Page>
    );
};
