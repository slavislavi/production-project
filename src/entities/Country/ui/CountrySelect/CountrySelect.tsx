import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const OPTIONS = [
    { value: Country.BY, content: Country.BY },
    { value: Country.RU, content: Country.RU },
    { value: Country.UA, content: Country.UA },
    { value: Country.US, content: Country.US },
    { value: Country.UK, content: Country.UK },
    { value: Country.AE, content: Country.AE },
    { value: Country.CN, content: Country.CN },
    { value: Country.PL, content: Country.PL },
];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Страна', { ns: 'profile' })}
            options={OPTIONS}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
