import { NextPageContext } from 'next';
import Error from 'next/error';

function Page({ statusCode }: { statusCode: number }) {
  return <Error statusCode={statusCode}></Error>;
}

interface Context extends NextPageContext {
  // any modifications to the default context, e.g. query types
}

Page.getInitialProps = ({ res, err }: Context) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Page;
