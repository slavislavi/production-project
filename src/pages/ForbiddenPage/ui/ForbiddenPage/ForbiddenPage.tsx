import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const ForbiddenPage = () => {
    const { t } = useTranslation();

    return (
        <Page
            data-testid="ForbiddenPage"
        >
            {t('Нет доступа к данной странице')}
        </Page>
    );
};

export default ForbiddenPage;
