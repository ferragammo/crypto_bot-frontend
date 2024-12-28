import { format } from 'date-fns';
import api from ".";
import { AxiosError } from "axios";

export const getSymbolData = async (
  symbolName: string,
  selectedDate: Date | null
): Promise<string | null> => {
  try {
      const baseUrl = `/data/stock/${symbolName}`;
      const url = selectedDate
          ? `${baseUrl}?referenceDate=${format(selectedDate, 'yyyy-MM-dd')}`
          : baseUrl;

      const response = await api.post<string>(url);
      return response.data;
  } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response && axiosError.response.status === 500) {
          console.error(`Error with URL`, axiosError.response.data);
          return null;
      } else {
          console.error("Request failed:", axiosError.message);
          return null;
      }
  }
};
