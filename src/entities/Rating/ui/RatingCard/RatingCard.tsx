import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button as ButtonDeprecated, ButtonSize, ButtonVariant } from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Input } from '@/shared/ui/redesigned/Input';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { ToggleFeatures } from '@/shared/lib/features';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        onAccept,
        onCancel,
        feedbackTitle,
        hasFeedback,
        title,
        rate = 0,
    } = props;
    const { t } = useTranslation();
    const isMobile = useDevice();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const onAcceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const onCancelHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <>
                    <Text title={feedbackTitle} />
                    <Input
                        data-testid="RatingCard.Input"
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('Ваш отзыв')}
                    />
                </>
            )}
            off={(
                <>
                    <TextDeprecated title={feedbackTitle} />
                    <InputDeprecated
                        data-testid="RatingCard.Input"
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('Ваш отзыв')}
                    />
                </>
            )}
        />
    );

    const content = (
        <>
            <VStack align="center" gap="8" max>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={(
                        <Text
                            title={starsCount ? t('Спасибо за оценку!') : title}
                        />
                    )}
                    off={(
                        <TextDeprecated
                            title={starsCount ? t('Спасибо за оценку!') : title}
                        />
                    )}
                />
                <StarRating
                    selectedStars={starsCount}
                    size={40}
                    onSelect={onSelectStars}
                />
            </VStack>
            {
                isMobile ? (
                    <Modal isOpen={isModalOpen} lazy>
                        <VStack max gap="32">
                            {modalContent}
                            <ToggleFeatures
                                feature="isAppRedesigned"
                                on={(
                                    <HStack max gap="16" justify="end">
                                        <Button
                                            data-testid="RatingCard.Close"
                                            onClick={onCancelHandler}
                                        >
                                            {t('Закрыть')}
                                        </Button>
                                        <Button
                                            data-testid="RatingCard.Send"
                                            onClick={onAcceptHandler}
                                        >
                                            {t('Отправить')}
                                        </Button>
                                    </HStack>
                                )}
                                off={(
                                    <HStack max gap="16" justify="end">
                                        <ButtonDeprecated
                                            data-testid="RatingCard.Close"
                                            onClick={onCancelHandler}
                                            variant={ButtonVariant.OUTLINED_RED}
                                        >
                                            {t('Закрыть')}
                                        </ButtonDeprecated>
                                        <ButtonDeprecated
                                            data-testid="RatingCard.Send"
                                            onClick={onAcceptHandler}
                                        >
                                            {t('Отправить')}
                                        </ButtonDeprecated>
                                    </HStack>
                                )}
                            />
                        </VStack>
                    </Modal>
                ) : (
                    <Drawer isOpen={isModalOpen} lazy onClose={onCancelHandler}>
                        <VStack gap="32">
                            {modalContent}
                            <ToggleFeatures
                                feature="isAppRedesigned"
                                on={(
                                    <Button
                                        fullWidth
                                        onClick={onAcceptHandler}
                                        size="l"
                                    >
                                        {t('Отправить')}
                                    </Button>
                                )}
                                off={(
                                    <ButtonDeprecated
                                        fullWidth
                                        onClick={onAcceptHandler}
                                        size={ButtonSize.L}
                                    >
                                        {t('Отправить')}
                                    </ButtonDeprecated>
                                )}
                            />
                        </VStack>
                    </Drawer>
                )
            }
        </>
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <Card fullWidth border="partial" padding="24">
                    {content}
                </Card>
            )}
            off={(
                <CardDeprecated
                    className={className}
                    fullWidth
                    data-testid="RatingCard"
                >
                    {content}
                </CardDeprecated>
            )}
        />
    );
});
