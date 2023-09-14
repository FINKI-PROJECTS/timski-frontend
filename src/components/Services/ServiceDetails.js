import { Link, useParams } from "react-router-dom";

import styles from "./ServiceDetails.module.scss";
import Services from "../Services/Services";
import image from "../../assets/home-banner-bg.jpg";
import { Container } from "../layout/Container";

const fourLastServices = [
  {
    postId: 1,
    name: "Updated Post Name",
    price: "55.00",
    thumbnail: "https://example.com/newimage.jpg",
    description: "<p>This is an updated HTML description.</p>",
    category: "Updated Category",
    createdUser: {
      id: 2,
      fullName: "Jeton 1 R",
    },
  },
  {
    postId: 1,
    name: "Updated Post Name",
    price: "55.00",
    thumbnail: "https://example.com/newimage.jpg",
    description: "<p>This is an updated HTML description.</p>",
    category: "Updated Category",
    createdUser: {
      id: 2,
      fullName: "Jeton 1 R",
    },
  },
  {
    postId: 1,
    name: "Updated Post Name",
    price: "55.00",
    thumbnail: "https://example.com/newimage.jpg",
    description: "<p>This is an updated HTML description.</p>",
    category: "Updated Category",
    createdUser: {
      id: 2,
      fullName: "Jeton 1 R",
    },
  },
  {
    postId: 1,
    name: "Updated Post Name",
    price: "55.00",
    thumbnail: "https://example.com/newimage.jpg",
    description: "<p>This is an updated HTML description.</p>",
    category: "Updated Category",
    createdUser: {
      id: 2,
      fullName: "Jeton 1 R",
    },
  },
];

const ServiceDetails = () => {
  const { serviceId } = useParams();

  console.log(serviceId);

  return (
    <div className={styles.serviceDetails}>
      <div className={styles["service-details-banner"]}>
        <img src={image} alt='Test' className={styles.thumbnail} />
      </div>
      <Container>
        <div className={styles.content}>
          <div className={styles.info}>
            <h2>Service Title</h2>
            <div>
              <span style={{ backgroundColor: 'rgb(217, 237, 86)' }}>Category Name</span>
              <span style={{ backgroundColor: '#81c6db' }}>User: Jeton Ramadani</span>
              <span>Price: 1500 den</span>
            </div>
          </div>
          <div className={styles.description}>
            <article>
            <h2>How to Create the Perfect Dummy Blog Post</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod quam a diam efficitur, sed eleifend urna fringilla.
                Nulla facilisi. Nulla facilisi. Nam a libero ac nisi fermentum
                malesuada non eget lectus.
              </p>
              <p>
                In this article, we'll explore the art of crafting the ideal
                dummy blog post. From choosing the right title to formatting
                your content, you'll learn all the tricks of the trade. So,
                let's get started!
              </p>
              <h3>Choosing an Engaging Title</h3>
              <p>
                The title of your blog post is the first thing readers see, so
                make it attention-grabbing and relevant to your content. Don't
                forget to use keywords for SEO!
              </p>
              <h3>Structuring Your Content</h3>
              <p>
                Organize your content into sections with clear headings. Use
                paragraphs, lists, and images to break up the text and make it
                more readable.
              </p>
              <h3>Adding Images</h3>
              <p>
                Images can enhance your blog post. Include high-quality visuals
                that relate to your topic and don't forget to add alt text for
                accessibility.
              </p>
              <h3>Conclusion</h3>
              <p>
                Wrap up your blog post with a summary of key points. Encourage
                readers to leave comments and share your post on social media.
              </p><h2>How to Create the Perfect Dummy Blog Post</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod quam a diam efficitur, sed eleifend urna fringilla.
                Nulla facilisi. Nulla facilisi. Nam a libero ac nisi fermentum
                malesuada non eget lectus.
              </p>
              <p>
                In this article, we'll explore the art of crafting the ideal
                dummy blog post. From choosing the right title to formatting
                your content, you'll learn all the tricks of the trade. So,
                let's get started!
              </p>
              <h3>Choosing an Engaging Title</h3>
              <p>
                The title of your blog post is the first thing readers see, so
                make it attention-grabbing and relevant to your content. Don't
                forget to use keywords for SEO!
              </p>
              <h3>Structuring Your Content</h3>
              <p>
                Organize your content into sections with clear headings. Use
                paragraphs, lists, and images to break up the text and make it
                more readable.
              </p>
              <h3>Adding Images</h3>
              <p>
                Images can enhance your blog post. Include high-quality visuals
                that relate to your topic and don't forget to add alt text for
                accessibility.
              </p>
              <h3>Conclusion</h3>
              <p>
                Wrap up your blog post with a summary of key points. Encourage
                readers to leave comments and share your post on social media.
              </p><h2>How to Create the Perfect Dummy Blog Post</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod quam a diam efficitur, sed eleifend urna fringilla.
                Nulla facilisi. Nulla facilisi. Nam a libero ac nisi fermentum
                malesuada non eget lectus.
              </p>
              <p>
                In this article, we'll explore the art of crafting the ideal
                dummy blog post. From choosing the right title to formatting
                your content, you'll learn all the tricks of the trade. So,
                let's get started!
              </p>
              <h3>Choosing an Engaging Title</h3>
              <p>
                The title of your blog post is the first thing readers see, so
                make it attention-grabbing and relevant to your content. Don't
                forget to use keywords for SEO!
              </p>
              <h3>Structuring Your Content</h3>
              <p>
                Organize your content into sections with clear headings. Use
                paragraphs, lists, and images to break up the text and make it
                more readable.
              </p>
              <h3>Adding Images</h3>
              <p>
                Images can enhance your blog post. Include high-quality visuals
                that relate to your topic and don't forget to add alt text for
                accessibility.
              </p>
              <h3>Conclusion</h3>
              <p>
                Wrap up your blog post with a summary of key points. Encourage
                readers to leave comments and share your post on social media.
              </p>
            </article>
          </div>
        </div>

        <div className={styles.bottom}>
          <h3>Check more services</h3>
          <Services services={fourLastServices} />
        </div>
      </Container>
    </div>
  );
};

export default ServiceDetails;
