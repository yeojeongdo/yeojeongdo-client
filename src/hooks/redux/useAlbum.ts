import { IEditCommentData } from "apis/albumAPI";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "store/reducers";
import {
  CLOSE_ALBUM,
  CREATE_COMMENT_REQUEST,
  DELETE_COMMENT_REQUEST,
  EDIT_COMMENT_REQUEST,
  GET_ALBUMS_REQUEST,
  GET_ALBUM_REQUEST,
  GET_COMMENTS_REQUEST,
  OPEN_ALBUM,
} from "store/reducers/albumReducer/actions";

const useAlbum = () => {
  const dispatch = useDispatch();

  const albumState = useTypedSelector((state) => state.album);

  const getAlbums = useCallback(
    (albumId?: string) => {
      dispatch({
        type: GET_ALBUMS_REQUEST,
        payload: albumId,
      });
    },
    [dispatch]
  );

  const getAlbum = useCallback(
    (albumId: number) => {
      dispatch({
        type: GET_ALBUM_REQUEST,
        payload: albumId,
      });
    },
    [dispatch]
  );

  const getComments = useCallback(
    (albumId: number) => {
      dispatch({
        type: GET_COMMENTS_REQUEST,
        payload: albumId,
      });
    },
    [dispatch]
  );

  const deleteComment = useCallback(
    (commentId: number) => {
      dispatch({
        type: DELETE_COMMENT_REQUEST,
        payload: commentId,
      });
    },
    [dispatch]
  );

  const editComment = useCallback(
    (data: IEditCommentData) => {
      dispatch({
        type: EDIT_COMMENT_REQUEST,
        payload: data,
      });
    },
    [dispatch]
  );

  interface ICreateCommentData {
    comment: string;
    id: number;
  }

  const createComment = useCallback(
    (data: ICreateCommentData) => {
      dispatch({
        type: CREATE_COMMENT_REQUEST,
        payload: data,
      });
    },
    [dispatch]
  );

  const openAlbum = useCallback(() => {
    dispatch({
      type: OPEN_ALBUM,
    });
  }, [dispatch]);

  const closeAlbum = useCallback(() => {
    dispatch({
      type: CLOSE_ALBUM,
    });
  }, [dispatch]);

  return {
    albumState,
    openAlbum,
    closeAlbum,
    getAlbums,
    getAlbum,
    getComments,
    createComment,
    deleteComment,
    editComment,
  };
};

export default useAlbum;