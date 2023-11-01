import art1 from "../images/article1.png";
import art2 from "../images/article2.png";
import art3 from "../images/article3.png";
import art4 from "../images/article4.png";
import art5 from "../images/article5.png";
import art6 from "../images/article6.png";
import bg from "../images/blog.png";
import Articles from "../components/Articles";
import LastPost from "../components/LastPost";

const Blog = () => {
  const articles = [
    {
      imgUrl: art1,
      description: "Let’s Get Solution For Building Construction Work",
      date: "26 December,2022",
    },
    {
      imgUrl: art2,
      description: "Low Cost Latest Invented Interior Designing Ideas.",
      date: "28 December,2022 ",
    },
    {
      imgUrl: art3,
      description: "Best For Any Office & Business Interior Solution",
      date: "30 December,2022",
    },
    {
      imgUrl: art4,
      description: "Let’s Get Solution For Building Construction Work",
      date: "26 December,2022",
    },
    {
      imgUrl: art5,
      description: "Low Cost Latest Invented Interior Designing Ideas.",
      date: "28 December,2022",
    },
    {
      imgUrl: art6,
      description: "Best For Any Office & Business Interior Solution",
      date: "30 December,2022",
    },
  ];
  return (
    <>
      <p className="h-[60px]"></p>
      <img src={bg} className="min-h-[250px]" />
      <LastPost/>
      <Articles articles={articles} />
    </>
  );
};

export default Blog;
