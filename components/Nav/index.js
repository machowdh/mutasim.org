/* eslint-disable jsx-a11y/anchor-has-content */
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import * as styles from './styles';

const links = [
  { title: 'About', href: '/about' },
  { title: 'Work', href: '/projects' },
  { title: 'Contact', href: '/contact' },
  { title: 'Blog', href: '/posts' },
];

export function NavLink({ href, ...props }) {
  const { asPath } = useRouter();
  const isActive = asPath === href || asPath === props.as;

  return (
    <NextLink href={href} passHref>
      <span
        css={[styles.link, isActive && styles.active]}
        aria-current={isActive ? 'page' : null}
        {...props}
      />
    </NextLink>
  );
}

// function Nav() {
//   return (
//     <ul css={styles.links}>
//       {links.map((link) => (
//         <li key={link.title}>
//           <NavLink href={link.href}>{link.title}</NavLink>
//         </li>
//       ))}
//     </ul>
//   );
// }

function Nav() {
  return (
    <ul css={styles.links}>
      {links.map((link) => (
        <li key={link.title}>
          <a href={link.href} css={styles.link}>
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Nav;
