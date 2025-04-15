/**
 * @author 杨雪枫 987061450@qq.com
 * @description 左边配置组件
 */
import classNames from 'classnames'
import React, { PropsWithChildren } from 'react'

type TaskConfig = {
  title: string | React.ReactNode
}
function TaskConfig(props: TaskConfig & PropsWithChildren) {
  const { title, children } = props
  return (
    <div className={classNames(['task-config border-radius p-3'])}>
      <div className='title'>{title}</div>
      {children}
      {/* <div style={{height: '2000px'}}>123</div> */}
      {/* 测试超出滚动 */}
    </div>
  )
}

export default TaskConfig
