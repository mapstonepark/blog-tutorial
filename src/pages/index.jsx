import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
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
    </Layout>
  );
}