import { Link } from 'react-router';

import { PATHS } from '@/routes/paths';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center text-center bg-muted">
      <h1 className="mb-4 text-4xl text-primary font-bold">404</h1>

      <p className="mb-4 text-xl">Oops! Page not found</p>

      <Link className="text-highlight underline hover:text-highlight/90" to={PATHS.GENERATOR}>
        Return to Home
      </Link>
    </div>
  );
}
