import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

export const AboutPage = () => {
    const { t } = useTranslation();

    return (
        <Page data-testid="AboutPage">
            {t('О сайте', { ns: 'about' })}
        </Page>
    );
};
