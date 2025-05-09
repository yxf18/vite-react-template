import { createBrowserRouter } from 'react-router'
import CrawlerTask from '@/pages/Tasks/CrawlerTask'
import AnalysisTask from '@/pages/Tasks/AnalysisTask'
import App from '@/App'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        path: 'tasks',
        children: [
          {
            path: 'crawlerTask',
            Component: CrawlerTask,
          },
          {
            path: 'analysisTask',
            Component: AnalysisTask,
          },
        ],
      },
    ],
  },
])

export default router;
