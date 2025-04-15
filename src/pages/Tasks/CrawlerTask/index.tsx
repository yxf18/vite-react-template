import { TasksCss } from '../AnalysisTask'
import TaskConfig from '../components/TaskConfig'
import TaskEmpty from '../components/TaskEmpty'
import TaskInfo from '../components/TaskInfo'
import TaskResult from '../components/TaskResult'
import { useStore } from '@/store'
import { observer } from 'mobx-react-lite'

const mockTasks = []

function CrawlerTask() {
  const { appStore } = useStore()
  const currentTask = appStore.currentTask

  return (
    <div css={TasksCss}>
      <TaskConfig title="爬虫配置">currentTask: {currentTask}</TaskConfig>
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

export default observer(CrawlerTask)
