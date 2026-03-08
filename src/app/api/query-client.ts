/**
 * @description React Query Client Configuration
 * Centralized configuration for all queries and mutations
 */

import { QueryClient, type DefaultOptions } from '@tanstack/react-query';
import { handleApiError } from './utils/api-error-handler';

const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    refetchOnMount: false,
    staleTime: 10 * 60 * 1000,
    gcTime: 15 * 60 * 1000,

    retry: (failureCount, error) => {
      // dont retry on 4xx errors
      if (error instanceof Error && 'statusCode' in error) {
        const statusCode = (error as { statusCode: number }).statusCode;
        if (statusCode >= 400 && statusCode < 500) {
          return false;
        }
      }
      return failureCount < 3;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),

    // stale time - data is considered fresh for 1 minute
    // error handling
    throwOnError: false,
  },

  mutations: {
    retry: false,

    // global error handling
    onError: (error) => {
      const apiError = handleApiError(error);
      console.error('[Mutation Error]:', apiError);
    },
  },
};

export const queryClient = new QueryClient({
  defaultOptions: queryConfig,
});
