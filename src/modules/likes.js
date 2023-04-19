export const updateLikes = async (id, likes) => {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CAgGSvEwNloHCTrC5zAj/likes/')
    const data = await response.json()
  
    data.filter((item) => {
      if (item.item_id === `item${id}`) {
        likes.innerHTML = `${item.likes} likes`;
      }
    })
  }
  
  export const addLike = async (id, likes) => {
    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CAgGSvEwNloHCTrC5zAj/likes/',{
      method: 'POST',
        body: JSON.stringify({
          item_id: `item${id}`,
        }),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
    })
  
    updateLikes(id, likes)
  }