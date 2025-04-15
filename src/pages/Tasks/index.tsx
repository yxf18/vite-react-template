import { Link, Outlet } from 'react-router'

function Tasks() {
  return (
    <div>
      <h1>task</h1>
      <Link to="/tasks/crawlerTask">CrawlerTask</Link>
      <Link to="/tasks/analysisTask">AnalysisTask</Link>
      <Outlet />
    </div>
  )
}

export default Tasks
