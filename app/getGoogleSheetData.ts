
import { TService } from "@/component/sections/ServiceSection";
import axios from "axios";
import { Category } from "./mehandi-services/page";

type GoogleSheetRow = Record<string, string | undefined>;

const sheetId = '1fcU3T0cJKRDdSJCtCpJqEGq_86q0L3Ax6VT0FtnOd4s';
const apiKey = 'AIzaSyAEJ9q4A-9Gn-uxrnd-e81JMLb_1y8Yy_M';


export type API_Response = {
  image_url: string;
  id: string;
  category: Category;
  alt_text: string;
 }


export async function fetchGoogleSheetData<T extends GoogleSheetRow>(
  
): Promise<T[]> {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/all_images_data?key=${apiKey}`;

  try {
    const response = await axios.get(url);
    const rows: string[][] = response.data.values; // Contains rows of the sheet
    const [header, ...data] = rows; // Extract header and data rows

    // Map data rows to objects with keys from the header row
    const res =  data.map((row) =>
      header.reduce((acc, key, idx) => {
        (acc as Record<string, any>)[key] = row[idx]; // Use a mutable Record here
        return acc;
      }, {} as T)

    );
    return res;
  } catch (error) {
    console.error("Error fetching Google Sheets data:", error);
    return [];
  }
}








export async function fetchGoogleSheetServicesData(): Promise<TService[]> {
  console.log('fetchGoogleSheetServicesData');
  const url = `https://sheets.googleapis.com/v4/spreadsheets/1fcU3T0cJKRDdSJCtCpJqEGq_86q0L3Ax6VT0FtnOd4s/values/service_based_images?key=${apiKey}`;

  try {
    const response = await axios.get(url);
    const rows: string[][] = response.data.values; // Contains rows of the sheet
    const [header, ...data] = rows; // Extract header and data rows

    // Map data rows to objects with keys from the header row
    const res =  data.map((row) =>
      header.reduce((acc, key, idx) => {
        (acc as Record<string, any>)[key] = row[idx]; // Use a mutable Record here
        return acc;
      }, {} as TService)

    );
    return res;
  } catch (error) {
    console.error("Error fetching Google Sheets data:", error);
    return [];
  }
}