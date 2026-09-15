import { Link } from 'react-router-dom';

export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="FIKRA home">
      <img src="/assets/fikra-logo-card.png" alt="FIKRA" className="brand__logo" />
      <span className="brand__name">FIKRA <b>369</b></span>
    </Link>
  );
}
