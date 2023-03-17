import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
}

export const CommentList = (props: CommentListProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.commentList, {}, [className])}>
            {/* children */}
        </div>
    );
};
