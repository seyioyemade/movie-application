const commentsCounter = async (ul, header) => {
  const counter = ul.children.length;

  header.textContent = `Comments (${counter})`;
};

export default commentsCounter;