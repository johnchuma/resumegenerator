import axios from "axios";
import { server_url } from "../utils/endpoint";


export const createResume = async () => {
    try {
        const response = await axios.post(`${server_url}/resume/`,{});
       return response.data.body
      } catch (error) { 
        throw error
      }
  };
  export const createJob = async (uuid,data) => {
    try {
        const response = await axios.post(`${server_url}/job/${uuid}`,data);
       return response.data.body
      } catch (error) { 
        throw error
      }
  };
  export const createJobRole = async (uuid,data) => {
    try {
        const response = await axios.post(`${server_url}/job-role/${uuid}`,data);
       return response.data.body
      } catch (error) { 
        throw error
      }
  };
  export const deleteJob = async (uuid) => {
    try {
        const response = await axios.delete(`${server_url}/job/${uuid}`);
       return response.data.body
      } catch (error) { 
        throw error
      }
  };
  export const createSkill = async (uuid,data) => {
    try {
        const response = await axios.post(`${server_url}/skill/${uuid}`,data);
       return response.data.body
      } catch (error) { 
        throw error
      }
  };
  export const createCertificate = async (uuid,data) => {
    try {
        const response = await axios.post(`${server_url}/certificate/${uuid}`,data);
       return response.data.body
      } catch (error) { 
        throw error
      }
  };
  export const createLanguage = async (uuid,data) => {
    try {
        const response = await axios.post(`${server_url}/language/${uuid}`,data);
       return response.data.body
      } catch (error) { 
        throw error
      }
  };
  export const generateResume = async () => {
    try {
        const response = await axios.post(`${server_url}/generatePdf/`,{});
       return response.data.body
      } catch (error) { 
        throw error
      }
  };
  export const updateResume = async (uuid,data) => {
    try {
        const response = await axios.patch(`${server_url}/resume/${uuid}`,data);
       return response.data.body
      } catch (error) { 
        throw error
      }
  };
  export const getResume = async (uuid) => {
    try {
        const response = await axios.get(`${server_url}/resume/${uuid}`);
       return response.data.body
      } catch (error) { 
        throw error
      }
  };