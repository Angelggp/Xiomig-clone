// hooks/.ts
import { useQuery } from "@tanstack/react-query";
import { fetchSiteSettings } from "../api/siteSettingsService";

export const useSiteSettings = () => {
  return useQuery({
    queryKey: ["site-settings"],
    queryFn: fetchSiteSettings,
    staleTime: 1000 * 60 * 5, // 5 minutos
    refetchOnWindowFocus: false, // no recargar al cambiar de pestaña
  });
};
