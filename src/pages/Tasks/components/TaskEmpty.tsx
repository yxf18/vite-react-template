/**
 * @author 杨雪枫 987061450@qq.com
 * @description 空任务展示页面
 */
import classNames from 'classnames'
import React from 'react'

function TaskEmpty() {
  return (
    <div className={classNames(['task-empty border-radius p-3'])}>任务为空</div>
  )
}

export default TaskEmpty
