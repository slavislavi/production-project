import { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import CopyIconNew from '@/shared/assets/icons/copy_new.svg';
import { Button, ButtonVariant } from '../../deprecated/Button/Button';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '../Icon';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = (props: CodeProps) => {
    const { className, text } = props;

    const onCopyHandler = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <pre
                    className={classNames(cls.codeRedesigned, {}, [className])}
                >
                    <Icon
                        clickable
                        onClick={onCopyHandler}
                        className={cls.copyBtn}
                        Svg={CopyIconNew}
                    />
                    <code>{text}</code>
                </pre>
            )}
            off={(
                <pre className={classNames(cls.code, {}, [className])}>
                    <Button
                        onClick={onCopyHandler}
                        className={cls.copyBtn}
                        variant={ButtonVariant.CLEAR}
                    >
                        <CopyIcon className={cls.copyIcon} />
                    </Button>
                    <code>{text}</code>
                </pre>
            )}
        />
    );
};
