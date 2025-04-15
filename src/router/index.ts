import { createBrowserRouter } from 'react-router'
import Tasks from '@/pages/Tasks'
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
        Component: Tasks,
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
