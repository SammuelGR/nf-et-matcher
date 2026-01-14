import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

import { PATHS } from '@/routes/paths';

export default function NotFound() {
  const { t } = useTranslation('notFound');

  return (
    <div className="flex flex-col min-h-screen items-center justify-center text-center bg-muted">
      <h1 className="mb-4 text-4xl text-primary font-bold">{t(($) => $.title)}</h1>

      <p className="mb-4 text-xl">{t(($) => $.description)}</p>

      <Link className="text-highlight underline hover:text-highlight/90" to={PATHS.GENERATOR}>
        {t(($) => $.cta)}
      </Link>
    </div>
  );
}
