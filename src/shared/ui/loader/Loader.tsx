import s from './Loader.module.scss'
import { classNames } from 'shared/lib'

export const Loader = () => {
  return (
    <div className={classNames(s.loader)}>
      <div className={s['loadingio-spinner-gear-s1anuvdmmbk']}>
        <div className={s['ldio-d2bwg6ek69j']}>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
