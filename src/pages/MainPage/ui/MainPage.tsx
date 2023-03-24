import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

export const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('Главная страница', { ns: 'main' })}
        </Page>
    );
};
