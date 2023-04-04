import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { HStack } from 'shared/ui/Stack';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentForm';
import cls from './AddCommentForm.module.scss';

interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

export const AddCommentForm = (props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicReducerLoader reducers={reducers}>
            <HStack justify="between" className={classNames(cls.addCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    placeholder={t('Введите текст комментария', { ns: 'articleDetails' })}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button
                    onClick={onSendHandler}
                    variant={ButtonVariant.OUTLINED}
                >
                    {t('Отправить', { ns: 'articleDetails' })}

                </Button>
            </HStack>
        </DynamicReducerLoader>
    );
};
