import { useEffect, useReducer } from "react";

interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

type FetchAction<T> =
  | { type: typeof actionType.INIT }
  | { type: typeof actionType.SUCCESS; payload: T }
  | { type: typeof actionType.FAILURE; payload: Error };

const actionType = {
  INIT: "INIT",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
} as const;

function fetchReducer<T>(
  state: FetchState<T>,
  action: FetchAction<T>,
): FetchState<T> {
  switch (action.type) {
    case actionType.INIT:
      return { ...state, isLoading: true, error: null };
    case actionType.SUCCESS:
      return { ...state, isLoading: false, data: action.payload, error: null };
    case actionType.FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error("잘못된 action 타입입니다.");
  }
}

function useFetch<T>(
  url: string,
  method: string,
  body?: Record<string, unknown>,
): FetchState<T> {
  const [state, dispatch] = useReducer(fetchReducer, {
    data: null,
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: actionType.INIT });

      try {
        const options: RequestInit = {
          method,
          headers: {
            "Content-Type": "application/json",
          },
        };

        if (body) {
          options.body = JSON.stringify(body);
        }

        const response = await fetch(url, options);
        const data = await response.json();
        dispatch({ type: actionType.SUCCESS, payload: data.data });
      } catch (error) {
        dispatch({ type: actionType.FAILURE, payload: error as Error });
      }
    };

    fetchData();
  }, [url, method, body]);

  return state as FetchState<T>;
}

export default useFetch;
