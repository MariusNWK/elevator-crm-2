type TSuccess = {
  success: string;
}

type TError = {
  error: string;
}

export type TResponse = TSuccess | TError;
