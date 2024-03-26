import s from './SortSelect.module.scss'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { memo, useMemo } from 'react'
import { Option, Select } from 'shared/ui'
import { ArticleSort, ArticleSortOrder } from 'entities/Article'
import { UseDispatchCallbackType } from 'shared/lib/hooks/useDispatchCallback'

interface SortSelectProps {
  onSelectSort: UseDispatchCallbackType<ArticleSort>
  onSelectSortOrder: UseDispatchCallbackType<ArticleSortOrder>
  sort: ArticleSort
  sortOrder: ArticleSortOrder
}

export const SortSelect = memo((props: SortSelectProps) => {
  const { onSelectSort, onSelectSortOrder, sort, sortOrder } = props

  const { t } = useTranslation('article')

  const sortOptions = useMemo(
    (): Array<Option<ArticleSort>> => [
      {
        content: t('date'),
        value: 'createdAt'
      },
      {
        content: t('views').toLowerCase(),
        value: 'views'
      },
      {
        content: t('title'),
        value: 'title'
      }
    ],
    [t]
  )

  const sortOrderOptions = useMemo(
    (): Array<Option<ArticleSortOrder>> => [
      {
        content: 'ASC',
        value: 'asc'
      },
      {
        content: 'DESC',
        value: 'desc'
      }
    ],
    []
  )

  return (
    <div className={classNames(s.sortselect)}>
      <Select<ArticleSort>
        label={t('sort')}
        onSelect={onSelectSort}
        options={sortOptions}
        initialValue={sort}
      />
      <Select<ArticleSortOrder>
        label={t('sort-order')}
        onSelect={onSelectSortOrder}
        options={sortOrderOptions}
        initialValue={sortOrder}
      />
    </div>
  )
})
