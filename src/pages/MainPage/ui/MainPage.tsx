import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

export const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('Главная страница', { ns: 'main' })}
        </Page>
    );
};
