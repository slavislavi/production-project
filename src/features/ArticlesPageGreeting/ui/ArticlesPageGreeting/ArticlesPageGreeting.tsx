import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from '@/shared/ui/depricated/Modal';
import { Text } from '@/shared/ui/depricated/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/ui/depricated/Drawer';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';

export const ArticlesPageGreeting = memo(() => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useDevice();
    const dispatch = useAppDispatch();

    const { isArticlesPageHasBeenOpened } = useJsonSettings();

    useEffect(() => {
        if (!isArticlesPageHasBeenOpened) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlesPageHasBeenOpened: true }));
        }
    }, [dispatch, isArticlesPageHasBeenOpened]);

    const onCloseHandler = () => setIsOpen(false);

    const text = (
        <Text
            title={t('Добро пожаловать', { ns: 'articles' })}
            text={t('Здесь вы можете', { ns: 'articles' })}
        />
    );

    if (isMobile) {
        return (
            <Drawer lazy isOpen={isOpen} onClose={onCloseHandler}>
                {text}
            </Drawer>
        );
    }

    return (
        <Modal lazy isOpen={isOpen} onClose={onCloseHandler}>
            {text}
        </Modal>
    );
});
