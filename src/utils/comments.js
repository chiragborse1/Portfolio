export const getComments = () => {
  const comments = localStorage.getItem('comments');
  return comments ? JSON.parse(comments) : [];
};

export const addComment = (comment) => {
  const comments = getComments();
  const newComment = {
    id: Date.now().toString(),
    ...comment,
    createdAt: new Date().toISOString(),
  };
  comments.unshift(newComment);
  localStorage.setItem('comments', JSON.stringify(comments));
  return newComment;
};