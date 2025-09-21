import { useQuery } from '@tanstack/react-query';
import { servicesService } from '../api/servicesService';
import type { ServiceCategory, ApiError } from '../types';

// Keys para React Query
export const servicesKeys = {
  all: ['services'] as const,
  lists: () => [...servicesKeys.all, 'list'] as const,
  list: (filters: string) => [...servicesKeys.lists(), { filters }] as const,
  details: () => [...servicesKeys.all, 'detail'] as const,
  detail: (id: number) => [...servicesKeys.details(), id] as const,
};

// Hook principal para obtener todos los servicios
export const useServices = () => {
  return useQuery<ServiceCategory[], ApiError>({
    queryKey: servicesKeys.lists(),
    queryFn: servicesService.getAllServices,
    staleTime: 5 * 60 * 1000, // 5 minutos
    gcTime: 10 * 60 * 1000,   // 10 minutos
    refetchOnWindowFocus: true,
    refetchInterval: import.meta.env.DEV ? 30 * 1000 : false, // polling solo en dev
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

// Hook para obtener un servicio específico por ID
export const useService = (id: number) => {
  return useQuery<ServiceCategory, ApiError>({
    queryKey: servicesKeys.detail(id),
    queryFn: () => servicesService.getServiceById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

export default useServices;
