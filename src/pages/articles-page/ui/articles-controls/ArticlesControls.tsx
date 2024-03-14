import s from './ArticlesControls.module.scss'
import { classNames } from 'shared/lib'
import { memo, ReactNode } from 'react'
import { Button } from 'shared/ui'
import Burger2 from 'shared/assets/icons/burger2.svg'
import Burger3 from 'shared/assets/icons/burger3.svg'
import { changeView } from 'pages/articles-page/model/slice/articlesSlice'
import { ArticleView } from 'entities/Article'
import { useDispatch } from 'react-redux'

interface ArticlesControlsProps {
  children?: ReactNode
  view: ArticleView
}

const buttons: Array<{
  type: ArticleView
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}> = [
  { type: 'classic', Svg: Burger3 },
  { type: 'compact', Svg: Burger2 }
]

export const ArticlesControls = memo((props: ArticlesControlsProps) => {
  const dispatch = useDispatch()

  const onChangeView = (view: ArticleView) => () => {
    return dispatch(changeView(view))
  }
  const { view } = props
  return (
    <div className={classNames(s.articlescontrols)}>
      <div></div>
      <div className={s.views}>
        {buttons.map(({ type, Svg }) => {
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
        })}
      </div>
    </div>
  )
})
