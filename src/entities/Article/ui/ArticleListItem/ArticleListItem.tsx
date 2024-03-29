import s from './ArticleListItem.module.scss'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ArticleType, ArticleView } from '../../../Article/model/types/article'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { AppLink, Button, MetaInfoItem, Text, Title } from 'shared/ui'
import Eye from 'shared/assets/icons/eye.svg'
import Time from 'shared/assets/icons/time.svg'
import Calendar from 'shared/assets/icons/calendar.svg'
import { Author } from 'widgets/author'
import 'react-lazy-load-image-component/src/effects/blur.css'

interface ArticleListItemProps {
  article: ArticleType
  view: ArticleView
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { article, view } = props
  const { t } = useTranslation('article')

  if (view === 'classic') {
    return (
      <div className={classNames(s.article, {}, [s[view]])}>
        <LazyLoadImage
          effect="blur"
          width={700}
          height={213}
          loading="lazy"
          style={{ borderRadius: '.5rem' }}
          alt={article.title}
          src={article.img}
        />
        <AppLink to={`/article/${article.id}`}>
          <Title h="h2">{article.title}</Title>
        </AppLink>
        <div className={s['meta-info']}>
          <Author
            avatar={article.profile?.avatar}
            username={article.profile?.username}
            size={30}
            id={article.profile?.id}
          />
          <MetaInfoItem Svg={Eye} value={article.view} />
          <MetaInfoItem Svg={Time} value={article.minsToRead} text={t('min')} />
          <MetaInfoItem Svg={Calendar} value={article.createdAt} />
        </div>
        <Text size="s">{article.description}</Text>
        <div>
          {article.topics.map((topic) => {
            return (
              <Button
                style={{ paddingLeft: '0px' }}
                variant="clear"
                key={topic}
                size="s"
              >
                {topic}
              </Button>
            )
          })}
        </div>
      </div>
    )
  }

  if (view === 'compact') {
    return (
      <div className={classNames(s.article, {}, [s[view]])}>
        <LazyLoadImage
          effect="blur"
          width={700}
          height={213}
          loading="lazy"
          alt={article.title}
          src={article.img}
        />
        <AppLink to={`/article/${article.id}`}>
          <Title className={s['compact-title']} h="h3">
            {article.title}
          </Title>
        </AppLink>
        <div className={s['meta-info']}>
          <MetaInfoItem size={16} Svg={Eye} value={article.view} />
          <MetaInfoItem
            size={16}
            Svg={Time}
            value={article.minsToRead}
            text={t('min')}
          />
          <MetaInfoItem size={16} Svg={Calendar} value={article.createdAt} />
        </div>
      </div>
    )
  }
})
