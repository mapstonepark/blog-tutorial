import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, sequi delectus quam provident quidem facere odio reiciendis eos consectetur temporibus illum quasi modi aliquam! Aliquid repellendus omnis dolorum quo numquam.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, atque. Cum, illo sed ab praesentium minima, id pariatur veritatis architecto labore aliquam maiores, sequi consectetur odio optio! Doloremque, harum ullam!
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}