import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
}

export const CommentCard = (props: CommentCardProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.commentCard, {}, [className])}>
            {/* children */}
        </div>
    );
};
