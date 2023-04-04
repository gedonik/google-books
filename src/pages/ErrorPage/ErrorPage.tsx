import { useRouteError } from 'react-router-dom';
import styles from './ErrorPage.module.scss';

export default function ErrorPage() {
    const error: any = useRouteError();

    return (
        <div className={styles.errorPage} id="error-page">
            <h2 className={styles.errorPage__title}>Oops!</h2>
            <p className={styles.errorPage__description}>Sorry, an unexpected error has occurred.</p>
            <p><strong>Status: </strong>{error ? error.statusText : 'Unexpected error'}</p>
        </div>
    );
}