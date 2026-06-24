export interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

export const initialState: AuthState = {
  token: localStorage.getItem('token'),
  loading: false,
  error: null
}
