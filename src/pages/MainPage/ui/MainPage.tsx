import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

export const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page data-testid="MainPage">
            {t('Главная страница', { ns: 'main' })}
        </Page>
    );
};
