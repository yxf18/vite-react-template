import TaskConfig from '../components/TaskConfig'
import TaskEmpty from '../components/TaskEmpty'
import TaskInfo from '../components/TaskInfo'
import TaskResult from '../components/TaskResult'
import { css } from '@emotion/react'
import { useStore } from '@/store'
import { observer } from 'mobx-react-lite'

const mockTasks = [1, 2]

export const TasksCss = css`
  height: 100%;
  display: flex;
  gap: 16px;
  .task-config {
    width: 30%;
    background: #f0f0f0;
    height: 100%;
    overflow-y: auto;
  }

  .task-info-wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 100%;
    overflow-y: auto;
    .task-info {
      flex: 1;
      background: #e0e0e0;
    }

    .task-result {
      flex: 1;
      background: #d0d0d0;
    }
  }

  .task-empty {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

function AnalysisTask() {
  const { appStore } = useStore()
  const currentTask = appStore.currentTask

  return (
    <div css={TasksCss}>
      <TaskConfig title="分析配置">currentTask: {currentTask}</TaskConfig>
      {!mockTasks.length ? (
        <TaskEmpty />
      ) : (
        <div className="task-info-wrap">
          <TaskInfo></TaskInfo>
          <TaskResult></TaskResult>
        </div>
      )}
    </div>
  )
}

export default observer(AnalysisTask)
