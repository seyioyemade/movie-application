export const commentsData = async (ul, id) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/l9F9LbmS8FpilLXhSiV3/comments?item_id=item${id}`);
  const jsonData = await response.json();

  jsonData.forEach((item) => {
    ul.innerHTML += `<li>${item.creation_date} ${item.username}: ${item.comment}</li>`;
  });
};

export const postData = async (id, input, textarea) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/l9F9LbmS8FpilLXhSiV3/comments', {
    method: 'POST',
    body: JSON.stringify({
      item_id: `item${id}`,
      username: input.value,
      comment: textarea.value,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
};

export const updateData = async (id, ul) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/l9F9LbmS8FpilLXhSiV3/comments?item_id=item${id}`);
  const jsonData = await response.json();

  const lastItem = jsonData[jsonData.length - 1];

  ul.innerHTML += `<li>${lastItem.creation_date} ${lastItem.username}: ${lastItem.comment}</li>`;
};

export const addComment = (form, id, input, textarea, ul) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if ((input.value.length > 0) && (textarea.value.length > 0)) {
      await postData(id, input, textarea);
      await updateData(id, ul);
    }

    form.reset();
  });
};
