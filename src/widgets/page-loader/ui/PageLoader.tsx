import { Loader } from 'shared/ui/loader/Loader'
import s from './PageLoader.module.scss'
import { classNames } from 'shared/lib/classNames'

export const PageLoader = () => {
  return (
    <div className={classNames(s['page-loader'])}>
      <Loader />
    </div>
  )
}
