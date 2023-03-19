import IUser from './IUser';

export interface IUserState {
    loading: boolean,
    error: null | string | undefined,
    data: IUser | null
}

export default IUserState;