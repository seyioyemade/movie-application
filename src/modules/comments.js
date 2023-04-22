const commentsData = async (ul, id) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/l9F9LbmS8FpilLXhSiV3/comments?item_id=item${id}`);
  const jsonData = await response.json();

  jsonData.forEach((item) => {
    ul.innerHTML += `<li>${item.creation_date} ${item.username}: ${item.comment}</li>`;
  });
};

export default commentsData;