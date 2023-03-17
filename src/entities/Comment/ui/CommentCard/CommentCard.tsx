import { Comment } from 'entities/Comment';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean;
}

export const CommentCard = (props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    return (
        <div className={classNames(cls.commentCard, {}, [className])}>
            {/* children */}
        </div>
    );
};
