// import { format } from 'date-fns';
import api from ".";
import { AxiosError } from "axios";
import { ISymbolResponse } from "../types/SymbolType";

export const getSymbolData = async (
  symbolName: string,
  selectedDate: string | null
): Promise<ISymbolResponse | null> => {
  try {
    const baseUrl = `/data/stock/${symbolName}`;
    const url = selectedDate ? `${baseUrl}?referenceDate=${selectedDate}` : baseUrl;

    const response = await api.post<ISymbolResponse>(url);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response) {
      const status = axiosError.response.status;
      console.error("Request failed with status:", status);
      return null;
    }
    console.error("Request failed:", axiosError.message);
    return null;
  }
};