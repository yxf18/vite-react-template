/**
 * @author 杨雪枫 987061450@qq.com
 * @description
 */
// stores/counter.ts
import { makeAutoObservable } from 'mobx'
import { EnumTask } from './constant'

export class AppStore {
  currentTask = EnumTask.CRAWLER_TASK

  constructor() {
    makeAutoObservable(this)
  }

  setCurrentTask(task: EnumTask) {
    this.currentTask = task
  }
}
