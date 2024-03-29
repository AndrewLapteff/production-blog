import { Loader } from 'shared/ui'
import s from './PageLoader.module.scss'
import { classNames } from 'shared/lib'

export const PageLoader = () => {
  return (
    <div className={classNames(s['page-loader'])}>
      <Loader />
    </div>
  )
}
