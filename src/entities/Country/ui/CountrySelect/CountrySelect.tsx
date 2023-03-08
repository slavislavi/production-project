import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';

interface CountrySelectProps {
    className?: string;
}

export const CountrySelect = ({ className }: CountrySelectProps) => {
    const { t } = useTranslation();

    return (
        <Select
            className={classNames('', {}, [className])}
        />
    );
};
