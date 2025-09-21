import { apiClient } from './client';
import type { ServiceCategory } from '../types';

export const servicesService = {
  // Obtener todas las categorías de servicios
  getAllServices: async (): Promise<ServiceCategory[]> => {
    try {
      const response = await apiClient.get<ServiceCategory[]>('/service-categories/');

      // Debug: Verificar la respuesta
      console.log('API Response:', response.data);

      if (!Array.isArray(response.data)) {
        console.error('API no retornó un array:', response.data);
        throw new Error('La respuesta del servidor no es válida');
      }

      return response.data;
    } catch (error) {
      console.error('Error en servicesService.getAllServices:', error);
      throw error;
    }
  },

  // Obtener servicio específico por ID
  getServiceById: async (id: number): Promise<ServiceCategory> => {
    const response = await apiClient.get<ServiceCategory>(`/service-categories/${id}/`);
    return response.data;
  },

  // Obtener servicio por slug
  getServiceBySlug: async (slug: string): Promise<ServiceCategory> => {
    const response = await apiClient.get<ServiceCategory>(`/service-categories/slug/${slug}/`);
    return response.data;
  },
};

export default servicesService;
