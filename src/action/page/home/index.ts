export const ON_LOADED_PAGE = 'HOME_PAGE.ON_LOADED_PAGE'

export interface OnLoadedPage {
  type: typeof ON_LOADED_PAGE
}

export const onLoadedPage =
  (): OnLoadedPage => ({ type: ON_LOADED_PAGE })

export const ON_COMPLETED_TODO = 'HOME_PAGE.ON_COMPLETED_TODO'

export interface OnCompletedTodo {
  type: typeof ON_COMPLETED_TODO
  payload: {
    id: string,
    completed: boolean
  }
}

export const onCompletedTodo =
  (id: string, completed: boolean): OnCompletedTodo =>
    ({
      type: ON_COMPLETED_TODO,
      payload: {
        id,
        completed,
      }
    })

export const ON_CHANGE_TEXT_FIELD = 'HOME_PAGE.ON_CHANGE_TEXT_FIELD'

export interface OnChangeTextField {
  type: typeof ON_CHANGE_TEXT_FIELD
  payload: {
    value: string
  }
}

export const onChangeTextField =
  (value: string): OnChangeTextField =>
    ({
      type: ON_CHANGE_TEXT_FIELD,
      payload: {
        value
      }
    })
