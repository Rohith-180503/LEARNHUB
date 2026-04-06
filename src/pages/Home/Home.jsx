import fakeData from "../../fakeData/fakeData";
import Course from "../../Components/Course/Course";
import "./Home.css";

const Home = () => {
  return (
    <main className="home-page">
      <section className="home-hero" aria-labelledby="home-heading">
        <div className="home-hero__glow" aria-hidden />
        <div className="home-hero__content">
          <p className="home-hero__eyebrow">Professional courses · Learn at your pace</p>
          <h1 id="home-heading" className="home-hero__title">
            Build skills that{" "}
            <span className="home-hero__title-accent">move your career forward</span>
          </h1>
          <p className="home-hero__lead">
            Expert-led programs in development, data, cloud, and design — structured
            for clarity, depth, and real-world practice. Browse the catalog and add
            courses to your cart to get started.
          </p>
        </div>
      </section>

      <section className="home-catalog" aria-labelledby="catalog-heading">
        <div className="home-catalog__inner">
          <header className="home-catalog__header">
            <h2 id="catalog-heading" className="home-catalog__title">
              Course catalog
            </h2>
            <p className="home-catalog__subtitle">
              {fakeData.length} programs available · Self-paced learning
            </p>
          </header>
          <div className="course-grid">
            {fakeData.map((course) => (
              <Course key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
