import axios from "axios";
import { buildQueryString } from "./URLUtils";
const BASE_URL = "http://localhost:8000";

const axiosWithCredentials = axios.create({withCredentials:true});

export async function searchPatients(term, limit, page) {
  const queryString = buildQueryString("", { q: term, page,limit });
  console.log(queryString);
  const response = await axiosWithCredentials.get(`${BASE_URL}/patients${queryString}`);
  return response.data;
}

export async function addPatient(patient) {
  const res = await axios.post(`${BASE_URL}/patients`, patient);
  let patientId;
  if (res.headers.location) {
    patientId = res.headers.location.match(/[^/]+$/g)[0];
  }
  return patientId;
}

export async function getPatient(id) {
  const res = await axiosWithCredentials.get(`${BASE_URL}/patients/${id}`);
  console.log(res.data);
  return res.data;
}

export async function updatePatient(id,update) {
  await axiosWithCredentials.patch(`${BASE_URL}/patients/${id}`,update);
  
}

export async function deletePatient(id) {
  await axiosWithCredentials.delete(`${BASE_URL}/patients/${id}`)

}

export async function login(credentials){
  return await axiosWithCredentials.post(`${BASE_URL}/login`,credentials);
}


