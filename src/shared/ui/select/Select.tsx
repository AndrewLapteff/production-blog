import { ChangeEvent, useMemo } from 'react'
import s from './Select.module.scss'
import { classNames } from 'shared/lib'

export interface Option<T extends string> {
  value: T
  content: string
}

interface Payload {
  payload: any
  type: any
}

interface SelectProps<T extends string> {
  label?: string
  options: Array<Option<T>>
  value?: T
  readonly?: boolean
  onSelect: (e: ChangeEvent<HTMLSelectElement>) => Payload
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const { label, options, readonly, onSelect, value } = props

  const optionsArray = useMemo(
    () =>
      options.map((opt) => {
        if (value === opt.value) {
          return (
            <option className={s.option} key={opt.value} value={opt.value}>
              {opt.content}
            </option>
          )
        }

        return (
          <option className={s.option} key={opt.value} value={opt.value}>
            {opt.content}
          </option>
        )
      }),
    [options, value]
  )

  return (
    <div className={classNames(s['select-wrapper'])}>
      {label && (
        <label>
          <span>{label}</span>
        </label>
      )}
      <select
        value={value}
        onChange={onSelect}
        disabled={readonly}
        className={s.select}
      >
        {optionsArray}
      </select>
    </div>
  )
}
