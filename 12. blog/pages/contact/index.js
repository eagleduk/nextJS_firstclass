import Head from "next/head";

import ContactForm from "../../components/contact/ContactForm";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Tell to me.</title>
      </Head>
      <ContactForm />
    </>
  );
}
