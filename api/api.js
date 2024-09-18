export const photoApi = {
  async postImageApi(tgID = "1", imageBaseUri) {
    const response = await fetch("http://188.245.158.191:8000/rate_image/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        image_file: [imageBase64],
        telegram_id: tgID,
      }),
    });
    return response.data;
  },
};
