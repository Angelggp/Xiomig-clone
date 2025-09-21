// services/siteSettingsService.ts
import { apiClient } from './client';

export const fetchSiteSettings = async () => {
  const { data } = await apiClient.get(`/site-settings/`);
  return data;
};

