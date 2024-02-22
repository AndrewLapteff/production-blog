import { ChangeEvent, memo, useMemo } from 'react'
import s from './Select.module.scss'
import { classNames } from 'shared/lib'

export interface Option {
  value: any
  content: string
}
interface Payload {
  payload: any
  type: any
}

interface SelectProps {
  label?: string
  options: Option[]
  readonly?: boolean
  currentCountry?: string
  onSelect: (e: ChangeEvent<HTMLSelectElement>) => Payload
}

export const Select = memo(
  ({ label, options, readonly, currentCountry, onSelect }: SelectProps) => {
    const optionsArray = useMemo(
      () =>
        options.map((opt) => {
          if (currentCountry === opt.value) {
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
      [options, currentCountry]
    )

    return (
      <div className={classNames(s['select-wrapper'])}>
        {label && (
          <label>
            <span>{label}</span>
          </label>
        )}
        <select
          defaultValue={currentCountry}
          onChange={onSelect}
          disabled={readonly}
          className={s.select}
        >
          {optionsArray}
        </select>
      </div>
    )
  }
)
