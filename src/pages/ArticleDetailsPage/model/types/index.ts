import { ArticleDetailsCommentsSchema } from './articleDetailsCommentsSchema';
import { ArticleDetailsRecommendSchema } from './ArticleDetailsRecommendSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommends: ArticleDetailsRecommendSchema;
}
