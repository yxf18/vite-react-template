/**
 * @author 杨雪枫 987061450@qq.com
 * @description
 */
import { css } from '@emotion/react'
import { PropsWithChildren } from 'react'

function AppMain(props: PropsWithChildren) {
  return (
    <main
      css={css`
        padding: 23px 27px;
        height: calc(100% - 69px);
      `}
    >
      {props.children}
    </main>
  )
}

export default AppMain
