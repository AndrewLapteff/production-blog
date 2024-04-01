import s from './ArticlesControls.module.scss'
import {
  classNames,
  useDebounce,
  useDispatchCallback,
  useThunkDispatch
} from 'shared/lib'
import { ChangeEvent, memo, ReactNode, useCallback, useMemo } from 'react'
import { Button, Input } from 'shared/ui'
import Burger2 from 'shared/assets/icons/burger2.svg'
import Burger3 from 'shared/assets/icons/burger3.svg'
import {
  changeView,
  setSearch,
  setSort,
  setSortOrder
} from 'pages/articles-page/model/slice/articlesSlice'
import { ArticleSort, ArticleSortOrder, ArticleView } from 'entities/Article'
import { useDispatch, useSelector } from 'react-redux'
import { SortSelect } from '../sort-select/SortSelect'
import { getSearchArticles } from 'pages/articles-page/model/selectors/articlesSelectors'
import { fetchArticles } from 'pages/articles-page/model/services/fetchArticles/fetchArticles'

interface ArticlesControlsProps {
  children?: ReactNode
  view: ArticleView
  sort: ArticleSort
  sortOrder: ArticleSortOrder
  search: string
}

const buttons: Array<{
  type: ArticleView
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}> = [
  { type: 'classic', Svg: Burger3 },
  { type: 'compact', Svg: Burger2 }
]
type EventType = ChangeEvent<any>

export const ArticlesControls = memo((props: ArticlesControlsProps) => {
  const { view, sort, sortOrder, search } = props
  const dispatch = useDispatch()
  const thunkDispatch = useThunkDispatch()

  const onChangeView = useCallback(
    (view: ArticleView) => () => {
      return dispatch(changeView(view))
    },
    [dispatch]
  )

  const fetchArticlesHandler = useCallback(() => {
    thunkDispatch(fetchArticles({ replace: true }))
  }, [thunkDispatch])

  const debouncedFetch = useDebounce(fetchArticlesHandler, 1000)

  const onSelectSort = useCallback(
    (e: EventType) => {
      dispatch(setSort(e.target.value as ArticleSort))
      fetchArticlesHandler()
    },
    [dispatch, fetchArticlesHandler]
  )
  const onSelectSortOrder = useCallback(
    (e: EventType) => {
      dispatch(setSortOrder(e.target.value as ArticleSortOrder))
      fetchArticlesHandler()
    },
    [dispatch, fetchArticlesHandler]
  )
  const onSelectSearch = useCallback(
    (e: EventType) => {
      dispatch(setSearch(e.target.value as string))
      debouncedFetch()
    },
    [dispatch, debouncedFetch]
  )

  const viewButtons = useMemo(
    () =>
      buttons.map(({ type, Svg }) => {
        return (
          <Button key={type} onClick={onChangeView(type)} variant="icon">
            <Svg
              className={classNames(s['view-item'], {
                [s.active]: view === type
              })}
              width={30}
              height={30}
            />
          </Button>
        )
      }),
    [onChangeView, view]
  )

  return (
    <div className={classNames(s.articlescontrols)}>
      <Input onChange={onSelectSearch} value={search} />
      <SortSelect
        onSelectSort={onSelectSort}
        onSelectSortOrder={onSelectSortOrder}
        sortOrder={sortOrder}
        sort={sort}
      />
      <div className={s.views}>{viewButtons}</div>
    </div>
  )
})
