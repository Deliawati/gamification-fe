import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  authenticationState, asyncProfile, asyncProject, asyncEnroll,
} from '../../core/redux/reducers/authenticationSlice';
import LocalStorage from '../../lib/LocalStorage';

export default function StoreInitialization() {
  const dispatch = useDispatch();
  const { locale, push } = useRouter();
  const { token, user, isAuthenticated } = useSelector(authenticationState);

  const isFirst = useRef(null);
  useEffect(() => {
    if (isAuthenticated) {
      if (!isFirst?.current) {
        dispatch(asyncProfile());
        dispatch(asyncProject());
        dispatch(asyncEnroll());
        isFirst.current = true;
      }
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (token) {
      LocalStorage.set('access_token', token);
    }
  }, [token]);

  return null;
}
