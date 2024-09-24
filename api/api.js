import fetch from "node-fetch";

export const photoApi = {
  async postImageApi(
    session = "ahpbPzrKjf7NWBZ0ZV2eBlcW6d0QXbxIIJ+2GZW2/4U=",
    formData,
    filename
  ) {
    const response = await fetch("https://miniandroid.top:8080/rate_image/", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${session}`,
        Accept: "*/*",
        "Access-Control-Allow-Origin":
          "https://miniandroid.top:8080/rate_image/",
        "Access-Control-Allow-Methods":
          "GET, POST, OPTIONS, PUT, PATCH, DELETE",
        "Access-Control-Allow-Headers":
          "origin,X-Requested-With,content-type,accept",
        "Access-Control-Allow-Credentials": "true",
        "Content-Disposition": `form-data; name="image_files"; filename="${filename}"`,
      },
    });

    console.log("Ответ сервера:", response); // Логируем ответ

    return response;
  },
};
