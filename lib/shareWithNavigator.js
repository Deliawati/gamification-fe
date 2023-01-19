import { toast } from 'react-toastify';

export default function shareWithNavigator({ url, title, text }) {
  try {
    if (navigator.share) {
      navigator.share({
        title,
        text,
        url,
      });
    } else {
      toast.error('Your browser does not support sharing');
      return false;
    }
  } catch (error) {
    return false;
  }
  return true;
}
