import { apiClient } from './client';
import type { Department } from '../types';

export const departmentsService = {
  // Obtener todos los departamentos
  getAllDepartments: async (): Promise<Department[]> => {
    try {
      const response = await apiClient.get<Department[]>('/departments/');
      
      // Debug: Verificar la respuesta
      console.log('API Response:', response.data);
      
      // Validar que sea un array
      if (!Array.isArray(response.data)) {
        console.error('API no retornó un array:', response.data);
        throw new Error('La respuesta del servidor no es válida');
      }
      
      return response.data;
    } catch (error) {
      console.error('Error en departmentsService.getAllDepartments:', error);
      throw error;
    }
  },

  // Obtener departamento específico (por si lo necesitas después)
  getDepartmentById: async (id: number): Promise<Department> => {
    const response = await apiClient.get<Department>(`/departments/${id}/`);
    return response.data;
  },

  // Obtener departamento por slug (por si lo necesitas después)
  getDepartmentBySlug: async (slug: string): Promise<Department> => {
    const response = await apiClient.get<Department>(`/departments/slug/${slug}/`);
    return response.data;
  },
};

export default departmentsService;