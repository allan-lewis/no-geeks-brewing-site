import Link from 'next/link';

const path = [
  { uid: 111, name: 'Home', id: 1, path: '/' },
  { uid: 222, name: 'On Tap', id: 2, path: '/OnTap' },
  { uid: 333, name: 'Future Brews', id: 3, path: '/FutureBrews' },
  { uid: 444, name: 'Archives', id: 4, path: '/Archives' }
];

export default function Menu() {
    return (
        <header>
        <nav>
          <ul>
            {path.map((value) => {
              return (
                <li key={value.uid}>
                  <Link href={value.path}>
                    {value.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    )
  }  