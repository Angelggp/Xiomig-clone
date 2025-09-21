import { useQuery } from '@tanstack/react-query';
import { departmentsService } from '../api/departmentsService';
import type { Department, ApiError } from '../types';

// Keys para React Query
export const departmentsKeys = {
  all: ['departments'] as const,
  lists: () => [...departmentsKeys.all, 'list'] as const,
  list: (filters: string) => [...departmentsKeys.lists(), { filters }] as const,
  details: () => [...departmentsKeys.all, 'detail'] as const,
  detail: (id: number) => [...departmentsKeys.details(), id] as const,
};

// Hook principal para obtener todos los departamentos
export const useDepartments = () => {
  return useQuery<Department[], ApiError>({
    queryKey: departmentsKeys.lists(),
    queryFn: departmentsService.getAllDepartments,
    staleTime: 5 * 60 * 1000, // 5 minutos
    gcTime: 10 * 60 * 1000, // 10 minutos (antes era cacheTime)
    refetchOnWindowFocus: true, // Refetch cuando vuelves a la ventana
    refetchInterval: 30 * 1000, // Refetch cada 30 segundos para tiempo real
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

// Hook para obtener un departamento específico (por si lo necesitas)
export const useDepartment = (id: number) => {
  return useQuery<Department, ApiError>({
    queryKey: departmentsKeys.detail(id),
    queryFn: () => departmentsService.getDepartmentById(id),
    enabled: !!id, // Solo ejecuta si hay un ID válido
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

export default useDepartments;