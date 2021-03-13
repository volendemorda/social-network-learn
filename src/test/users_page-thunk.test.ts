import {
  followThunkCreator,
  UnfollowThunkCreator,
} from "../Redux/usersReducer"
import { initUsersTypes } from "../type/UsersTypes"
import { userAPI } from "../components/API/UserAPI"
import { IUnFollowType } from "../type/TypeAxiosAPI"

jest.mock("../components/API/UserAPI")
const userApiMock = userAPI as jest.Mocked<typeof userAPI>

const result: IUnFollowType = {
  resultCode: 0,
  messages: [],
  data: {},
}

// @ts-ignore
userApiMock.follow.mockReturnValue(Promise.resolve(result))

let state: initUsersTypes
beforeEach(() => {
  state = {
    users: [
      {
        id: 1,
        name: "robert",
        followed: true,
        photos: { large: null, small: null },
        status: "fewef",
      },
      {
        id: 2,
        name: "g",
        followed: false,
        photos: { large: null, small: null },
        status: "vdfv",
      },
      {
        id: 3,
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

test("follow thunk creator", async () => {
  const thunk = followThunkCreator(1)
  const dispatchMock = jest.fn()
  // @ts-ignore
  await thunk(dispatchMock)
  expect(dispatchMock).toBeCalledTimes(3)
})
test("unFollow", async ()=>{
    const thunk = UnfollowThunkCreator(1)
    const dispatchMock = jest.fn()
  // @ts-ignore
    await thunk(dispatchMock)
    expect(dispatchMock).toBeCalledTimes(3)
    expect(state.disableButton.length).toBe(1)
})