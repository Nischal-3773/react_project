// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';

// // // const API_KEY = '2d85638d1a50462e93dbee23c161105a'; 
// // // const COUNTRY = 'us'; 
// // // const CATEGORY = 'technology'; 

// // // function App() {
// // //   const [articles, setArticles] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     fetchNews();
// // //   }, []);

// // //   const fetchNews = async () => {
// // //     try {
// // //       const response = await axios.get(
// // //         `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&category=${CATEGORY}&apiKey=${API_KEY}`
// // //       );
// // //       setArticles(response.data.articles);
// // //       setLoading(false);
// // //     } catch (error) {
// // //       console.error('Error fetching news:', error);
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div style={styles.container}>
// // //       <h1 style={styles.header}>📰 Tech News Headlines</h1>
// // //       {loading ? (
// // //         <p>Loading...</p>
// // //       ) : (
// // //         <div style={styles.cardContainer}>
// // //           {articles.map((article, index) => (
// // //             <div key={index} style={styles.card}>
// // //               <img src={article.urlToImage} alt="news" style={styles.image} />
// // //               <div style={styles.content}>
// // //                 <h3 style={styles.title}>{article.title}</h3>
// // //                 <p style={styles.description}>{article.description}</p>
// // //                 <a href={article.url} target="_blank" rel="noopener noreferrer" style={styles.button}>
// // //                   Read More
// // //                 </a>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // const styles = {
// // //   container: {
// // //     padding: '20px',
// // //     fontFamily: 'Arial, sans-serif',
// // //     backgroundColor: '#f2f2f2',
// // //     minHeight: '100vh',
// // //   },
// // //   header: {
// // //     textAlign: 'center',
// // //     color: '#333',
// // //     marginBottom: '30px',
// // //   },
// // //   cardContainer: {
// // //     display: 'grid',
// // //     gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
// // //     gap: '20px',
// // //   },
// // //   card: {
// // //     backgroundColor: 'white',
// // //     borderRadius: '10px',
// // //     overflow: 'hidden',
// // //     boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
// // //     transition: 'transform 0.2s',
// // //   },
// // //   image: {
// // //     width: '100%',
// // //     height: '180px',
// // //     objectFit: 'cover',
// // //   },
// // //   content: {
// // //     padding: '15px',
// // //   },
// // //   title: {
// // //     fontSize: '18px',
// // //     color: '#222',
// // //   },
// // //   description: {
// // //     fontSize: '14px',
// // //     color: '#555',
// // //     marginTop: '10px',
// // //   },
// // //   button: {
// // //     display: 'inline-block',
// // //     marginTop: '15px',
// // //     padding: '10px 15px',
// // //     backgroundColor: '#007bff',
// // //     color: 'white',
// // //     borderRadius: '5px',
// // //     textDecoration: 'none',
// // //   },
// // // };

// // // export default App;
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const API_KEY = '2d85638d1a50462e93dbee23c161105a';
// // const COUNTRY = 'us';

// // const CATEGORIES = ['technology', 'sports', 'health', 'education', 'politics'];

// // function App() {
// //   const [articles, setArticles] = useState([]);
// //   const [selectedCategory, setSelectedCategory] = useState('technology');
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     fetchNews(selectedCategory);
// //   }, [selectedCategory]);

// //   const fetchNews = async (category) => {
// //     setLoading(true);
// //     try {
// //       const response = await axios.get(
// //         `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&category=${category}&apiKey=${API_KEY}`
// //       );
// //       setArticles(response.data.articles);
// //     } catch (error) {
// //       console.error('Error fetching news:', error);
// //     }
// //     setLoading(false);
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <h1 style={styles.header}>📰 News Headlines</h1>

// //       <div style={styles.nav}>
// //         {CATEGORIES.map((category) => (
// //           <button
// //             key={category}
// //             onClick={() => setSelectedCategory(category)}
// //             style={{
// //               ...styles.navButton,
// //               backgroundColor: selectedCategory === category ? '#007bff' : 'white',
// //               color: selectedCategory === category ? 'white' : '#007bff',
// //             }}
// //           >
// //             {category.charAt(0).toUpperCase() + category.slice(1)}
// //           </button>
// //         ))}
// //       </div>

// //       {loading ? (
// //         <p style={{ textAlign: 'center', marginTop: '30px' }}>Loading...</p>
// //       ) : (
// //         <div style={styles.cardContainer}>
// //           {articles.map((article, index) => (
// //             <div key={index} style={styles.card}>
// //               {article.urlToImage && (
// //                 <img src={article.urlToImage} alt="news" style={styles.image} />
// //               )}
// //               <div style={styles.content}>
// //                 <h3 style={styles.title}>{article.title}</h3>
// //                 <p style={styles.description}>{article.description}</p>
// //                 <a
// //                   href={article.url}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   style={styles.button}
// //                 >
// //                   Read More
// //                 </a>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // const styles = {
// //   container: {
// //     padding: '20px',
// //     fontFamily: 'Arial, sans-serif',
// //     backgroundColor: '#f4f4f4',
// //     minHeight: '100vh',
// //   },
// //   header: {
// //     textAlign: 'center',
// //     color: '#333',
// //     marginBottom: '20px',
// //   },
// //   nav: {
// //     display: 'flex',
// //     justifyContent: 'center',
// //     flexWrap: 'wrap',
// //     gap: '10px',
// //     marginBottom: '30px',
// //   },
// //   navButton: {
// //     padding: '10px 15px',
// //     border: '2px solid #007bff',
// //     borderRadius: '5px',
// //     cursor: 'pointer',
// //     fontWeight: 'bold',
// //     transition: '0.3s',
// //   },
// //   cardContainer: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
// //     gap: '20px',
// //   },
// //   card: {
// //     backgroundColor: 'white',
// //     borderRadius: '10px',
// //     overflow: 'hidden',
// //     boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
// //     transition: 'transform 0.2s',
// //   },
// //   image: {
// //     width: '100%',
// //     height: '180px',
// //     objectFit: 'cover',
// //   },
// //   content: {
// //     padding: '15px',
// //   },
// //   title: {
// //     fontSize: '18px',
// //     color: '#222',
// //   },
// //   description: {
// //     fontSize: '14px',
// //     color: '#555',
// //     marginTop: '10px',
// //   },
// //   button: {
// //     display: 'inline-block',
// //     marginTop: '15px',
// //     padding: '10px 15px',
// //     backgroundColor: '#007bff',
// //     color: 'white',
// //     borderRadius: '5px',
// //     textDecoration: 'none',
// //   },
// // };

// // export default App;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const API_KEY = '2d85638d1a50462e93dbee23c161105a';
// const COUNTRY = 'us';

// const CATEGORIES = ['technology', 'sports', 'health', 'education', 'politics'];

// function App() {
//   const [articles, setArticles] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('technology');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchNews(selectedCategory);
//   }, [selectedCategory]);

//   const fetchNews = async (category) => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&category=${category}&apiKey=${API_KEY}`
//       );
//       setArticles(response.data.articles);
//     } catch (error) {
//       console.error('Error fetching news:', error);
//     }
//     setLoading(false);
//   };

//   return (
//     <div style={styles.container}>
//       {/* Top Header with Logo and Title */}
//       <header style={styles.headerTop}>
//         <span style={styles.logo}>📘</span>
//         <h1 style={styles.title}>Kathmandu College of Technology(Daily News)</h1>
//       </header>

//       {/* Category Navigation */}
//       <div style={styles.nav}>
//         {CATEGORIES.map((category) => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             style={{
//               ...styles.navButton,
//               backgroundColor: selectedCategory === category ? '#007bff' : 'white',
//               color: selectedCategory === category ? 'white' : '#007bff',
//             }}
//           >
//             {category.charAt(0).toUpperCase() + category.slice(1)}
//           </button>
//         ))}
//       </div>

//       {/* News Section */}
//       {loading ? (
//         <p style={{ textAlign: 'center', marginTop: '30px' }}>Loading...</p>
//       ) : (
//         <div style={styles.cardContainer}>
//           {articles.map((article, index) => (
//             <div key={index} style={styles.card}>
//               {article.urlToImage && (
//                 <img src={article.urlToImage} alt="news" style={styles.image} />
//               )}
//               <div style={styles.content}>
//                 <h3 style={styles.titleText}>{article.title}</h3>
//                 <p style={styles.description}>{article.description}</p>
//                 <a
//                   href={article.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={styles.button}
//                 >
//                   Read More
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// // ========== Styles ==========
// const styles = {
//   container: {
//     padding: '20px',
//     fontFamily: 'Arial, sans-serif',
//     backgroundColor: '#f4f4f4',
//     minHeight: '100vh',
//   },
//   headerTop: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '10px',
//     backgroundColor: '#007bff',
//     padding: '15px 10px',
//     borderRadius: '8px',
//     marginBottom: '20px',
//   },
//   logo: {
//     fontSize: '30px',
//   },
//   title: {
//     color: 'white',
//     fontSize: '24px',
//     fontWeight: 'bold',
//     margin: 0,
//   },
//   nav: {
//     display: 'flex',
//     justifyContent: 'center',
//     flexWrap: 'wrap',
//     gap: '10px',
//     marginBottom: '30px',
//   },
//   navButton: {
//     padding: '10px 15px',
//     border: '2px solid #007bff',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     fontWeight: 'bold',
//     transition: '0.3s',
//   },
//   cardContainer: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//     gap: '20px',
//   },
//   card: {
//     backgroundColor: 'white',
//     borderRadius: '10px',
//     overflow: 'hidden',
//     boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//   },
//   image: {
//     width: '100%',
//     height: '180px',
//     objectFit: 'cover',
//   },
//   content: {
//     padding: '15px',
//   },
//   titleText: {
//     fontSize: '18px',
//     color: '#222',
//   },
//   description: {
//     fontSize: '14px',
//     color: '#555',
//     marginTop: '10px',
//   },
//   button: {
//     display: 'inline-block',
//     marginTop: '15px',
//     padding: '10px 15px',
//     backgroundColor: '#007bff',
//     color: 'white',
//     borderRadius: '5px',
//     textDecoration: 'none',
//   },
// };

// export default App;   //    import myImage from './path/to/your/image.png';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logoboom.jpg';
const API_KEY = '2d85638d1a50462e93dbee23c161105a';
const COUNTRY = 'us';

const CATEGORIES = ['technology', 'sports', 'health', 'education', 'politics'];

function App() {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('technology');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews(selectedCategory);
  }, [selectedCategory]);

  const fetchNews = async (category) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&category=${category}&apiKey=${API_KEY}`
      );
      setArticles(response.data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      {/* Header with Logo and Title */}
      <header style={styles.headerTop}>
       <img className="photo"  src={logo} alt="logo"  style={styles.photo}/>
        <h1 style={styles.title}>Kathmandu College of Technology (Daily News)</h1>
      </header>

      {/* Category Buttons */}
      <div style={styles.nav}>
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              ...styles.navButton,
              backgroundColor: selectedCategory === category ? '#007bff' : 'white',
              color: selectedCategory === category ? 'white' : '#007bff',
            }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* News Articles */}
      {loading ? (
        <p style={{ textAlign: 'center', marginTop: '30px' }}>Loading...</p>
      ) : (
        <div style={styles.cardContainer}>
          {articles.map((article, index) => (
            <div key={index} style={styles.card}>
              {article.urlToImage && (
                <img src={article.urlToImage} alt="news" style={styles.image} />
              )}
              <div style={styles.content}>
                <h3 style={styles.titleText}>{article.title}</h3>
                <p style={styles.description}>{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.button}
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ========== Styles ==========
 
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
  },
  headerTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
    backgroundColor: '#007bff',
    padding: '15px 10px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  logoImage: {
    height: '40px',
    width: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  title: {
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: 0,
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '30px',
  },
  navButton: {
    padding: '10px 15px',
    border: '2px solid #007bff',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: '0.3s',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
  },
  content: {
    padding: '15px',
  },
  titleText: {
    fontSize: '18px',
    color: '#222',
  },
  description: {
    fontSize: '14px',
    color: '#555',
    marginTop: '10px',
  },
  button: {
    display: 'inline-block',
    marginTop: '15px',
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '5px',
    textDecoration: 'none',
  },
  photo: {
    height: '100px',
    width: '100px',
  },
  
};

export default App;
