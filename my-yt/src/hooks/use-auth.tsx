// * авторизован пользователь или нет? и какие есть данные*/
import { useSelector } from "react-redux";

interface UserState {
  email: string;
  token: string;
  id: string;
  isAuth: boolean;
}


export function useAuth(): UserState {
    const userState: UserState = useSelector((state: { user: UserState }) => state.user);
    return {
      isAuth: !!userState.email,
      email: userState.email,
      token: userState.token,
      id: userState.id
    };
  }