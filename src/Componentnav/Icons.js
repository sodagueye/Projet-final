import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaHeart, FaComment } from 'react-icons/fa';

const Icons = ({ comments }) => {
  const [likes, setLikes] = useState(0);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [commentList, setCommentList] = useState(comments);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleShowCommentModal = () => {
    setShowCommentModal(true);
  };

  const handleCloseCommentModal = () => {
    setShowCommentModal(false);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setCommentList([...commentList, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="icons-container">
      <div className="icon" onClick={handleLike}>
        <FaHeart color="red" /> {likes}
      </div>
      <div className="icon" onClick={handleShowCommentModal}>
        <FaComment /> {commentList.length}
      </div>

      <Modal show={showCommentModal} onHide={handleCloseCommentModal}>
        <Modal.Header closeButton>
          <Modal.Title>Commentaires</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {commentList.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Ajouter un commentaire"
          />
          <Button onClick={handleAddComment}>Ajouter</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCommentModal}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Icons;
