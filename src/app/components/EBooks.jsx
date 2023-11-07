import Link from "next/link";

function EBooks() {
  return (
    <section className="e-book-section mn v-align-gap-1">
      <h2 className="text-center colored-white text-center">
        Take Your Training To <br />
        The <span className="colored-primary">Next Level</span>
      </h2>
      <p className="colored-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eos
        deleniti tempore et nihil magnam saepe ducimus, nam non sed.
      </p>
      <p className="colored-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error molestiae
        mollitia perferendis possimus quos architecto iure nostrum officia odio
        amet corrupti repudiandae, sunt delectus asperiores expedita earum
        rerum.
      </p>
      <Link href="/ebooks" className="button">
        Purchase
      </Link>
      <div className="ebook-img"></div>
      <div className="ebook-img"></div>
    </section>
  );
}

export default EBooks;
