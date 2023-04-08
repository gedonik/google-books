import { useRouteError } from 'react-router-dom';

import styles from './ErrorPage.module.scss';

export default function ErrorPage() {
  const error: unknown = useRouteError();

  return (
    <div className={styles.errorPage} id="error-page">
      <h2 className={styles.errorPage__title}>Oops!</h2>
      <div className={styles.errorPage__description}>
        Sorry, an unexpected error has occurred.
      </div>
      <div>
        <strong>Status: </strong>
        {!!error || 'Unexpected error'}
      </div>
    </div>
  );
}
