import fontawesome from '@fortawesome/fontawesome';
import {
  faCaretLeft,
  faExternalLinkAlt
} from '@fortawesome/fontawesome-free-solid';
import {
  faTwitter,
  faLinkedinIn,
  faGithubAlt
} from '@fortawesome/fontawesome-free-brands';

export default function initializeIcons() {
  // Initialize icon library to enable treeshaking
  fontawesome.library.add(
    faCaretLeft,
    faExternalLinkAlt,
    faGithubAlt,
    faTwitter,
    faLinkedinIn
  );
}
