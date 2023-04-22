import commentsCounter from './counter-comments.js';

export const commentsData = async (id, ul, header) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/l9F9LbmS8FpilLXhSiV3/comments?item_id=item${id}`);
  const jsonData = await response.json();

  await jsonData.forEach((item) => {
    ul.innerHTML += `<li>${item.creation_date} ${item.username}: ${item.comment}</li>`;
  });

  commentsCounter(ul, header);
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

export const addComment = (form, id, input, textarea, header, ul) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if ((input.value.length > 0) && (textarea.value.length > 0)) {
      await postData(id, input, textarea);
      await updateData(id, ul);
      await commentsCounter(ul, header);
    }

    form.reset();
  });
};
