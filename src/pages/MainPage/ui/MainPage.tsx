import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

export const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t('Главная страница', { ns: 'main' })}
            <Counter />
        </div>
    );
};
