import axios from "axios";

export const fetchApiData = async (sourceApiData) => {
    const response = await axios.get(sourceApiData);
    return await response.data;
}; 