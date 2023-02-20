import { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                variant={ButtonVariant.CLEAR_INVERTED}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal
                isOpen={isAuthModal}
                onClose={onToggleModal}
            // eslint-disable-next-line i18next/no-literal-string
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, aspernatur iusto. Sit dicta voluptatem sunt doloremque quam!
                Doloremque, eveniet! In enim sunt et fugiat velit ea tenetur
                animi dicta molestias.
            </Modal>
        </div>
    );
};
