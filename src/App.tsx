import { Link, Outlet } from 'react-router'
import { Button } from 'antd'
import { css } from '@emotion/react'

function App() {
  return (
    <div>
      App
      <Link to="/tasks">task</Link>
      <Outlet />
      <Button type="primary" css={css`
        margin-top: 100px;
        color: red;
        >span{
            padding: 30px;
        }
      `}>tailwindcss</Button>
    </div>
  )
}

export default App
