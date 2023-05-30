import {
    createContext, ReactNode, useContext, useMemo, useState,
} from 'react';

/**
 * Поскольку смена интерфейса в приложении не реактивная, требуется механизм,
 * который позволит корректно обновить интерфейс.
 * Это целесообразнее сделать просто перезагружая страницу (window.location.reload()).
 * Но также имеет место быть и такой "костыль" с контекстом, где на мгновение
 * children удаляются и тут же монтируются с обновленными данными.
 * В редких случаях можно применять, но аккуратно - возможно проблемы с мемоизированными
 * объектами (reselect).
 */

const ForceUpdateContext = createContext({
    value: true,
    forceUpdate: () => {},
});

export const useForceUpdate = () => {
    const { forceUpdate } = useContext(ForceUpdateContext);

    return forceUpdate;
};

export function ForceUpdateProvider({ children }: { children: ReactNode }) {
    const [value, setValue] = useState(true);

    const forceUpdate = () => {
        setValue((prev) => !prev);
        setTimeout(() => {
            setValue((prev) => !prev);
        }, 120);
    };

    const valueContext = useMemo(() => ({ value, forceUpdate }), [value]);

    if (!value) {
        return null;
    }

    return (
        <ForceUpdateContext.Provider value={valueContext}>
            {children}
        </ForceUpdateContext.Provider>
    );
}
