/**
 * @author 杨雪枫 987061450@qq.com
 * @description 网址头部
 */
import { useStore } from '@/store'
import { EnumTask } from '@/store/constant'
import { css } from '@emotion/react'
import { Button, Space } from 'antd'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router'

const HeaderCss = css`
  display: flex;
  align-items: center;
  height: 69px;
  background: #d3d3d3;
  span {
    margin: auto 20px;
  }
`

function AppHeader() {
  const { appStore } = useStore()
  const navigate = useNavigate()

  return (
    <header css={HeaderCss}>
      <span>爬虫系统</span>
      <Space>
        <Button
          type={appStore.currentTask === EnumTask.CRAWLER_TASK ? 'primary' : 'default'}
          onClick={() => {
            appStore.setCurrentTask(EnumTask.CRAWLER_TASK)
            navigate('/tasks/crawlerTask')
          }}
        >
          爬虫任务
        </Button>
        <Button
          type={appStore.currentTask === EnumTask.ANALYSIS ? 'primary' : 'default'}
          onClick={() => {
            appStore.setCurrentTask(EnumTask.ANALYSIS)
            navigate('/tasks/analysisTask')
          }}
        >
          分析任务
        </Button>
      </Space>
    </header>
  )
}

export default observer(AppHeader)
