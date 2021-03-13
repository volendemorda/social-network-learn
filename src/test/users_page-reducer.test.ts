import usersReducer, { UserAction } from "../Redux/usersReducer"
import { initUsersTypes } from "../type/UsersTypes"

let state: initUsersTypes
beforeEach(() => {
  state = {
    users: [
      {
        id: 0,
        name: "robert",
        followed: true,
        photos: { large: null, small: null },
        status: "fewef",
      },
      {
        id: 1,
        name: "g",
        followed: false,
        photos: { large: null, small: null },
        status: "vdfv",
      },
      {
        id: 2,
        name: "hj",
        followed: true,
        photos: { large: null, small: null },
        status: "cxvxcv",
      },
      {
        id: 3,
        name: "vv",
        followed: false,
        photos: { large: null, small: null },
        status: "cxvxcv",
      },
    ],
    currentPage: 1,
    totalCountUsers: 0,
    pageSize: 9,
    isFetching: false,
    disableButton: [],
  }
})

test("follow success", () => {
  const newState = usersReducer(state, UserAction.FollowActionCreator(0))
  expect(newState.users[0].followed).toBeTruthy()
})

test("unFollow success", () => {
  const newState = usersReducer(state, UserAction.UnFollowActionCreator(3))
  expect(newState.users[3].followed).toBeFalsy()
})

test("should stay UnFollowed", () => {
  const newState = usersReducer(state, UserAction.UnFollowActionCreator(0))
  expect(newState.users[0].followed).toBeFalsy()
})

test("change current page", () => {
    const newState = usersReducer(state, UserAction.pageUsersActionCreator(4))
    expect(newState.currentPage).toBe(4)
  })

test("check change toggle is fetching", () => {
    const newState = usersReducer(
      state,
      UserAction.toggleIsFetchingActionCreator(true)
    )
    expect(newState.isFetching).toBeTruthy()
  })