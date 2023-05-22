import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { Country } from '../../model/types/country';
import { ToggleFeatures } from '@/shared/lib/features';

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

    const props = {
        className,
        value,
        defaultValue: t('Страна', { ns: 'profile' }),
        label: t('Страна', { ns: 'profile' }),
        items: OPTIONS,
        onChange: onChangeHandler,
        readonly,
        direction: 'top right' as const,
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ListBox {...props} />}
            off={<ListBoxDeprecated {...props} />}
        />
    );

    // return (
    //     <Select
    //         className={classNames('', {}, [className])}
    //         label={t('Страна', { ns: 'profile' })}
    //         options={OPTIONS}
    //         value={value}
    //         onChange={onChangeHandler}
    //         readonly={readonly}
    //     />
    // );
});
