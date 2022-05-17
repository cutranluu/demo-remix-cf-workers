import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

function Document({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
        <title>Remix Blog</title>
      </head>
      <body>
        {children}
        <LiveReload />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

function Nav() {
  return (
    <nav className='navbar'>
      <Link to='/' className='logo'>
        Nav bar
      </Link>
      <ul className='nav'>
        <li>
          <Link to='/posts'>Posts</Link>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
      </ul>
    </nav>
  )
}
function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className='container'>{children}</div>
    </>
  )
}

export function ErrorBoundary({ error }) {
  console.log(error)
  return (
    <Document>
      <Layout>
        <h1>Error</h1>
        <p>{error.message}</p>
      </Layout>
    </Document>
  )
}
