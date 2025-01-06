// import { format } from 'date-fns';
import api from ".";
import { AxiosError } from "axios";

export const getSymbolData = async (
  symbolName: string,
  selectedDate: string | null
): Promise<string | null> => {
  try {
      const baseUrl = `/data/stock/${symbolName}`;
      const url = selectedDate
          ? `${baseUrl}?referenceDate=${selectedDate}`
          : baseUrl;

      const response = await api.post<string>(url);
      return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response) {
      const status = axiosError.response.status;

      if (status === 404) {
        return (axiosError.response.data as { detail: string }).detail;
      }
      if (status === 500) {
        console.error("Server error:", axiosError.response.data);
        return null;
      }
    }
    console.error("Request failed:", axiosError.message);
    return null;
  }
};