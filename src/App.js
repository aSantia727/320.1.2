 import React from 'react';
    import Header from './Header';
    import Article from './Article';
    import Footer from './Footer';
    import './App.css';

    function App() {
      const articles = [
        {
          image: '../image/blog-image-1.jpg',
          alt: 'Fashion-Image-1',
          title: 'Article Title 1',
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae nulla nec nibh suscipit fringilla. Donec elementum, augue eget efficitur lacinia, nisi elit ultricies tellus, eu viverra tellus nulla ac enim."
        },
        {
          image: '../image/blog-image-1.jpg',
          alt: 'Fashion Image 2',
          title: 'Article Title 2',
          content: "Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
        }
      ];

      return (
        <div>
          <Header />
          <main>
            {articles.map((article, index) => (
              <Article key={index} {...article} />
            ))}
          </main>
          <Footer />
        </div>
      );
    }

    export default App;
