import fetch from "node-fetch";

export const photoApi = {
  async postImageApi(
    session = "ahpbPzrKjf7NWBZ0ZV2eBlcW6d0QXbxIIJ+2GZW2/4U=",
    images
  ) {
    const response = await fetch(
      "https://miniandroid.top:8080/rate_image/base64/",
      {
        method: "POST",
        body: JSON.stringify({ images }),
        headers: {
          Authorization: `Bearer ${session}`,
          accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    return response;
  },
};
export const userApi = {
  async getUserRefferallCountApi(
    session = "ahpbPzrKjf7NWBZ0ZV2eBlcW6d0QXbxIIJ+2GZW2/4U="
  ) {
    const response = await fetch(
      "https://miniandroid.top:8080/referral_use/count",
      {
        method: "get",
        headers: {
          Authorization: `Bearer ${session}`,
          accept: "application/json",
        },
      }
    );

    return response;
  },
};
