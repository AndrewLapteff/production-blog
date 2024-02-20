import { memo, useMemo } from 'react'
import s from './Select.module.scss'
import { classNames } from 'shared/lib'

export interface Option {
  value: any
  content: string
}

interface SelectProps {
  label?: string
  options: Option[]
  readonly?: boolean
}

export const Select = memo(({ label, options, readonly }: SelectProps) => {
  const optionsArray = useMemo(
    () =>
      options.map((opt) => {
        return (
          <option className={s.option} key={opt.value} value={opt.value}>
            {opt.content}
          </option>
        )
      }),
    [options]
  )

  return (
    <div className={classNames(s['select-wrapper'])}>
      {label && (
        <label>
          <span>{label}</span>
        </label>
      )}
      <select disabled={readonly} className={s.select}>
        {optionsArray}
      </select>
    </div>
  )
})
