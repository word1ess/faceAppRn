import fetch from "node-fetch";

export const photoApi = {
  async postImageApi(
    session = "ahpbPzrKjf7NWBZ0ZV2eBlcW6d0QXbxIIJ+2GZW2/4U=",
    formData,
    filename
  ) {
    return await fetch("https://miniandroid.top:8080/rate_image/", {
      method: "POST",
      body: formData,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${session}`,
        "Content-Type": "multipart/form-data",
        "Content-Disposition": `form-data; name="image_files"; filename="${filename}"`,
      },
    });
  },
};
