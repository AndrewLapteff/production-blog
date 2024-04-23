import s from './AdminPanel.module.scss'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { memo, ReactNode } from 'react'

interface AdminPanelProps {
  children?: ReactNode
}

export const AdminPanel = memo((props: AdminPanelProps) => {
  const { t } = useTranslation('')
  return <div className={classNames(s['admin-panel'])}></div>
})
